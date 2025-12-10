import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP( () => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: {trigger: card, start: "top bottom-=100"}, }
            );

        }, []);

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5}
        );
    }, []);


    return(
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Orion180’s My180"/>
                        </div>
                        <div className="text-content">
                            <h2>Orion180’s My180 empower policyholders to stay connected and in control of their insurance while enabling agents to quote, bind, and manage policies on the go, making it a first‑of‑its‑kind solution that simplifies workflows across desktop and mobile</h2>
                            <p>Built with Vue, .NET, SQL, Azure for scalable, responsive, and user-friendly experience.</p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#4682B4]">
                                <img src="/images/project2.png" alt="Satcom Direct's SD Pro & SD Scheduler"/>
                            </div>
                            <h2>SD Pro provides operators with real‑time insights into flight operations, connectivity, and aircraft performance, while SD Scheduler ensures seamless coordination of crew, aircraft, and resources. Combined, they create a powerful platform that reduces complexity and empowers aviation teams to operate with precision.</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#5E7D7E]">
                                <img src="/images/project3.png" alt="Globe Wireless' Globe Mapping, GCC, Globe Relay, & Globe Forms"/>
                            </div>
                            <h2>Globe Mapping was a geospatial tool for monitoring ship positions, routes, and satellite communication footprints across global fleets. Additional projects included GCC, Globe Relay, and Globe Forms.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;