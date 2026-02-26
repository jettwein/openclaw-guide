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
    next: "choosing-models",
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
  "choosing-models": {
    num: "10",
    title: "Choosing Your AI Model",
    prev: "troubleshooting",
    next: "memory-system",
    content: `
## The engine under the hood

OpenClaw doesn't have its own AI brain -- it connects to external AI models. Think of it like choosing an engine for a car. The car (OpenClaw) is the same, but the engine changes how it performs.

## The big three providers

### Anthropic (Claude)

The recommended default. Claude is excellent at:
- Writing and editing (natural, human-sounding output)
- Nuanced reasoning and analysis
- Following complex instructions
- Being honest about what it doesn't know

**Models:**
- **Haiku** -- Fast and cheap. Good for quick tasks, reminders, simple lookups. ~$0.001 per message.
- **Sonnet** -- The sweet spot. Good at most things, reasonable cost. ~$0.01 per message.
- **Opus** -- The heavyweight. Best reasoning, best writing, but expensive. ~$0.05 per message.

### OpenAI (GPT)

The most well-known. GPT excels at:
- Coding and technical tasks
- Following multi-step instructions
- General knowledge questions

**Models:**
- **GPT-4o Mini** -- Fast, cheap, surprisingly capable
- **GPT-4o** -- Strong all-rounder
- **o1** -- Reasoning specialist for complex problems

### MiniMax

Budget-friendly option for high-volume use:
- **M2.5** -- Fast and very cheap. Good for simple tasks at scale.

## How to configure your model

In your config file (\`~/.openclaw/openclaw.json\`):

\`\`\`json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4-5",
        "fallbacks": ["openai/gpt-5.2"]
      }
    }
  }
}
\`\`\`

Or switch models on the fly in chat:

\`\`\`
/model sonnet
/model opus
/model gpt
\`\`\`

## Which model should you use?

Here's the cheat sheet:

- **Daily driver (most people):** Claude Sonnet -- best balance of quality and cost
- **Quick tasks, high volume:** Claude Haiku or GPT-4o Mini
- **Important writing or analysis:** Claude Opus
- **Coding projects:** GPT-4o or Claude Sonnet
- **Complex reasoning problems:** o1 or Opus
- **On a tight budget:** MiniMax M2.5

## Cost reality check

For normal personal use (20-50 messages a day), expect:
- Haiku/Mini: $1-3/month
- Sonnet/4o: $5-15/month
- Opus/o1: $20-50/month

Start with Sonnet. Upgrade to Opus for important tasks. Drop to Haiku for quick stuff. You can switch anytime.
    `,
  },
  "memory-system": {
    num: "11",
    title: "The Memory System",
    prev: "choosing-models",
    next: "skills-superpowers",
    content: `
## Your agent's brain

Most AI chatbots forget everything when you close the tab. OpenClaw is different -- it has a real memory system. Here's how it works.

## Three types of memory

### Short-term (in-session)

This is the current conversation. Everything you've said and the AI has replied within this session. When the session resets, it's gone -- like RAM in a computer.

### Daily memory (memory/YYYY-MM-DD.md)

A log file for each day. Your agent writes down what happened, what you worked on, decisions made. OpenClaw automatically loads the last 2 days of daily notes, so your agent has recent context.

### Long-term memory (MEMORY.md)

The permanent record. Curated, important stuff that should persist forever: your preferences, key decisions, ongoing projects, things about you. Think of it as the agent's "I know this person" file.

## The four key files

### SOUL.md -- Who the agent is

This defines your agent's personality, tone, and values. Example:

\`\`\`
Be direct and concise. Use sarcasm sparingly but effectively.
Don't be a sycophant -- if an idea has holes, say so.
Have opinions. Push back when something doesn't make sense.
\`\`\`

Two people with identical setups but different SOUL.md files will have completely different experiences.

### USER.md -- Who you are

Basic info about you that helps the agent personalize:

\`\`\`
Name: Josh
Timezone: America/Los_Angeles
Notes: Software engineer, loves snowboarding
Family: Wife Ashley, son Colton (15)
\`\`\`

### MEMORY.md -- What it remembers

Long-term curated memory:

\`\`\`
- Josh prefers bullet points over paragraphs
- Working on an OpenClaw guide project (Feb 2025)
- Hates sycophantic AI responses
- Uses Vercel for hosting, Stripe for payments
\`\`\`

### TOOLS.md -- Your environment

Local setup notes: device names, API keys locations, SSH hosts, camera names. Anything environment-specific.

## Best practices

- **End sessions well:** Tell your agent "Update memory with what we worked on today." This prompts it to save important context.
- **Review periodically:** Ask your agent to review and clean up MEMORY.md every few weeks.
- **Be explicit:** When something matters, say "Remember this." The agent will write it down.
- **Don't overthink it:** The memory system works automatically for the most part. Just chat naturally.

## The magic moment

After a week or two of regular use, something clicks. Your agent starts anticipating things. It remembers your preferences without being told. It references past conversations. It feels less like a tool and more like... an assistant who actually knows you.

That's the memory system doing its job.
    `,
  },
  "skills-superpowers": {
    num: "12",
    title: "Skills & Superpowers",
    prev: "memory-system",
    next: "multi-agent",
    content: `
## What are skills?

Skills are plugins that teach your agent how to use specific tools. Want your agent to check the weather? There's a skill for that. Control your smart home? Skill. Generate images? Skill.

Think of skills like apps on a phone -- they extend what your agent can do.

## Where to find skills

### ClawHub (the app store)

Browse community-created skills at [clawhub.com](https://clawhub.com).

Install a skill:

\`\`\`bash
clawhub install weather
\`\`\`

Update all your skills:

\`\`\`bash
clawhub update --all
\`\`\`

### Bundled skills

OpenClaw ships with some skills built in. These are available out of the box -- no installation needed.

### Workspace skills

You can create your own skills in your workspace's \`skills/\` directory. More on this in a moment.

## How skills work

Each skill is a folder containing a \`SKILL.md\` file. This file tells the agent:
- What the skill does
- When to use it
- How to use the underlying tool
- What API keys or binaries it needs

The agent reads these at startup and knows what's available.

## Popular skills worth installing

- **Weather** -- Current conditions and forecasts via wttr.in
- **Web search** -- Search the internet (needs a Brave API key)
- **Image generation** -- Create images via various AI models
- **Calendar** -- Check and manage Google Calendar
- **Email** -- Read and send Gmail
- **Home automation** -- Control smart home devices

## Creating your own skill

This is where it gets fun. Create a folder in \`~/.openclaw/workspace/skills/my-skill/\` with a \`SKILL.md\`:

\`\`\`markdown
---
name: my-cool-skill
description: Does something cool
---

Instructions for the agent on how to use this skill...
\`\`\`

Your agent will pick it up on the next session. You can teach your agent entirely new capabilities this way.

## Security note

Treat third-party skills like you'd treat any software you install -- read them before enabling. Skills can execute code and access your system. Stick to well-known skills from ClawHub, and review anything from unknown authors.
    `,
  },
  "multi-agent": {
    num: "13",
    title: "Multi-Agent Setup",
    prev: "skills-superpowers",
    next: "automation",
    content: `
## One AI is cool. Multiple AIs is powerful.

OpenClaw supports running multiple agents, each with their own personality, skills, and purpose. Think of it like having a team:

- **Main agent** -- Your general-purpose assistant (the boss)
- **Research agent** -- Specializes in web research and summarization
- **Code agent** -- Focused on programming tasks
- **Writing agent** -- Handles drafts, editing, content creation

## How it works

### Sub-agents

Your main agent can spawn sub-agents for specific tasks. These run in isolated sessions with their own context. When they're done, results flow back to the main agent.

Example: You ask your main agent to "research competitors and write a report." It could:
1. Spawn a research sub-agent to gather data
2. Spawn a writing sub-agent to draft the report
3. Combine the results and present them to you

This happens automatically based on how you configure things.

### Agent configuration

In \`~/.openclaw/openclaw.json\`:

\`\`\`json
{
  "agents": {
    "list": [
      {
        "id": "main",
        "workspace": "~/.openclaw/workspace"
      },
      {
        "id": "researcher",
        "workspace": "~/.openclaw/workspaces/researcher"
      },
      {
        "id": "coder",
        "workspace": "~/.openclaw/workspaces/coder",
        "model": { "primary": "openai/gpt-5.2" }
      }
    ]
  }
}
\`\`\`

Each agent gets its own workspace, which means its own SOUL.md, MEMORY.md, and skills.

## When to use multi-agent

### Do use it when:
- You have distinct task categories that benefit from specialization
- You want different models for different tasks (GPT for coding, Claude for writing)
- You need parallel processing (multiple research tasks at once)
- You want isolated contexts (work agent vs personal agent)

### Don't bother when:
- You're just getting started (master one agent first)
- Your tasks are simple and varied (one agent handles it fine)
- You're trying to optimize costs (more agents = more API calls)

## Start simple

Most people don't need multi-agent right away. Get comfortable with one agent first. When you find yourself thinking "I wish I had a separate agent for this," that's when you know it's time.

The main agent can spawn sub-agents on the fly without any config -- just tell it "spawn a sub-agent to handle this research." The formal multi-agent config is for when you want persistent, specialized agents.
    `,
  },
  automation: {
    num: "14",
    title: "Automation & Proactive AI",
    prev: "multi-agent",
    next: "security",
    content: `
## From reactive to proactive

By default, your agent waits for you to say something. But the real power is making it proactive -- checking things on its own, sending you alerts, doing background work.

## Heartbeats

A heartbeat is a periodic check-in. OpenClaw pings your agent on a schedule, and it decides what to do:

- Check your email for urgent messages
- Look at your calendar for upcoming events
- Monitor a website for changes
- Send you a daily briefing

### Setting up heartbeats

In \`~/.openclaw/openclaw.json\`:

\`\`\`json
{
  "agents": {
    "defaults": {
      "heartbeat": {
        "every": "30m"
      }
    }
  }
}
\`\`\`

Then create \`HEARTBEAT.md\` in your workspace:

\`\`\`markdown
# Heartbeat Tasks
- Check email for anything urgent
- Look at calendar for events in the next 2 hours
- If it's morning (8-9am), send a daily briefing
\`\`\`

Your agent will run through this checklist every 30 minutes and only bother you if something needs attention.

## Cron jobs

For precise scheduling, use cron jobs:

\`\`\`bash
openclaw cron add --schedule "0 9 * * 1" --task "Send me a weekly summary of what we worked on"
\`\`\`

That runs every Monday at 9am.

### Heartbeat vs Cron -- when to use each

**Heartbeats** are good for:
- Batching multiple checks together
- Flexible timing (every ~30 min is fine)
- Tasks that need conversational context

**Cron** is good for:
- Exact timing (9:00 AM sharp)
- Standalone tasks that don't need chat context
- One-shot reminders ("remind me in 20 minutes")

## Webhooks

OpenClaw can receive webhooks from external services:

\`\`\`json
{
  "automation": {
    "webhook": {
      "enabled": true
    }
  }
}
\`\`\`

This lets you trigger your agent from:
- GitHub (new PR, issue, deployment)
- Stripe (new payment)
- Zapier or Make.com (anything)
- Custom scripts

## Hooks

Hooks let your agent react to events automatically:

- **Session start** -- run setup tasks when a new conversation begins
- **Message received** -- pre-process incoming messages
- **Auth events** -- react to login attempts

## Real-world automation examples

### Morning briefing
Heartbeat at 8am: Check weather, calendar, and email. Send a summary to your phone via WhatsApp.

### PR reviewer
GitHub webhook: When a new PR is opened, your agent reads the diff and posts a review.

### Meeting prep
Cron job 15 minutes before each calendar event: Research the attendees and summarize the agenda.

### Price monitor
Heartbeat every hour: Check a product page for price drops. Alert you if it goes below your target.

The goal is to make your agent feel less like a tool you use and more like a team member who handles things before you even ask.
    `,
  },
  security: {
    num: "15",
    title: "Security & Best Practices",
    prev: "automation",
    content: `
## Your agent has access to your stuff. Let's keep it safe.

OpenClaw runs on your machine with access to your files, messages, and potentially your accounts. That's powerful -- and it means security matters.

## Account hygiene

### Use dedicated accounts

This is the single most important security tip:

- **Create a separate Gmail** for your bot. Never connect your personal Gmail.
- **Create a separate GitHub account** if your agent will be pushing code to public repos.
- **Use scoped API tokens** with minimum permissions. Don't give your agent admin access to everything.

### API key management

- Store keys in \`~/.openclaw/openclaw.json\` (not in workspace files that might get committed to git)
- Use environment variables when possible
- Rotate keys periodically
- Never paste API keys in group chats where your agent is active

## Access control

### DM policies

Control who can message your bot:

\`\`\`json
{
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["+15555550123"]
    }
  }
}
\`\`\`

**Options:**
- **pairing** (default) -- New senders get a one-time code you must approve
- **allowlist** -- Only pre-approved senders can chat
- **open** -- Anyone can message (use with caution!)
- **disabled** -- No DMs allowed

### Group chat safety

In groups, always require mentions:

\`\`\`json
{
  "channels": {
    "whatsapp": {
      "groups": { "*": { "requireMention": true } }
    }
  }
}
\`\`\`

This prevents your agent from responding to every message in a group chat.

## Sandboxing

For extra security, run your agent in a sandbox:

\`\`\`json
{
  "agents": {
    "defaults": {
      "sandbox": {
        "enabled": true
      }
    }
  }
}
\`\`\`

Sandboxing runs the agent's code execution in an isolated container, so it can't accidentally (or maliciously) modify your system.

## What your agent can and can't do

### Safe by default:
- Read files in its workspace
- Search the web
- Generate text and code

### Requires your permission:
- Sending emails or messages
- Modifying files outside its workspace
- Running system commands
- Making purchases or API calls that cost money

### Best practices:
- Review your agent's actions periodically (check \`memory/\` files)
- Start with restrictive permissions and loosen as you build trust
- Use \`openclaw logs --follow\` to watch what your agent is doing in real-time
- Run \`openclaw doctor\` regularly to check for issues

## The trust ladder

Think of your relationship with your agent like any work relationship:

1. **Week 1:** Read-only. Let it answer questions and search the web.
2. **Week 2:** Light actions. Let it draft emails (but you send them).
3. **Month 1:** More autonomy. Let it manage files, update docs, run scripts.
4. **Month 2+:** Full trust. Let it send messages, manage calendar, handle routine tasks.

Build trust through competence. If your agent makes a mistake, tighten permissions and try again later.

## One last thing

OpenClaw is open source. That means the code is public and auditable. You can (and should) check what it's doing. That transparency is a feature, not a bug.
    `,
  },
};

const order = [
  "what-is-openclaw", "before-you-start", "installation", "first-boot",
  "your-first-chat", "connect-messaging", "personalize", "what-to-build",
  "troubleshooting", "choosing-models", "memory-system", "skills-superpowers",
  "multi-agent", "automation", "security",
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
