"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Cpu } from "lucide-react";

export default function ContactFooter() {
    return (
        <footer id="contact" className="relative bg-void border-t border-white/10 pt-24 pb-10 overflow-hidden">

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[1px] w-12 bg-neon" />
                            <h2 className="text-neon font-mono tracking-widest text-sm">COMMUNICATION UPLINK</h2>
                        </div>

                        <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-6">
                            LEONARDO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-600">CANTELLE</span>
                        </h3>

                        <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8 font-mono">
                            Estudante de desenvolvimento e Maker. Criando automações inteligentes e hardware customizado.
                        </p>

                        <a
                            href="mailto:cantelleleonardo@gmail.com"
                            className="group inline-flex items-center gap-3 text-2xl font-mono text-white hover:text-neon transition-colors"
                        >
                            <Mail className="group-hover:animate-pulse" />
                            <span>cantelleleonardo@gmail.com</span>
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="flex flex-col justify-end items-start md:items-end gap-4">
                        {[
                            { name: "GITHUB PROFILE", icon: Github, link: "https://github.com/Leonardo027" },
                            { name: "LINKEDIN CONNECT", icon: Linkedin, link: "https://www.linkedin.com/in/leonardo-cantelle-17966625b/" },
                            { name: "HACKPAD REPO", icon: Cpu, link: "https://github.com/Leonardo027/Hackpad_Hack_Club" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full md:w-80 px-6 py-4 bg-white/5 border border-white/10 hover:border-neon hover:bg-white/10 transition-all group"
                            >
                                <span className="font-mono text-sm text-gray-300 group-hover:text-white">{social.name}</span>
                                <social.icon size={18} className="text-gray-500 group-hover:text-neon transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600">
                    <p>&copy; 2026 LEONARDO CANTELLE. SYSTEM ONLINE.</p>

                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <span className="hover:text-neon cursor-pointer transition-colors">STATUS: OPEN TO WORK</span>
                        <div className="flex items-center gap-2 text-neon">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
                            </span>
                            ONLINE
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}