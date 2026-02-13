"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server, Cpu } from "lucide-react";

const specs = [
    {
        category: "INTERFACE / FRONT-END",
        icon: Layout,
        items: [
            "React.js / Next.js", 
            "Tailwind CSS", 
            "HTML5 & CSS3 Semântico", 
            "JavaScript (ES6+)",
            "Aplicações Mobile", // Novo: Grade 4º Sem
            "Interfaces Industriais (IHM)" // Novo: Grade 3º Sem
        ],
        status: "OPTIMIZED",
    },
    {
        category: "SYSTEM LOGIC / BACK-END",
        icon: Server,
        items: [
            "C# / .NET (Core)", 
            "Node.js", 
            "Python (AI Integration)", 
            "Lógica de Programação",
            "Engenharia de Software", // Novo: Grade 2º Sem
            "Inteligência Artificial & Big Data" // Novo: Grade 2º Sem
        ],
        status: "STABLE",
    },
    {
        category: "DATABASE / INFRA",
        icon: Database,
        items: [
            "SQL Server / MySQL", 
            "Git & Version Control", 
            "Linux Environment", 
            "API RESTful",
            "Computação em Nuvem", // Novo: Grade 3º Sem
            "Cibersegurança & Pentest", // Novo: Grade 4º Sem
            "Gestão de Projetos" // Novo: Grade 4º Sem
        ],
        status: "RUNNING",
    },
    {
        category: "HARDWARE / IOT LAB",
        icon: Cpu,
        items: [
            "ESP32 / Arduino (C++)", 
            "Automação Residencial", 
            "Eletrônica & Soldagem", 
            "Protocolos (MQTT/Serial)",
            "Integração com IIoT", // Novo: Grade 3º Sem
            "Automação Industrial", // Novo: Grade 1º Sem
            "Realidade Aumentada (Unity)" // Novo: Grade Técnica
        ],
        status: "ACTIVE",
    },
];

export default function TechSpecs() {
    return (
        <section id="specs" className="py-24 relative bg-void">
            {/* Título da Seção */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-neon" />
                    <h2 className="text-neon font-mono tracking-widest text-sm">SYSTEM SPECIFICATIONS</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold italic uppercase text-white">
                    Technical <span className="text-gray-600">Arsenal</span>
                </h3>
            </div>

            {/* Grid de Cards */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-8 border border-white/10 bg-white/5 hover:border-neon/50 transition-colors overflow-hidden"
                    >
                        {/* Efeito de Hover (Scanline) */}
                        <div className="absolute inset-0 bg-neon/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-black/50 border border-white/10 rounded">
                                    <spec.icon className="text-neon" size={24} />
                                </div>
                                <span className="text-[10px] font-mono border border-neon/30 text-neon px-2 py-1 rounded bg-neon/10">
                                    {spec.status}
                                </span>
                            </div>

                            <h4 className="text-xl font-bold mb-4 font-mono text-white">{spec.category}</h4>

                            <ul className="space-y-2">
                                {spec.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                                        <span className="w-1.5 h-1.5 bg-neon/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}