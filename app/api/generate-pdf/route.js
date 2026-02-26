import { jsPDF } from "jspdf";

const GUIDE_CONTENT = [
  {
    title: "Chapter 01: WTF is OpenClaw?",
    sections: [
      ["The one-sentence version", "OpenClaw is software that runs on your computer and lets you chat with an AI assistant through WhatsApp, Telegram, Discord, Slack -- or just a web browser."],
      ["Why should you care?", "You've probably used ChatGPT. Maybe Claude or Gemini. They're great, but they live in a browser tab. You go to them, type something, get an answer, close the tab.\n\nOpenClaw flips that. Instead of going to the AI, the AI comes to you -- in whatever app you already have open. Send it a WhatsApp message from your phone. DM it on Discord. Text it from Slack while you're pretending to work."],
      ["What makes it different from ChatGPT?", "* It runs on YOUR machine. Your data stays with you.\n* It lives in YOUR messaging apps. Not another tab.\n* It has memory. It remembers who you are across sessions.\n* It can do things. Read files, search the web, run code.\n* It's open source. Free. Community-driven."],
      ["Who is this for?", "People who are at least a little comfortable with a terminal. You don't need to be a developer, but you need to be okay with copying and pasting a few commands.\n\nIf \"open Terminal\" makes you break into a cold sweat, this guide will hold your hand through it."],
      ["What do you need?", "* A computer (Mac, Windows, or Linux)\n* An internet connection\n* About 30 minutes\n* A willingness to copy-paste commands\n\nNo credit card, no account creation, no enterprise plan."],
    ],
  },
  {
    title: "Chapter 02: Before You Start",
    sections: [
      ["Node.js (version 22 or newer)", "Node.js is what runs OpenClaw. Think of it as the engine under the hood.\n\nCheck if you have it:\n  node --version\n\nIf you see v22.x.x or higher, you're good. If not, go to nodejs.org and download the LTS version."],
      ["A terminal", "* Mac: Open Spotlight (Cmd+Space), type \"Terminal\", hit Enter\n* Windows: Open PowerShell (search in Start menu)\n* Linux: You already know where your terminal is"],
      ["An AI provider API key", "OpenClaw needs to talk to an AI model. The recommended provider is Anthropic (Claude).\n\n1. Go to console.anthropic.com\n2. Create an account\n3. Go to API Keys -> Create a new key\n4. Copy it somewhere safe\n\nThis is the only thing that costs money. For normal use, expect $5-15/month."],
      ["What you DON'T need", "* A powerful computer (a laptop is fine)\n* Linux knowledge\n* A computer science degree\n* Docker, Kubernetes, or any DevOps tools\n* Money (OpenClaw itself is free)"],
    ],
  },
  {
    title: "Chapter 03: Install OpenClaw",
    sections: [
      ["Mac / Linux", "Open your terminal and run:\n\n  curl -fsSL https://openclaw.ai/install.sh | bash\n\nThis downloads the installer and runs it. It will install the openclaw command-line tool and set up the necessary directories."],
      ["Windows (PowerShell)", "Run this in PowerShell (not Command Prompt):\n\n  iwr -useb https://openclaw.ai/install.ps1 | iex"],
      ["Alternative: npm", "If you prefer npm:\n\n  npm install -g openclaw@latest"],
      ["Verify it worked", "Run:\n  openclaw --version\n\nYou should see a version number. If you see \"command not found,\" check the troubleshooting chapter."],
    ],
  },
  {
    title: "Chapter 04: First Boot & The Wizard",
    sections: [
      ["Run the wizard", "  openclaw onboard --install-daemon\n\n'openclaw onboard' launches the setup wizard.\n'--install-daemon' installs it as a background service."],
      ["The wizard will ask you", "1. Auth setup -- Sets up a password/token for security\n2. AI provider -- Paste your Anthropic API key here\n3. Channel setup (optional) -- Connect WhatsApp, Telegram, etc.\n4. Daemon install -- Installs the Gateway as a service"],
      ["Check that it's running", "  openclaw gateway status\n\nIf it's not running:\n  openclaw gateway start\n\nYou now have an AI Gateway running on your machine. It's listening, ready to chat, running in the background, and will survive reboots."],
    ],
  },
  {
    title: "Chapter 05: Your First Chat",
    sections: [
      ["Open the dashboard", "  openclaw dashboard\n\nThis opens your browser to the Control UI -- usually at http://127.0.0.1:18789/"],
      ["Say hello", "Type anything: \"Hey, who are you?\"\n\nAnd just like that, you're talking to your AI assistant. It runs on your machine, it's private, and it's yours."],
      ["What can you ask it?", "* \"Read this file\" -- point it at files on your computer\n* \"Search the web for...\" -- it can browse the internet\n* \"What's on my calendar?\" -- with integrations\n* \"Remember that I prefer...\" -- it has memory across sessions"],
    ],
  },
  {
    title: "Chapter 06: Connect Messaging",
    sections: [
      ["WhatsApp", "  openclaw channels login whatsapp\n\nA QR code will appear. Scan it with WhatsApp (Settings -> Linked Devices -> Link a Device).\n\nNote: This links your personal WhatsApp. Configure allowFrom in settings to control who it talks to."],
      ["Telegram", "1. Chat with @BotFather on Telegram\n2. Send /newbot and follow prompts\n3. Copy the bot token\n4. Add to ~/.openclaw/openclaw.json:\n\n  { \"channels\": { \"telegram\": { \"enabled\": true, \"botToken\": \"YOUR_TOKEN\" } } }\n\n5. Restart: openclaw gateway restart\n6. Message your bot on Telegram"],
      ["Discord", "1. Go to Discord Developer Portal\n2. Create a New Application -> Bot -> copy token\n3. Add to config and restart"],
      ["Multiple channels", "Configure as many as you want. The Gateway handles routing automatically. Same AI, multiple front doors."],
    ],
  },
  {
    title: "Chapter 07: Make It Yours",
    sections: [
      ["The Soul File", "SOUL.md (in ~/.openclaw/workspace/) defines your agent's personality. Edit it directly or tell your AI: \"Let's update your soul file. I want you to be more casual and sarcastic.\""],
      ["The Identity File", "IDENTITY.md is where your agent gets a name, emoji, and vibe. Have a conversation about it -- that's what the bootstrap process is for."],
      ["Memory", "Your agent has two types of memory:\n* Daily notes (memory/YYYY-MM-DD.md) -- raw logs\n* Long-term memory (MEMORY.md) -- curated, important stuff\n\nThe more you chat, the more it learns about you."],
      ["Make it useful", "Tell your agent what you care about:\n* \"I'm a software engineer working on a React app\"\n* \"I hate long emails -- keep things brief\"\n* \"My family: [names, ages, details]\"\n\nMore context = better service."],
    ],
  },
  {
    title: "Chapter 08: Now What?",
    sections: [
      ["Daily Briefing", "Ask your agent to check weather, calendar, and news every morning. Set up a heartbeat in HEARTBEAT.md for automation."],
      ["Research Assistant", "\"Research the top 5 competitors to [product] and give me a comparison.\" It searches the web, reads pages, and synthesizes."],
      ["Code Helper", "Give it repo access. Ask it to review PRs, explain code, write tests, or scaffold features."],
      ["Email Draft Writer", "\"Draft a reply to this email that declines politely but firmly.\" Paste, get draft, edit, send."],
      ["The meta move", "Use your AI to help you figure out what to use your AI for. Describe your day, your pain points -- ask where it can help."],
    ],
  },
  {
    title: "Chapter 09: When Things Break",
    sections: [
      ["\"command not found: openclaw\"", "Close and reopen terminal. Run 'npm install -g openclaw@latest' again. On Mac: 'source ~/.zshrc'"],
      ["Gateway won't start", "  openclaw gateway status\n  openclaw gateway start\n\nRun in foreground for errors:\n  openclaw gateway --port 18789"],
      ["API key invalid", "Check key in ~/.openclaw/openclaw.json. Verify Anthropic account has credits. Run: openclaw doctor"],
      ["WhatsApp QR code won't scan", "Use WhatsApp -> Settings -> Linked Devices -> Link a Device. QR expires quickly -- rerun login if needed."],
      ["Messages not getting through", "  openclaw logs --follow\n\nWatch logs while sending a message to see where it fails."],
      ["Nuclear option", "  openclaw doctor --fix\n\nRuns diagnostics and auto-fixes common issues."],
      ["Still stuck?", "* Discord community (active and helpful)\n* GitHub: github.com/openclaw/openclaw\n* Docs: docs.openclaw.ai"],
    ],
  },
  {
    title: "Chapter 10: Choosing Your AI Model",
    sections: [
      ["The engine under the hood", "OpenClaw doesn't have its own AI brain -- it connects to external AI models. Think of it like choosing an engine for a car. The car (OpenClaw) is the same, but the engine changes how it performs."],
      ["Anthropic (Claude)", "The recommended default. Excellent at writing, nuanced reasoning, and following complex instructions.\n\n* Haiku -- Fast and cheap. Good for quick tasks. ~$0.001/message.\n* Sonnet -- The sweet spot. Good at most things. ~$0.01/message.\n* Opus -- The heavyweight. Best reasoning and writing. ~$0.05/message."],
      ["OpenAI (GPT)", "The most well-known. Excels at coding and multi-step instructions.\n\n* GPT-4o Mini -- Fast, cheap, surprisingly capable\n* GPT-4o -- Strong all-rounder\n* o1 -- Reasoning specialist for complex problems"],
      ["MiniMax", "Budget-friendly for high-volume use.\n\n* M2.5 -- Fast and very cheap. Good for simple tasks at scale."],
      ["Which model should you use?", "* Daily driver (most people): Claude Sonnet\n* Quick tasks, high volume: Claude Haiku or GPT-4o Mini\n* Important writing or analysis: Claude Opus\n* Coding projects: GPT-4o or Claude Sonnet\n* Complex reasoning: o1 or Opus\n* Tight budget: MiniMax M2.5"],
      ["Cost reality check", "For normal personal use (20-50 messages/day):\n\n* Haiku/Mini: $1-3/month\n* Sonnet/4o: $5-15/month\n* Opus/o1: $20-50/month\n\nStart with Sonnet. Upgrade to Opus for important tasks. Drop to Haiku for quick stuff."],
    ],
  },
  {
    title: "Chapter 11: The Memory System",
    sections: [
      ["Three types of memory", "1. Short-term (in-session) -- Current conversation only. Gone when session resets.\n2. Daily memory (memory/YYYY-MM-DD.md) -- A log for each day. Auto-loads last 2 days.\n3. Long-term (MEMORY.md) -- Permanent record of important stuff."],
      ["SOUL.md -- Who the agent is", "Defines personality, tone, and values. Example:\n\n  Be direct and concise. Use sarcasm sparingly.\n  Don't be a sycophant -- if an idea has holes, say so."],
      ["USER.md -- Who you are", "Basic info that helps personalize:\n\n  Name: Alex\n  Timezone: America/Los_Angeles\n  Notes: Software engineer, loves snowboarding"],
      ["MEMORY.md -- What it remembers", "Long-term curated memory:\n\n  - Prefers bullet points over paragraphs\n  - Working on OpenClaw guide project\n  - Hates sycophantic AI responses"],
      ["TOOLS.md -- Your environment", "Local setup notes: device names, API key locations, SSH hosts, camera names. Anything environment-specific."],
      ["Best practices", "* End sessions well: Tell your agent 'Update memory with what we worked on today.'\n* Review periodically: Ask your agent to clean up MEMORY.md every few weeks.\n* Be explicit: When something matters, say 'Remember this.'\n* Don't overthink it: The memory system works automatically for the most part."],
    ],
  },
  {
    title: "Chapter 12: Skills & Superpowers",
    sections: [
      ["What are skills?", "Skills are plugins that teach your agent to use specific tools. Weather, image generation, smart home control -- each is a skill you can install."],
      ["ClawHub", "Browse community skills at clawhub.com.\n\nInstall a skill:\n  clawhub install weather\n\nUpdate all skills:\n  clawhub update --all"],
      ["Popular skills", "* Weather -- Current conditions and forecasts\n* Web search -- Search the internet (needs Brave API key)\n* Image generation -- Create images via AI models\n* Calendar -- Check and manage Google Calendar\n* Email -- Read and send Gmail\n* Home automation -- Control smart home devices"],
      ["Creating your own", "Create a folder in ~/.openclaw/workspace/skills/my-skill/ with a SKILL.md file. Your agent picks it up on the next session."],
      ["Security note", "Treat third-party skills like any software you install -- read them before enabling. Stick to well-known skills from ClawHub."],
    ],
  },
  {
    title: "Chapter 13: Multi-Agent Setup",
    sections: [
      ["Why multiple agents?", "Your main agent is a generalist. But sometimes you want specialists:\n\n* Research agent -- focused on web research\n* Code agent -- focused on programming\n* Writing agent -- focused on content creation\n\nEach gets its own workspace, personality, and skills."],
      ["Sub-agents", "Your main agent can spawn sub-agents for specific tasks. These run in isolated sessions. When done, results flow back to the main agent."],
      ["When to use it", "DO use when:\n* You have distinct task categories\n* You want different models for different tasks\n* You need parallel processing\n\nDON'T bother when:\n* You're just getting started\n* Your tasks are simple and varied\n* You're optimizing costs"],
      ["Start simple", "Master one agent first. When you find yourself thinking 'I wish I had a separate agent for this,' that's when it's time."],
    ],
  },
  {
    title: "Chapter 14: Automation & Proactive AI",
    sections: [
      ["Heartbeats", "A periodic check-in. OpenClaw pings your agent on a schedule and it decides what to do: check email, look at calendar, monitor websites.\n\nCreate HEARTBEAT.md in your workspace:\n\n  # Heartbeat Tasks\n  - Check email for anything urgent\n  - Look at calendar for events in next 2 hours\n  - If morning, send daily briefing"],
      ["Cron jobs", "For precise scheduling:\n\n  openclaw cron add --schedule '0 9 * * 1' --task 'Send weekly summary'\n\nHeartbeats = flexible batched checks. Cron = exact timing."],
      ["Webhooks", "Trigger your agent from external services: GitHub, Stripe, Zapier, custom scripts. Enable in config under automation.webhook."],
      ["Real-world examples", "* Morning briefing: Weather + calendar + email summary at 8am\n* PR reviewer: GitHub webhook triggers code review\n* Meeting prep: 15 min before events, research attendees\n* Price monitor: Hourly check for price drops, alert on target"],
    ],
  },
  {
    title: "Chapter 15: Security & Best Practices",
    sections: [
      ["Use dedicated accounts", "The single most important tip:\n\n* Create a separate Gmail for your bot. Never use personal.\n* Use scoped API tokens with minimum permissions.\n* Rotate keys periodically."],
      ["Access control", "Control who can message your bot:\n\n* pairing (default) -- New senders need your approval\n* allowlist -- Only pre-approved senders\n* open -- Anyone can message (use with caution)\n* disabled -- No DMs\n\nIn groups, always require mentions to prevent responding to everything."],
      ["Sandboxing", "Run agent code execution in an isolated container. Prevents accidental system modifications. Enable in config under agents.defaults.sandbox."],
      ["The trust ladder", "Build trust gradually:\n\n1. Week 1: Read-only. Answer questions, search web.\n2. Week 2: Light actions. Draft emails (you send them).\n3. Month 1: More autonomy. Manage files, run scripts.\n4. Month 2+: Full trust. Send messages, manage calendar.\n\nIf your agent makes a mistake, tighten permissions and try again later."],
    ],
  },
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  // Simple token check -- not bulletproof but prevents casual sharing
  if (token !== process.env.GUIDE_DOWNLOAD_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 60;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  function checkPage(needed = 40) {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  }

  // Title page
  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  y = 200;
  doc.text("The OpenClaw Guide", pageWidth / 2, y, { align: "center" });

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  y += 40;
  doc.text("Set up your AI assistant in 30 minutes, not 3 hours.", pageWidth / 2, y, { align: "center" });

  doc.setFontSize(11);
  y += 60;
  doc.text("Built by Ollie -- an AI given one night to build a business.", pageWidth / 2, y, { align: "center" });
  y += 20;
  doc.text("theopenclaw.guide", pageWidth / 2, y, { align: "center" });

  // Content
  for (const chapter of GUIDE_CONTENT) {
    doc.addPage();
    y = margin;

    // Chapter title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    const titleLines = doc.splitTextToSize(chapter.title, contentWidth);
    doc.text(titleLines, margin, y);
    y += titleLines.length * 28 + 16;

    for (const [heading, body] of chapter.sections) {
      checkPage(60);

      // Section heading
      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      const headLines = doc.splitTextToSize(heading, contentWidth);
      doc.text(headLines, margin, y);
      y += headLines.length * 17 + 6;

      // Section body -- split into paragraphs first
      const paragraphs = body.split("\n");
      const lineHeight = 15;
      const paraSpacing = 6;

      for (const para of paragraphs) {
        if (para.trim() === "") {
          y += paraSpacing;
          continue;
        }

        // Detect command lines (indented)
        const isCommand = para.startsWith("  ") && !para.startsWith("  *");

        if (isCommand) {
          doc.setFont("courier", "normal");
          doc.setFontSize(9);
          const cmdLines = doc.splitTextToSize(para, contentWidth - 20);
          for (const cl of cmdLines) {
            checkPage(lineHeight);
            doc.text(cl, margin + 10, y);
            y += lineHeight;
          }
        } else {
          doc.setFont("helvetica", "normal");
          doc.setFontSize(10);
          const textLines = doc.splitTextToSize(para, contentWidth);
          for (const tl of textLines) {
            checkPage(lineHeight);
            doc.text(tl, margin, y);
            y += lineHeight;
          }
        }
        y += 2;
      }
      y += 10;
    }
  }

  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="The-OpenClaw-Guide.pdf"',
    },
  });
}
