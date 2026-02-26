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
