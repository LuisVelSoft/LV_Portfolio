import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer"> 
        <div className="footer-container">
                   
            {/* <div className="flex flex-col justify-center md:items-start items-center">
                <a href="/">Visit my blog</a> 
            </div> */}
        
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-center md:text-end">
                    Built with React, Three.js, Tailwind CSS, GSAP, Node.js, Vite, GitHub, Docker, and AWS
                </p>
                
                <div className="social mt-6">
                {socialImgs.map((img, index) => (
                    <a className="icon" target="_blank" href={img.url} key={img.url}>
                        <img src={img.imgPath} />
                    </a>
                ))}

                </div>
                <p className="text-center md:text-end mt-6">
                    © {new Date().getFullYear()} Luis Velazquez. All rights reserved. 
                </p>
            </div>
        </div>
    </footer>
  );
}   

export default Footer;