"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Zap, Radio } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Atualiza o relógio a cada segundo usando o horário LOCAL do PC
    const interval = setInterval(() => {
      const now = new Date();
      // pt-BR garante formato 24h (00:48:00)
      setTime(now.toLocaleTimeString("pt-BR"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: "SPECS", path: "#specs", icon: Cpu },
    { name: "LOGS", path: "#logs", icon: Terminal },
    { name: "CONTACT", path: "#contact", icon: Zap },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b0b0b]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Terminal className="text-neon" size={20} />
          <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter italic text-white hover:text-neon transition-colors flex items-end gap-1">
            LC_TERMINAL <span className="text-[10px] not-italic text-gray-500 font-mono mb-0.5">v1.0</span>
          </Link>
        </div>

        {/* MENU DESKTOP */}
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

        {/* RELÓGIO CORRIGIDO */}
        <div className="hidden md:flex flex-col items-end font-mono">
          <div className="flex items-center gap-2 text-[10px] text-neon font-bold tracking-widest uppercase">
            <Radio size={10} className="animate-pulse" />
            <span>LC_CORE // ONLINE</span>
          </div>
          <span className="text-xs text-gray-500">
            {time || "LOADING..."}
          </span>
        </div>

        {/* Ícone Mobile */}
        <div className="md:hidden text-white">
          <Terminal size={24} className="text-neon" />
        </div>
      </div>
    </motion.header>
  );
}