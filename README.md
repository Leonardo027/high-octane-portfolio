# ⚡ LEONARDO_OS [v1.0.0]

> "Não é apenas um portfólio. É um terminal interativo rodando na web."

![Banner](https://socialify.git.ci/Leonardo027/high-octane-portfolio/image?description=1&font=KoHo&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark)

## 🏴‍☠️ Sobre o Projeto

Este projeto transforma a experiência passiva de navegar em um portfólio numa experiência imersiva de "Hacker". Construído para o **Hack Club**, ele simula um sistema operacional completo no navegador.

Diferente de sites estáticos, este projeto implementa um **File System virtual**, **Emulação de Terminal** e **Renderização Gráfica em tempo real**.

### 🛠️ Tech Stack & Funcionalidades

O projeto vai muito além de HTML/CSS. O "motor" do sistema inclui:

- **Core:** Next.js 14 (App Router) & TypeScript.
- **File System Virtual:** Lógica recursiva para navegação de pastas (`cd`, `ls`, `cat`) simulando uma árvore de diretórios real.
- **Audio API:** Feedback sonoro (ASMR mecânico) acionado via eventos do DOM, sem latência.
- **Canvas Rendering:** Efeito "Matrix Rain" processado quadro-a-quadro (60fps) usando a API nativa de Canvas 2D.
- **Integração de API:** Comando `weather` que busca dados meteorológicos reais em tempo real.
- **Easter Eggs:** Modo `sudo` com autenticação simulada e segredos escondidos.

## 🚀 Comandos Disponíveis

Ao acessar o terminal, o usuário pode interagir com:

| Comando | Descrição |
| :--- | :--- |
| `ls` | Lista os arquivos e pastas do diretório atual. |
| `cd [pasta]` | Navega entre diretórios (suporta `..` e `~`). |
| `cat [arquivo]` | Lê o conteúdo de arquivos de texto (.txt, .md). |
| `weather` | Conecta com satélites (API) para mostrar o clima local. |
| `whoami` | Mostra o usuário atual da sessão. |
| `sudo` | Tenta elevar privilégios (Requer senha). |

## 📦 Como Rodar Localmente

```bash
# Clone o repositório
git clone [https://github.com/Leonardo027/high-octane-portfolio.git](https://github.com/Leonardo027/high-octane-portfolio.git)

# Entre na pasta
cd high-octane-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev