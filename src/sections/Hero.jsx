import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
// Replaced HeroExperience 3D model with a static image (LuisPortfolioImage.png)

 const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    return (
        <section id="hero" className="relative">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="hero-layout">
                <div className="hero-text md:px-20 px-5 md:mt-80">
                    <h1>
                        Shaping
                        <span className="slide">
                            <span className="wrapper">
                                {words.map((word, index) => (
                                    <span
                                         key={index}
                                         className="flex items-center md:gap-3 gap-1 pb-2"
                                         >
                                        <img
                                            src={word.imgPath}
                                            alt="person"
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>
                        into Innovative Projects that Deliver Results
                    </h1>
                </div>

                <figure className="hero-visual md:px-20 px-5 md:col-start-2 md:row-start-2 xl:col-start-2 xl:row-start-2 transform md:translate-x-[50px] xl:translate-x-[100px] md:-translate-y-[200px]">
                    <div className="hero-3d-layout">
                        <picture>
                            <img
                                src="/images/LuisPortfolioImage.png"
                                alt="Portfolio Preview"
                                className="w-full h-full object-contain rounded-lg"
                                loading="lazy"
                                decoding="async"
                                width="1200"
                                height="800"
                            />
                        </picture>
                    </div>
                </figure>

                <div className="md:px-20 px-5 md:col-start-1 md:row-start-2 xl:col-start-1 xl:row-start-2 md:mt-10">
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-2xl leading-relaxed">
                        Hi, I’m Luis, a Technology Executive based on the Space Coast
                        with 20+ years of full‑stack engineering experience and 10+ years
                        leading enterprise technology organizations. I drive transformation
                        across SaaS, AI automation, and cloud‑native platforms, aligning
                        engineering strategy with business growth. By blending strategic
                        leadership with hands‑on technical depth, I’ve scaled teams to 100+
                        engineers, delivered platforms supporting $300M+ revenue, and
                        achieved compliance across SOC2, PCI‑DSS, HIPAA, and GDPR,
                        building solutions that deliver measurable impact.
                    </p>

                    <Button
                        text="See My Work"
                        className="w-80 mt-8 flex-shrink-0"
                        id="see-work-button" 
                    />
                </div>
            </div>

            <AnimatedCounter />
        </section>
    );
 };

 export default Hero;
