import { AnimatedBorderButton } from "../components/AnimatedBorderButton.jsx";
import {Button} from "../components/Button.jsx";
import { ArrowRight,  Linkedin, Github, Twitter } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Hero = () =>{
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img src="/hero7-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-80" />
            {/* <img src="/hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_,i)=>(
                <div 
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor:"#20B2A6",
                    left:`${Math.random()*100}%`,
                    top:`${Math.random()*100}%`,
                    animation: `slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                    animationDelay: `${Math.random()*5}s`,
                }}
                />
            ))}
        </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div>
                        <div className="animate-fade-in m-4">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                            <span className="w-2 h-2 bg-primary rounded-full"/>
                                Software Engineer React Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">Hi, I'm <span className="text-primary glow-text">Shivendra</span> 👋</h1><br/>
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">Crafting <span className="text-primary glow-text">digital</span>
                            <br/>
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                            </h1>

                            <p className="text-lg text-muted-foreground  animate-fade-in animation-delay-300">
                               An IT student passionate about building efficient and impactful software solutions. <br />
                               I enjoy working with C++, React, and exploring Machine Learning to solve real-world problems.<br />
                            </p>
                        </div>
                                {/* Social Links */}
                           <div className="flex items-center gap-4 animate-fade-in animation-delay-300 m-5">
                                <span>Follow me :</span>

                                {[
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/shivendra-pawaiya-879708323/",},
                                    { icon: FaGithub,href: "https://github.com/Shivendra-20",},
                                    { icon: FaXTwitter,href: "https://x.com/Shivendra_1034",},
                                ].map((social, idx) => {
                                 const Icon = social.icon;

                                 return (
                                      <a
                                     key={idx}
                                     href={social.href}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 "
                                   >
                                     <Icon className="w-5 h-5 text-white hover:text-cyan-400 transition duration-300" />
                                   </a>
                                );
                                })}
                                </div>

                                 {/* Call To Action */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-500">
                            {/* <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button> */}
                            <AnimatedBorderButton/>
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                </div>
            </div>
    </section>)
}