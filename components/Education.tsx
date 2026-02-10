"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        school: "FACULDADE (EM ANDAMENTO)",
        course: "Bacharelado em Ciência da Computação",
        period: "2025 - Presente",
        desc: "Aprofundamento em arquitetura de software, algoritmos complexos e gestão de projetos tecnológicos.",
        icon: GraduationCap,
        status: "LOADING..."
    },
    {
        school: "SENAI",
        course: "Técnico em Análise e Desenvolvimento de Sistemas",
        period: "2023 - 2025",
        desc: "Formação intensiva prática. Foco em lógica de programação, banco de dados SQL, C# e infraestrutura de redes.",
        icon: Award,
        status: "COMPLETED"
    },
    {
        school: "SESI",
        course: "Ensino Fundamental e Médio",
        period: "2013 - 2025",
        desc: "Base acadêmica sólida com foco em robótica educacional e resolução de problemas lógicos.",
        icon: BookOpen,
        status: "COMPLETED"
    },
];

export default function Education() {
    return (
        <section className="py-24 bg-void relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Título */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] w-12 bg-neon" />
                    <h2 className="text-neon font-mono tracking-widest text-sm">KERNEL VERSION / EDUCATION</h2>
                </div>

                {/* Timeline Visual */}
                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Marcador da Timeline */}
                            <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border border-void ${item.status === 'LOADING...' ? 'bg-neon animate-pulse' : 'bg-gray-600'}`} />

                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 bg-white/5 border border-white/10 hover:border-neon/50 transition-colors group">

                                {/* Ícone */}
                                <div className="p-4 bg-black/40 rounded border border-white/5 text-neon group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-wrap justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">
                                            {item.school}
                                        </h3>
                                        <span className="font-mono text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                            {item.period}
                                        </span>
                                    </div>

                                    <h4 className="text-lg text-gray-300 font-mono mb-2">{item.course}</h4>
                                    <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Status Badge */}
                                <div className="mt-4 md:mt-0 md:ml-auto">
                                    <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${item.status === 'LOADING...' ? 'border-neon text-neon bg-neon/10' : 'border-gray-600 text-gray-500'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}