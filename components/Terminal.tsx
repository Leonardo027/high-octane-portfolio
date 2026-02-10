"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Maximize2, Minimize2, X } from "lucide-react";

// --- 1. DEFINIÇÃO DO SISTEMA DE ARQUIVOS (MOCK HD) ---
const FILE_SYSTEM: any = {
    root: {
        home: {
            visitor: {
                "welcome.txt": "Bem-vindo ao LC_TERMINAL v1.0. Use 'help' para ver os comandos.",
                "about.md": "Sou Leonardo Cantelle. Desenvolvedor Full-Stack e entusiasta de Hardware.",
                projects: {
                    "jarvis_log.txt": "LOG #001: Reconhecimento de voz ativado. Integração com ESP32 pendente.",
                    "portfolio_v1.backup": "Backup do código antigo em HTML puro.",
                },
                skills: {
                    "backend.txt": "C# (.NET), Node.js, Python, SQL Server.",
                    "frontend.txt": "React, Next.js, Tailwind CSS.",
                    "hardware.txt": "Arduino (C++), ESP32, MQTT, Soldagem Eletrônica.",
                },
                secrets: {
                    "password_hint.txt": "A senha do sudo é o nome da melhor escola técnica...",
                },
            },
        },
        etc: {
            "config.json": "{ theme: 'neon', version: '1.0.2', status: 'stable' }",
            "hosts": "127.0.0.1 localhost",
        },
        bin: {
            "sudo": "Binary file",
            "npm": "Binary file",
        }
    },
};

type CommandType = "input" | "output" | "error" | "success";

interface HistoryItem {
    type: CommandType;
    content: React.ReactNode;
    path?: string;
}

export default function Terminal() {
    // --- 2. ESTADOS DO SISTEMA ---
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<HistoryItem[]>([
        { type: "output", content: "LC_KERNEL INITIALIZED..." },
        { type: "output", content: "Mounting file system... OK" },
        { type: "success", content: "Welcome to LC_TERMINAL. Type 'help' to start." },
    ]);

    // O usuário começa em: /root/home/visitor
    const [currentPath, setCurrentPath] = useState<string[]>(["root", "home", "visitor"]);
    const [isSudoMode, setIsSudoMode] = useState(false); // Se true, o próximo input é a senha

    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // --- 3. EFEITOS (SCROLL E FOCUS) ---
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleFocus = () => inputRef.current?.focus();

    // --- 4. FUNÇÕES DO SISTEMA DE ARQUIVOS ---

    // Retorna o objeto da pasta atual baseada no array currentPath
    const getCurrentDir = () => {
        let current = FILE_SYSTEM;
        for (const folder of currentPath) {
            if (current && current[folder]) {
                current = current[folder];
            } else {
                return null;
            }
        }
        return current;
    };

    // Formata o caminho para exibição (ex: ~/projects)
    const getDisplayPath = () => {
        const fullPath = "/" + currentPath.join("/");
        return fullPath.replace("/root/home/visitor", "~");
    };

    // --- FUNÇÃO DE SOM ---
    const playTypingSound = () => {
        // Som curto de "pop" (leve e rápido)
        const audio = new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3");
        audio.volume = 0.15; // Volume baixinho para não irritar
        audio.play().catch(() => { }); // Ignora erro se o navegador bloquear
    };

    // --- 5. NÚCLEO DE PROCESSAMENTO DE COMANDOS ---
    const handleCommand = async (cmd: string) => {
        if (!cmd.trim()) return;

        // Adiciona o comando digitado ao histórico
        const newHistory = [...history, { type: "input" as CommandType, content: cmd, path: getDisplayPath() }];

        // -- LÓGICA DO SUDO (MODO SENHA) --
        if (isSudoMode) {
            if (cmd === "senai" || cmd === "SENAI" || cmd === "admin") {
                newHistory.push({ type: "success", content: "ACCESS GRANTED. Root privileges active (simulated)." });
                newHistory.push({ type: "output", content: "Secret Project Unlocked: https://github.com/seu-usuario/projeto-secreto" });
            } else {
                newHistory.push({ type: "error", content: "Authentication failed. Incident reported." });
            }
            setHistory(newHistory);
            setIsSudoMode(false);
            return;
        }

        const args = cmd.trim().split(" ");
        const command = args[0].toLowerCase();
        const target = args[1];

        // -- SWITCH DE COMANDOS --
        switch (command) {
            case "help":
                newHistory.push({
                    type: "output",
                    content: (
                        <div className="grid grid-cols-1 gap-1 text-sm">
                            <span className="text-gray-400">Available commands:</span>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="text-neon">ls</span> <span>List directory content</span>
                                <span className="text-neon">cd [dir]</span> <span>Change directory</span>
                                <span className="text-neon">cat [file]</span> <span>Read file content</span>
                                <span className="text-neon">clear</span> <span>Clear terminal screen</span>
                                <span className="text-neon">weather</span> <span>Check real-time weather</span>
                                <span className="text-neon">sudo</span> <span>Execute as root</span>
                                <span className="text-neon">whoami</span> <span>Display current user</span>
                            </div>
                        </div>
                    ),
                });
                break;

            case "clear":
                setHistory([]);
                return; // Retorna cedo para não adicionar o comando clear ao histórico vazio

            case "ls":
                const dirContent = getCurrentDir();
                if (dirContent && typeof dirContent === "object") {
                    const items = Object.keys(dirContent).map((key) => {
                        const isDir = typeof dirContent[key] === "object";
                        return (
                            <span key={key} className={`mr-4 ${isDir ? "text-blue-400 font-bold" : "text-white"}`}>
                                {key}{isDir ? "/" : ""}
                            </span>
                        );
                    });
                    newHistory.push({ type: "output", content: <div className="flex flex-wrap">{items}</div> });
                } else {
                    newHistory.push({ type: "error", content: "Error: Cannot list content of a file." });
                }
                break;

            case "cd":
                if (!target) {
                    setCurrentPath(["root", "home", "visitor"]); // Volta para home
                } else if (target === "..") {
                    if (currentPath.length > 1) {
                        setCurrentPath((prev) => prev.slice(0, -1));
                    }
                } else if (target === "~") {
                    setCurrentPath(["root", "home", "visitor"]);
                } else {
                    const currentDir = getCurrentDir();
                    if (currentDir && currentDir[target] && typeof currentDir[target] === "object") {
                        setCurrentPath((prev) => [...prev, target]);
                    } else {
                        newHistory.push({ type: "error", content: `cd: ${target}: No such directory` });
                    }
                }
                break;

            case "cat":
                if (!target) {
                    newHistory.push({ type: "error", content: "Usage: cat <filename>" });
                } else {
                    const currentDir = getCurrentDir();
                    if (currentDir && currentDir[target]) {
                        if (typeof currentDir[target] === "string") {
                            newHistory.push({ type: "output", content: currentDir[target] });
                        } else {
                            newHistory.push({ type: "error", content: `cat: ${target}: Is a directory` });
                        }
                    } else {
                        newHistory.push({ type: "error", content: `cat: ${target}: No such file` });
                    }
                }
                break;

            case "whoami":
                newHistory.push({ type: "output", content: "visitor" });
                break;

            case "sudo":
                newHistory.push({ type: "output", content: "Enter password for root:" });
                setIsSudoMode(true);
                setHistory(newHistory);
                return; // Retorna para não resetar o input imediatamente da forma padrão

            case "weather":
                newHistory.push({ type: "output", content: "Contacting meteorological satellites..." });
                setHistory(newHistory); // Atualiza para mostrar msg de carregamento

                try {
                    const res = await fetch("https://wttr.in/Assis?format=%C+%t+%w");
                    const data = await res.text();
                    setHistory(prev => [...prev, {
                        type: "success",
                        content: `LOCATION: ASSIS, SP [BRAZIL]\nSTATUS: ${data}`
                    }]);
                } catch (error) {
                    setHistory(prev => [...prev, { type: "error", content: "Connection failed: Satellite offline." }]);
                }
                return;

            default:
                newHistory.push({
                    type: "error",
                    content: `Command not found: ${command}. Type 'help' for assistance.`,
                });
        }

        setHistory(newHistory);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(input);
        setInput("");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-20 font-mono text-sm md:text-base"
        >
            {/* Janela do Terminal */}
            <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-[#0c0c0c]">

                {/* Barra de Título */}
                <div className="bg-[#1f1f1f] px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <TerminalIcon size={14} />
                        <span>visitor@lc-terminal:{getDisplayPath()}</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                </div>

                {/* Área de Conteúdo */}
                <div
                    className="h-[400px] overflow-y-auto p-4 text-gray-300 font-mono"
                    onClick={handleFocus}
                    ref={scrollRef}
                >
                    {history.map((item, index) => (
                        <div key={index} className="mb-1 break-words leading-relaxed">
                            {item.type === "input" && (
                                <div className="flex gap-2 text-gray-400">
                                    <span className="text-neon">➜</span>
                                    <span className="text-blue-400">{item.path}</span>
                                    <span>{item.content}</span>
                                </div>
                            )}
                            {item.type === "output" && <div className="text-gray-300 ml-4 whitespace-pre-wrap">{item.content}</div>}
                            {item.type === "error" && <div className="text-red-400 ml-4">{item.content}</div>}
                            {item.type === "success" && <div className="text-green-400 ml-4">{item.content}</div>}
                        </div>
                    ))}

                    {/* Linha de Input Atual */}
                    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
                        {!isSudoMode ? (
                            <>
                                <span className="text-neon font-bold">➜</span>
                                <span className="text-blue-400 font-bold">{getDisplayPath()}</span>
                            </>
                        ) : (
                            <span className="text-white font-bold">Password: 🔑</span>
                        )}

                        <input
                            ref={inputRef}
                            type={isSudoMode ? "password" : "text"}
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                playTypingSound();
                            }}
                            className="flex-1 bg-transparent border-none outline-none text-white font-mono ml-1"
                            autoComplete="off"
                        />
                    </form>
                </div>
            </div>
        </motion.div>
    );
}