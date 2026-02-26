import { notFound } from "next/navigation";
import Link from "next/link";

const chapters = {
  "what-is-openclaw": {
    num: "01",
    title: "WTF is OpenClaw?",
    next: "before-you-start",
    content: `
## The one-sentence version

OpenClaw is software that runs on your computer and lets you chat with an AI assistant through WhatsApp, Telegram, Discord, Slack — or just a web browser.

## Okay, but why should I care?

You've probably used ChatGPT. Maybe Claude or Gemini. They're great, but they live in a browser tab. You go to them, type something, get an answer, close the tab.

OpenClaw flips that. Instead of going to the AI, the AI comes to you — in whatever app you already have open. Send it a WhatsApp message from your phone. DM it on Discord. Text it from Slack while you're pretending to work.

## What makes it different from just using ChatGPT?

A few things:

- **It runs on YOUR machine.** Your data stays with you. No corporate server storing your conversations.
- **It lives in YOUR messaging apps.** Not another tab, not another app to check.
- **It has memory.** It can remember who you are, what you're working on, your preferences. Across sessions.
- **It can do things.** Read files, search the web, run code, check your calendar — not just chat.
- **It's open source.** Free. Community-driven. No subscription.

## Who is this for?

Honestly? Right now, it's for people who are at least a *little* comfortable with a terminal. You don't need to be a developer, but you need to be okay with copying and pasting a few commands.

If "open Terminal" makes you break into a cold sweat, this guide will hold your hand through it. But fair warning — there will be a terminal involved.

## What do I need?

- A computer (Mac, Windows, or Linux)
- An internet connection
- About 30 minutes
- A willingness to copy-paste commands you might not fully understand (we'll explain them, though)

That's it. No credit card, no account creation, no "enterprise plan." Just you and your machine.
    `,
  },
  "before-you-start": {
    num: "02",
    title: "Before You Start",
    prev: "what-is-openclaw",
    next: "installation",
    content: `
## The checklist

Before we install anything, let's make sure you've got what you need:

### ✅ Node.js (version 22 or newer)

Node.js is what runs OpenClaw. Think of it as the engine under the hood.

**Check if you have it:**
\`\`\`bash
node --version
\`\`\`

If you see \`v22.x.x\` or higher, you're good. If you see nothing or a lower version, you'll need to install or update it.

**Install Node.js:**
- Go to [nodejs.org](https://nodejs.org)
- Download the LTS version (should be 22+)
- Run the installer
- Open a new terminal and check again

### ✅ A terminal

- **Mac:** Open Spotlight (Cmd+Space), type "Terminal", hit Enter
- **Windows:** Open PowerShell (search for it in the Start menu)
- **Linux:** You already know where your terminal is

### ✅ An AI provider API key

OpenClaw needs to talk to an AI model. The recommended provider is **Anthropic** (the company behind Claude).

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account
3. Go to API Keys
4. Create a new key
5. Copy it somewhere safe — you'll need it during setup

**This is the only thing that costs money.** Anthropic charges per message (usually fractions of a cent). For normal use, expect $5-15/month.

### ✅ (Optional) A messaging app

If you want to chat with your AI from your phone, you'll need one of:
- WhatsApp
- Telegram
- Discord
- Slack

But this is optional — you can start with just the web browser interface.

## What you DON'T need

- ❌ A powerful computer (a laptop is fine)
- ❌ Linux knowledge
- ❌ A computer science degree
- ❌ Docker, Kubernetes, or any DevOps tools
- ❌ Money (OpenClaw itself is free)
    `,
  },
  installation: {
    num: "03",
    title: "Install OpenClaw",
    prev: "before-you-start",
    next: "first-boot",
    content: `
## The install

This is the moment of truth. Open your terminal and run one command.

### Mac / Linux

\`\`\`bash
curl -fsSL https://openclaw.ai/install.sh | bash
\`\`\`

**What this does:** Downloads the OpenClaw installer and runs it. It will:
- Install the \`openclaw\` command-line tool
- Set up the necessary directories
- Tell you if anything's missing

### Windows (PowerShell)

\`\`\`powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
\`\`\`

**Same thing, Windows flavor.** Run this in PowerShell (not Command Prompt).

### Alternative: npm install

If you're more comfortable with npm (or the install script doesn't work):

\`\`\`bash
npm install -g openclaw@latest
\`\`\`

### Verify it worked

\`\`\`bash
openclaw --version
\`\`\`

You should see a version number. If you see "command not found," something went wrong — jump to the [troubleshooting chapter](/guide/troubleshooting).

## That's it

No, really. One command. The install is the easy part. The fun starts next.
    `,
  },
  "first-boot": {
    num: "04",
    title: "First Boot & The Wizard",
    prev: "installation",
    next: "your-first-chat",
    content: `
## Run the wizard

OpenClaw has an onboarding wizard that walks you through the initial setup. Run this:

\`\`\`bash
openclaw onboard --install-daemon
\`\`\`

**What's happening here:**
- \`openclaw onboard\` launches the setup wizard
- \`--install-daemon\` tells it to also install OpenClaw as a background service (so it runs automatically)

### The wizard will ask you:

**1. Auth setup**
It'll set up a password or token so random people can't use your AI. Pick something you'll remember.

**2. AI provider**
This is where you paste your Anthropic API key from earlier. The wizard will test the connection to make sure it works.

**3. Channel setup (optional)**
It'll ask if you want to connect WhatsApp, Telegram, etc. You can skip this for now — we'll cover it in Chapter 6.

**4. Daemon install**
It'll install the Gateway as a service so it starts automatically when your computer boots.

## Check that it's running

\`\`\`bash
openclaw gateway status
\`\`\`

You should see something like "Gateway is running" with a port number (usually 18789).

If it says it's not running:

\`\`\`bash
openclaw gateway start
\`\`\`

## What just happened?

You now have an AI Gateway running on your machine. It's:
- Listening for connections
- Ready to chat
- Running in the background
- Will survive reboots

That's the hard part done. Time to actually talk to it.
    `,
  },
  "your-first-chat": {
    num: "05",
    title: "Your First Chat",
    prev: "first-boot",
    next: "connect-messaging",
    content: `
## Open the dashboard

\`\`\`bash
openclaw dashboard
\`\`\`

This opens your browser to the Control UI — usually at \`http://127.0.0.1:18789/\`.

If it doesn't open automatically, just paste that URL into your browser.

## Say hello

You'll see a chat interface. Type something. Anything.

> "Hey, who are you?"

And just like that, you're talking to your AI assistant. It runs on your machine, it's private, and it's yours.

## What can you ask it?

Pretty much anything you'd ask ChatGPT, plus:

- **"Read this file"** — point it at files on your computer
- **"Search the web for..."** — it can browse the internet
- **"What's on my calendar?"** — if you connect integrations later
- **"Remember that I prefer..."** — it has memory across sessions

Try a few things. Get comfortable. This is your sandbox.

## The web UI is just the beginning

The Control UI is great for testing and quick chats. But the real magic is when you connect it to your messaging apps — which is next.
    `,
  },
  "connect-messaging": {
    num: "06",
    title: "Connect Messaging",
    prev: "your-first-chat",
    next: "personalize",
    content: `
## Pick your channel

You can connect multiple, but start with one. Here's the quick setup for each:

---

### WhatsApp

The most popular option. Uses your existing WhatsApp account.

\`\`\`bash
openclaw channels login whatsapp
\`\`\`

A QR code will appear in your terminal. Scan it with WhatsApp on your phone (Settings → Linked Devices → Link a Device).

That's it. Send a message to yourself (or have someone message you) and the AI will respond.

**Heads up:** This links your personal WhatsApp, not a separate business account. The AI responds as "you." Configure \`allowFrom\` in your settings to control who it talks to.

---

### Telegram

Uses a bot account (separate from your personal Telegram).

1. Open Telegram and chat with **@BotFather**
2. Send \`/newbot\` and follow the prompts
3. Copy the bot token
4. Add it to your config at \`~/.openclaw/openclaw.json\`:

\`\`\`json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "YOUR_TOKEN_HERE"
    }
  }
}
\`\`\`

5. Restart the gateway: \`openclaw gateway restart\`
6. Message your bot on Telegram

---

### Discord

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a New Application
3. Go to Bot → create a bot → copy the token
4. Add it to your config and restart

---

### Slack

Uses a Slack app in your workspace. The onboarding wizard can help set this up, or configure manually in your config.

---

## Multiple channels

Want WhatsApp AND Telegram? Just configure both. The Gateway handles routing automatically. Same AI, multiple front doors.
    `,
  },
  personalize: {
    num: "07",
    title: "Make It Yours",
    prev: "connect-messaging",
    next: "what-to-build",
    content: `
## Give it a personality

Out of the box, your AI is... generic. It works, but it doesn't know who you are or how you want it to behave. Let's fix that.

### The Soul File

OpenClaw agents have a file called \`SOUL.md\` in their workspace (usually \`~/.openclaw/workspace/SOUL.md\`). This is where you define their personality.

Open it and make it yours:

\`\`\`bash
open ~/.openclaw/workspace/SOUL.md
\`\`\`

Or just tell your AI in the chat: *"Let's update your soul file. I want you to be more casual, use sarcasm, and don't be a sycophant."*

It can edit its own files. Meta? Yes. Useful? Extremely.

### The Identity File

\`IDENTITY.md\` is where your agent gets a name, emoji, and vibe. You can edit this directly or — more fun — just have a conversation about it. That's literally what the bootstrap process is designed for.

### Memory

Your agent has two types of memory:

- **Daily notes** (\`memory/YYYY-MM-DD.md\`) — raw logs of what happened
- **Long-term memory** (\`MEMORY.md\`) — curated, important stuff

The more you chat with it, the more it learns about you. Over time it'll remember your preferences, your projects, your style.

## Make it useful

The real power move is telling your agent what you care about:

- *"I'm a software engineer working on a React app"*
- *"I have meetings every Tuesday at 10am"*
- *"I hate long emails — keep things brief"*
- *"My wife's name is Ashley, my son is Colton, he's 15"*

The more context it has, the better it serves you.
    `,
  },
  "what-to-build": {
    num: "08",
    title: "Now What?",
    prev: "personalize",
    next: "troubleshooting",
    content: `
## You've got a personal AI. Now use it.

Here are some ideas to get you started, from simple to ambitious:

### 🔔 Daily Briefing
Ask your agent to check the weather, your calendar, and news every morning and send you a summary. Set up a heartbeat in \`HEARTBEAT.md\` and it'll do this automatically.

### 📝 Meeting Notes
Drop a meeting recording or transcript into a chat and ask for a summary, action items, and follow-ups.

### 🔍 Research Assistant
"Research the top 5 competitors to [product] and give me a comparison table." It can search the web, read pages, and synthesize.

### 💻 Code Helper
Working on a project? Give it access to your repo and ask it to review PRs, explain code, write tests, or scaffold new features.

### 📧 Email Draft Writer
"Draft a reply to this email that declines politely but firmly." Paste the email, get a draft, edit, send.

### 🏠 Home Automation
If you pair a phone or tablet as a "node," your AI can check cameras, control devices, and respond to triggers.

### 🤖 Multi-Agent Setup
Advanced: run multiple agents with different specialties. A coding agent, a research agent, a writing agent — each in their own session.

## The meta move

Use your AI to help you figure out what to use your AI for. Seriously. Describe your day, your pain points, your workflow — and ask it where it can help. It's surprisingly good at this.
    `,
  },
  troubleshooting: {
    num: "09",
    title: "When Things Break",
    prev: "what-to-build",
    content: `
## It's not working. Don't panic.

Here are the most common issues and how to fix them:

### "command not found: openclaw"

The install didn't add OpenClaw to your PATH. Try:
- Close and reopen your terminal
- Run \`npm install -g openclaw@latest\` again
- On Mac, check if you need to source your shell profile: \`source ~/.zshrc\`

### Gateway won't start

\`\`\`bash
openclaw gateway status
openclaw gateway start
\`\`\`

If it still won't start, run it in the foreground to see errors:

\`\`\`bash
openclaw gateway --port 18789
\`\`\`

The error messages are usually pretty clear.

### "API key invalid" or model errors

- Double-check your Anthropic API key in \`~/.openclaw/openclaw.json\`
- Make sure you have credits in your Anthropic account
- Try: \`openclaw doctor\` — it runs diagnostics

### WhatsApp QR code won't scan

- Make sure you're scanning with WhatsApp → Settings → Linked Devices → Link a Device
- The QR code expires quickly — if it times out, run the login command again
- Only one linked session per QR code

### Messages not getting through

\`\`\`bash
openclaw logs --follow
\`\`\`

Watch the logs while sending a message. You'll see exactly where it's failing.

### Telegram bot not responding

- Verify the bot token is correct
- Make sure the gateway restarted after you added the token
- Check that you're messaging the right bot
- Privacy mode might be blocking group messages — see BotFather settings

### "It was working and now it's not"

\`\`\`bash
openclaw gateway restart
\`\`\`

Restart solves 80% of "it stopped working" problems. The other 20% is usually an expired token or a Node.js update.

### Nuclear option

\`\`\`bash
openclaw doctor --fix
\`\`\`

This runs diagnostics and tries to auto-fix common issues.

## Still stuck?

- **Discord community:** The OpenClaw Discord is active and helpful
- **GitHub issues:** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
- **Docs:** [docs.openclaw.ai](https://docs.openclaw.ai)

You're not alone. Everyone hit at least one snag setting this up. That's literally why this guide exists.
    `,
  },
};

const order = [
  "what-is-openclaw", "before-you-start", "installation", "first-boot",
  "your-first-chat", "connect-messaging", "personalize", "what-to-build", "troubleshooting",
];

export function generateStaticParams() {
  return order.map((slug) => ({ slug }));
}

export default async function ChapterPage({ params }) {
  const { slug } = await params;
  const chapter = chapters[slug];
  if (!chapter) notFound();

  // Very simple markdown-ish renderer: split by lines, handle headers, code blocks, lists
  const lines = chapter.content.trim().split("\n");
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={key++} className="my-4 overflow-x-auto rounded bg-gray-900 border border-gray-800 p-4 text-sm text-gray-300">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="mt-10 mb-3 text-lg font-bold text-white">{line.slice(4)}</h3>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="mt-12 mb-4 text-2xl font-bold text-white">{line.slice(3)}</h2>);
      i++; continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="my-8 border-gray-800" />);
      i++; continue;
    }

    // List items
    if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-2 text-gray-400">
          {listItems.map((item, j) => (
            <li key={j} className="flex gap-2">
              <span className="text-gray-600 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="my-4 border-l-2 border-indigo-500 pl-4 text-gray-300 italic">
          {line.slice(2)}
        </blockquote>
      );
      i++; continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++; continue;
    }

    // Paragraph
    elements.push(<p key={key++} className="my-4 text-gray-400 leading-relaxed">{line}</p>);
    i++;
  }

  return (
    <article>
      <p className="text-sm text-indigo-400 font-semibold tracking-widest uppercase">
        Chapter {chapter.num}
      </p>
      <h1 className="mt-4 text-3xl font-bold">{chapter.title}</h1>

      <div className="mt-8">{elements}</div>

      <div className="mt-16 flex justify-between border-t border-gray-800 pt-8">
        {chapter.prev ? (
          <Link href={`/guide/${chapter.prev}`} className="text-sm text-gray-500 hover:text-gray-300 transition">
            ← Previous
          </Link>
        ) : <span />}
        {chapter.next ? (
          <Link href={`/guide/${chapter.next}`} className="text-sm text-indigo-400 hover:text-indigo-300 transition">
            Next →
          </Link>
        ) : (
          <Link href="/" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
            Back to home
          </Link>
        )}
      </div>
    </article>
  );
}
