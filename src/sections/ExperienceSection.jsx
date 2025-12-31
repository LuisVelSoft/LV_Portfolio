import React, { useEffect, useRef } from 'react';
import TitleHeader from '../components/TitleHeader';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isEdgeBrowser = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return ua.includes('Edg/') || ua.includes('Edge/');
};

const ExperienceSection = () => {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);
  const timelineAnimRef = useRef(null);

  const logoMobileRef = useRef(null);
  const logoDesktopRef = useRef(null);
  const lastHeightRef = useRef(null);

  // Cards and text animations
  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 70%',
        },
      });
    });
  }, []);

  const waitForImages = (container, timeout = 1000) =>
    new Promise((resolve) => {
      if (!container) return resolve();
      const imgs = Array.from(container.querySelectorAll('img'));
      if (imgs.length === 0) return resolve();

      let loaded = 0;
      let done = false;
      const onDone = () => {
        if (done) return;
        done = true;
        resolve();
      };

      imgs.forEach((img) => {
        if (img.complete) {
          loaded += 1;
          if (loaded === imgs.length) onDone();
        } else {
          img.addEventListener(
            'load',
            () => {
              loaded += 1;
              if (loaded === imgs.length) onDone();
            },
            { once: true }
          );
          img.addEventListener(
            'error',
            () => {
              loaded += 1;
              if (loaded === imgs.length) onDone();
            },
            { once: true }
          );
        }
      });

      setTimeout(onDone, timeout);
    });

  useEffect(() => {
    if (!wrapperRef.current || !lineRef.current) return;

    const wrapperEl = wrapperRef.current;
    const lineEl = lineRef.current;

    // Base styles
    lineEl.style.position = 'absolute';
    lineEl.style.top = '0px';
    lineEl.style.left = '0px';
    lineEl.style.transform = 'none';
    lineEl.style.width = '2px';
    lineEl.style.zIndex = '0';
    lineEl.style.pointerEvents = 'none';
    lineEl.style.height = '0px';
    lineEl.style.visibility = 'hidden';
    lineEl.style.opacity = '0';
    lineEl.style.overflow = 'hidden';
    lineEl.style.willChange = 'height, transform';
    lineEl.style.backfaceVisibility = 'hidden';

    const createHeightAnimation = (fullHeight) => {
      if (timelineAnimRef.current) {
        try {
          if (timelineAnimRef.current.scrollTrigger) {
            timelineAnimRef.current.scrollTrigger.kill();
          }
          timelineAnimRef.current.kill();
        } catch (e) {}
        timelineAnimRef.current = null;
      }

      lineEl.style.visibility = 'visible';
      lineEl.style.opacity = '1';

      timelineAnimRef.current = gsap.fromTo(
        lineEl,
        { height: '0px' },
        {
          height: `${fullHeight}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: '#experience',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: true,
          },
        }
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            if (timelineAnimRef.current.scrollTrigger) {
              timelineAnimRef.current.scrollTrigger.refresh();
            }
          } catch (e) {}

          if (isEdgeBrowser()) {
            window.dispatchEvent(new Event('resize'));
          }
        });
      });
    };

    // -----------------------------
    // 🔥 NEW: Micro‑throttle wrapper
    // -----------------------------
    let updateScheduled = false;

    const scheduleUpdateLine = () => {
      if (updateScheduled) return;
      updateScheduled = true;

      requestAnimationFrame(() => {
        updateLine();
        updateScheduled = false;
      });
    };

    const updateLine = () => {
    // Cache wrapper rect once
    const wrapperRect = wrapperEl.getBoundingClientRect();
    const wrapperHeight = wrapperEl.offsetHeight; // read once

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    let targetEl = null;
    if (isDesktop) {
      targetEl = logoDesktopRef.current || logoMobileRef.current;
    } else {
      targetEl = logoMobileRef.current || logoDesktopRef.current;
    }

    let leftPx;
    if (targetEl) {
      // Cache logo rect once
      const logoRect = targetEl.getBoundingClientRect();
      leftPx = logoRect.left - wrapperRect.left + logoRect.width / 2;
    } else {
      leftPx = wrapperRect.width / 2;
    }

    lineEl.style.left = `${leftPx}px`;

    // Force synchronous layout read to ensure first paint (Edge fix)
    lineEl.getBoundingClientRect();

    // Use cached height
    lineEl.style.height = '0px';
    createHeightAnimation(wrapperHeight);
  };

  let cancelled = false;

    const orchestrate = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch (e) {}

      await waitForImages(wrapperEl, 1000);

      if (document.readyState !== 'complete') {
        await new Promise((res) => {
          const onLoad = () => {
            window.removeEventListener('load', onLoad);
            res();
          };
          window.addEventListener('load', onLoad);
          setTimeout(() => {
            window.removeEventListener('load', onLoad);
            res();
          }, 800);
        });
      }

      if (cancelled) return;

      setTimeout(() => {
        if (cancelled) return;
        scheduleUpdateLine(); // 🔥 throttled
      }, 30);
    };

    orchestrate();

    const ro = new ResizeObserver(() => {
      scheduleUpdateLine(); // 🔥 throttled
    });

    ro.observe(wrapperEl);
    
    const onResize = () => scheduleUpdateLine(); // 🔥 throttled
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener('resize', onResize);
      if (timelineAnimRef.current) {
        try {
          if (timelineAnimRef.current.scrollTrigger) {
            timelineAnimRef.current.scrollTrigger.kill();
          }
          timelineAnimRef.current.kill();
        } catch (e) {}
        timelineAnimRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative" ref={wrapperRef}>
          <div
            ref={lineRef}
            aria-hidden="true"
            className="timeline-line bg-gradient-to-b from-purple-500 to-blue-500"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'none',
              height: '0px',
              width: '2px',
              zIndex: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}
          />

          <div
            className="
              grid 
              grid-cols-[auto_1fr] 
              md:grid-cols-[minmax(0,30vw)_80px_1fr] 
              gap-10 
              relative
            "
          >
            {expCards.map((card, index) => (
              <React.Fragment key={card.title}>
                <div
                  className="flex justify-center md:hidden"
                  ref={index === 0 ? logoMobileRef : null}
                >
                  <div className="relative w-14 flex justify-center">
                    <div className="timeline-logo relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center">
                      <img
                        src={card.logoPath}
                        alt="logo"
                        className="w-6 h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="expText md:hidden">
                  <h1 className="font-semibold text-3xl">{card.title}</h1>
                  <p className="my-5 text-white-50">📆 {card.date}</p>
                  <p className="text-[#839CB5] italic">Responsibilities</p>
                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                    {card.responsibilities.map((r, i) => (
                      <li key={i} className="text-lg">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:hidden col-start-2 justify-self-end">
                  <GlowCard card={card}>
                    <img src={card.imgPath} alt={card.title} />
                  </GlowCard>
                </div>

                <div className="hidden md:flex timeline-card items-start gap-10 col-span-3">
                  <div className="w-full md:max-w-[30vw]">
                    <GlowCard card={card}>
                      <img src={card.imgPath} alt={card.title} />
                    </GlowCard>
                  </div>

                  <div
                    className="relative w-16 flex justify-center mt-6"
                    ref={index === 0 ? logoDesktopRef : null}
                  >
                    <div className="relative w-16 md:w-20 flex justify-center">
                      <div className="timeline-logo relative z-10 w-12 md:w-12 h-12 md:h-12 rounded-full bg-black flex items-center justify-center">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="w-8 md:w-12 h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="expText flex-1 relative z-20">
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="my-5 text-white-50">📆 {card.date}</p>
                    <p className="text-[#839CB5] italic">Responsibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                      {card.responsibilities.map((r, i) => (
                        <li key={i} className="text-lg">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
