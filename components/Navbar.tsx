"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Zap, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  // Estado para o relógio "System Time"
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Atualiza o relógio a cada segundo
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].split(".")[0] + " UTC");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "SPECS", path: "#specs", icon: Cpu },      // Sobre/Skills
    { name: "LOGS", path: "#projects", icon: Terminal }, // Projetos
    { name: "CONTACT", path: "#contact", icon: Zap },   // Contato
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO / ID */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-6 bg-neon skew-x-[-12deg]" />
          <Link href="/" className="text-xl font-bold tracking-tighter italic text-white hover:text-neon transition-colors">
            PORTFOLIO <span className="text-xs not-italic text-gray-500 font-mono">v1.0</span>
          </Link>
        </div>

        {/* LINKS CENTRAIS (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-white transition-all group"
            >
              <item.icon size={14} className="group-hover:text-neon transition-colors" />
              <span className="tracking-widest group-hover:underline decoration-neon decoration-2 underline-offset-4">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* STATUS / TIME */}
        <div className="hidden md:flex flex-col items-end">
          <span className="text-[10px] text-neon font-bold tracking-widest uppercase animate-pulse">
            ● System Active
          </span>
          <span className="text-xs font-mono text-gray-500">
            {time || "INITIALIZING..."}
          </span>
        </div>

        {/* Ícone Menu Mobile */}
        <div className="md:hidden text-white">
            <Terminal size={24} />
        </div>
      </div>
    </motion.header>
  );
}