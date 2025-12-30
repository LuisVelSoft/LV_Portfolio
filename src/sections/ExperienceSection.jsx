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
  const logoColumnRef = useRef(null);
  const lineRef = useRef(null);
  const timelineAnimRef = useRef(null);

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

  // Wait for images inside an element to load (with timeout)
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

  // Position the line and create the timeline animation after geometry is stable
  useEffect(() => {
    if (!wrapperRef.current || !lineRef.current) return;

    const wrapperEl = wrapperRef.current;
    const lineEl = lineRef.current;

    // Base styles
    lineEl.style.position = 'absolute';
    lineEl.style.top = '0px';
    lineEl.style.left = '50%';
    lineEl.style.transform = 'translateX(-50%)';
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
          timelineAnimRef.current.scrollTrigger && timelineAnimRef.current.scrollTrigger.kill();
          timelineAnimRef.current.kill();
        } catch (e) {
          // ignore
        }
        timelineAnimRef.current = null;
      }

      // Ensure visible before animating
      lineEl.style.visibility = 'visible';
      lineEl.style.opacity = '1';

      // Animate CSS height from 0px to fullHeight using GSAP
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

      // Refresh and, for Edge only, dispatch a single resize event as a one-time nudge
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            timelineAnimRef.current.scrollTrigger && timelineAnimRef.current.scrollTrigger.refresh();
          } catch (e) {
            // ignore
          }
          ScrollTrigger.refresh();

          if (isEdgeBrowser()) {
            // single, harmless resize event to trigger Edge paint
            window.dispatchEvent(new Event('resize'));
          }
        });
      });
    };

    const updateLine = () => {
      const wrapperRect = wrapperEl.getBoundingClientRect();

      let leftPx;
      if (logoColumnRef.current) {
        const logoRect = logoColumnRef.current.getBoundingClientRect();
        leftPx = logoRect.left - wrapperRect.left + logoRect.width / 2;
      } else {
        leftPx = wrapperRect.width / 2;
      }

      lineEl.style.left = `${leftPx}px`;
      const finalHeight = wrapperEl.offsetHeight;
      lineEl.style.height = '0px';

      ScrollTrigger.refresh();

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          createHeightAnimation(finalHeight);
          ScrollTrigger.refresh();
        });
      });
    };

    let cancelled = false;
    const orchestrate = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch (e) {
        // ignore
      }

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
        updateLine();
      }, 30);
    };

    orchestrate();

    const ro = new ResizeObserver(() => {
      updateLine();
    });

    ro.observe(wrapperEl);
    if (logoColumnRef.current) ro.observe(logoColumnRef.current);

    const onResize = () => updateLine();
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener('resize', onResize);
      if (timelineAnimRef.current) {
        try {
          timelineAnimRef.current.scrollTrigger && timelineAnimRef.current.scrollTrigger.kill();
          timelineAnimRef.current.kill();
        } catch (e) {
          // ignore
        }
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
              left: '50%',
              transform: 'translateX(-50%)',
              height: '0px',
              width: '2px',
              zIndex: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
            }}
          />

          <div className="relative flex flex-col space-y-32">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="timeline-card flex items-start gap-10 relative"
              >
                <div className="xl:w-2/6 w-full">
                  <GlowCard card={card}>
                    <img src={card.imgPath} alt={card.title} />
                  </GlowCard>
                </div>

                <div
                  className="relative w-16 flex justify-center"
                  ref={index === 0 ? logoColumnRef : null}
                >
                  <div className="relative w-14 sm:w-16 md:w-20 flex justify-center" ref={index === 0 ? logoColumnRef : null}>
                    <div className="timeline-logo relative z-10 w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 rounded-full bg-black flex items-center justify-center">
                      <img src={card.logoPath} alt="logo" className="w-6 sm:w-8 md:w-12 h-auto object-contain" />
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
