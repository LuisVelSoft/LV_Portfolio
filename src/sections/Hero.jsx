import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";

 const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1", 
            { y: 50, opacity: 0 }, 
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="" />
            </div>

            <div className="hero-layout">
                {/* LEFT: Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
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
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                        {/* <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Luis, a Technology Executive rooted in the Space Coast,<br />
                            driving innovation across SaaS, AI automation, and modern web<br />
                            technologies. With a passion for transforming ideas into<br />
                            scalable solutions, I blend strategic leadership with hands-on<br />
                            engineering to build products that deliver real impact.<br />
                        </p> */}

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Luis, a Technology Executive based on the Space Coast<br />
                            with 20+ years of full‑stack engineering experience and 10+ years<br />
                            leading enterprise technology organizations. I drive transformation<br />
                            across SaaS, AI automation, and cloud‑native platforms, aligning<br />
                            engineering strategy with business growth. By blending strategic<br />
                            leadership with hands‑on technical depth, I’ve scaled teams to 100+<br />
                            engineers, delivered platforms supporting $300M+ revenue, and<br />
                            achieved compliance across SOC2, PCI‑DSS, HIPAA, and GDPR —<br />
                            building solutions that deliver measurable impact.<br />
                        </p>


                        <Button
                            text="See My Work"
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="counter" 
                        />
                    </div>
                </header>

                {/* RIGHT: 3D Model or Visual */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    );
 };

 export default Hero;
