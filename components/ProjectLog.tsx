"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
    {
        id: "AI-JARVIS",
        title: "JARVIS VOICE CORE",
        desc: "Assistente de IA conversacional integrado a uma caixa de som antiga adaptada com Bluetooth e ESP32-S3. Atua como cérebro central da automação.",
        stack: ["ESP32-S3", "Bluetooth Audio Mod", "AI Integration", "C++"],
        link: "#",
        github: "https://github.com/Leonardo027",
        status: "PROTOTYPE"
    },
    {
        id: "DOMOTICS-V1",
        title: "ROOM AUTOMATION",
        desc: "Controle total do quarto via voz: acionamento de luzes, Ar-Condicionado, TV e Power-state do PC (Ligar/Desligar). Integrado ao módulo Jarvis.",
        stack: ["IoT", "Relés", "Infravermelho", "Wake-on-LAN"],
        link: "#",
        github: "https://github.com/Leonardo027",
        status: "ONLINE"
    },
    {
        id: "HW-MAKER",
        title: "HACKPAD & WORKBENCH",
        desc: "Engenharia de ferramentas próprias: Macro-pad customizado (Hackpad Hack Club) e Fonte de bancada feita com transformador reaproveitado.",
        stack: ["Eletrônica", "C++ / Firmware", "PCB Design", "Soldagem"],
        link: "https://github.com/Leonardo027/Hackpad_Hack_Club",
        github: "https://github.com/Leonardo027/Hackpad_Hack_Club",
        status: "BUILT"
    },
];

export default function ProjectLog() {
    return (
        <section id="logs" className="py-24 bg-void relative border-t border-white/5">

            {/* Título da Seção */}
            <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <Terminal className="text-neon" size={20} />
                        <h2 className="text-neon font-mono tracking-widest text-sm">MISSION LOGS</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold italic uppercase text-white">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">Projects</span>
                    </h3>
                </div>

                <div className="hidden md:block text-right font-mono text-xs text-gray-600">
                    <p>ENCRYPTION: NONE</p>
                    <p>ACCESS: GRANTED</p>
                </div>
            </div>

            {/* Grid de Projetos */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white/5 border border-white/10 hover:border-neon transition-colors duration-300 flex flex-col"
                    >
                        {/* Header do Card */}
                        <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-black/20">
                            <span className="font-mono text-xs text-neon">{project.id}</span>
                            <div className="flex gap-2">
                                <span className={`w-2 h-2 rounded-full ${project.status === 'ONLINE' || project.status === 'BUILT' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
                            </div>
                        </div>

                        {/* Corpo do Card */}
                        <div className="p-6 flex flex-col h-full">
                            <h4 className="text-2xl font-bold italic mb-3 group-hover:text-neon transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                                {project.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 text-[10px] uppercase font-bold border border-white/20 text-gray-300 hover:bg-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors">
                                    <Github size={16} /> CODE
                                </a>
                                {/* Se tiver link externo (tipo Youtube), o botão SECURE ativa */}
                                {project.link !== "#" && (
                                    <a href={project.link} target="_blank" className="flex items-center gap-2 text-sm font-mono text-neon hover:text-white transition-colors ml-auto">
                                        VIEW <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Decoração de Canto */}
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}