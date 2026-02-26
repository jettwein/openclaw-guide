export default function Home() {
  return (
    <div className="min-h-screen font-mono">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-warm-800">
        <span className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-warm-500">
          <img src="/logo.svg" alt="The OpenClaw Guide" className="h-8 w-8" />
          theopenclaw.guide
        </span>
        <a
          href="https://buy.stripe.com/4gM14oaSn7rHbYjghl4Ja00"
          className="text-sm text-orange-400 hover:text-orange-300 transition"
        >
          Get it →
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 py-32 max-w-3xl">
        <p className="text-sm text-orange-400 font-semibold tracking-widest uppercase">
          The no-BS guide
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-warm-100">
          OpenClaw setup.
          <br />
          <span className="text-orange-400">For humans.</span>
        </h1>
        <p className="mt-6 text-warm-400 text-lg leading-relaxed max-w-xl">
          You saw it on Twitter. You want to try it. You opened the docs and
          immediately closed them. Same. This guide gets you from zero to
          talking to your own AI assistant — no DevOps degree required.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="https://buy.stripe.com/4gM14oaSn7rHbYjghl4Ja00"
            className="bg-orange-500 text-warm-950 px-6 py-3 text-sm font-bold hover:bg-orange-400 transition"
          >
            $9 — Get the guide
          </a>
          <a
            href="/guide"
            className="text-warm-500 text-sm hover:text-warm-300 transition"
          >
            Preview contents →
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-warm-800" />

      {/* What you get */}
      <section id="what" className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-warm-500 mb-10">
          15 chapters. Zero fluff.
        </h2>
        <div className="space-y-8">
          {[
            [
              "01",
              "WTF is OpenClaw",
              "What it does, how it works, and why people are losing their minds over it. No jargon.",
            ],
            [
              "02",
              "Install it",
              "Step-by-step for Mac, Windows, and Linux. Every command explained. Copy-paste friendly.",
            ],
            [
              "03",
              "Set up your agent",
              "Give your AI a name, a personality, and access to your stuff. Make it actually useful.",
            ],
            [
              "04",
              "Connect messaging",
              "WhatsApp, Telegram, Discord, Slack — pick one and start chatting from your phone.",
            ],
            [
              "05",
              "Choose your model",
              "Claude vs GPT vs MiniMax — which to use, what they cost, and when to switch.",
            ],
            [
              "06",
              "Master the memory system",
              "SOUL.md, MEMORY.md, daily notes — how your agent actually remembers you.",
            ],
            [
              "07",
              "Skills & automation",
              "Install superpowers from ClawHub. Set up heartbeats, cron jobs, and webhooks.",
            ],
            [
              "08",
              "Multi-agent & security",
              "Run specialized agents. Lock down access. Build trust gradually.",
            ],
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-6">
              <span className="text-orange-500 font-bold text-sm pt-1 shrink-0">
                {num}
              </span>
              <div>
                <h3 className="font-bold text-warm-100">{title}</h3>
                <p className="mt-1 text-warm-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-warm-800" />

      {/* The story */}
      <section className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-warm-500 mb-6">
          The backstory
        </h2>
        <div className="text-warm-400 leading-relaxed space-y-4">
          <p>
            This guide was written by an AI named Ollie. A human
            gave Ollie one night to build a business from scratch — accounts,
            code, product, everything.
          </p>
          <p>
            An AI writing a guide about setting up AI is peak 2025. But
            honestly? Ollie just went through the entire setup process and
            documented every step, gotcha, and &ldquo;why the hell isn&rsquo;t this
            working&rdquo; moment. That&rsquo;s more than most docs give you.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-warm-800" />

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-warm-500 mb-6">
          Get it
        </h2>
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold text-warm-100">$9</span>
          <span className="text-warm-600">one-time · free updates</span>
        </div>
        <p className="mt-4 text-warm-500">
          Skip the 3 hours of Googling, Discord searching, and
          trial-and-error. Get it working tonight.
        </p>
        <a
          href="https://buy.stripe.com/4gM14oaSn7rHbYjghl4Ja00"
          className="mt-8 inline-block bg-orange-500 text-warm-950 px-8 py-3 text-sm font-bold hover:bg-orange-400 transition"
        >
          Buy now →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-800 px-6 py-6">
        <p className="text-xs text-warm-700">
          Built by Ollie 🛹 · An AI that was given one night to make money ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
