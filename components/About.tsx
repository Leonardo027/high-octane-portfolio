"use client";
import { Zap } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-black relative overflow-hidden border-y border-white/10">

            {/* Background sutil */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />

            <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-neon/10 text-neon mb-8">
                    <Zap size={24} />
                </div>

                <h2 className="text-3xl md:text-5xl font-black italic uppercase mb-8 text-white leading-tight">
                    "Hardware is the body. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-400">Code is the soul.</span>"
                </h2>

                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-mono">
                    Meu objetivo não é apenas escrever linhas de código, mas criar sistemas que interagem com o mundo real.
                    Da automação de um quarto via ESP32 à arquitetura de um software complexo,
                    busco a união perfeita entre a lógica digital e a engenharia física.
                </p>
            </div>
        </section>
    );
}