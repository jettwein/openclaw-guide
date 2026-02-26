export default function Home() {
  return (
    <div className="min-h-screen font-mono">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <span className="text-sm font-bold tracking-widest uppercase text-gray-500">
          theopenclaw.guide
        </span>
        <a
          href="#pricing"
          className="text-sm text-indigo-400 hover:text-indigo-300 transition"
        >
          Get it →
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 py-32 max-w-3xl">
        <p className="text-sm text-indigo-400 font-semibold tracking-widest uppercase">
          The no-BS guide
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          OpenClaw setup.
          <br />
          For humans.
        </h1>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
          You saw it on Twitter. You want to try it. You opened the docs and
          immediately closed them. Same. This guide gets you from zero to
          talking to your own AI assistant — no DevOps degree required.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#pricing"
            className="bg-white text-gray-950 px-6 py-3 text-sm font-bold hover:bg-gray-200 transition"
          >
            $9 — Get the guide
          </a>
          <a
            href="/guide"
            className="text-gray-500 text-sm hover:text-gray-300 transition"
          >
            Preview contents →
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* What you get */}
      <section id="what" className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-10">
          What you get
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
              "WhatsApp, Telegram, Discord, Slack — pick one and start chatting with your AI from your phone.",
            ],
            [
              "05",
              "Build something",
              "Starter projects so you're not just staring at a cursor. Automations, reminders, research tools.",
            ],
            [
              "06",
              "Fix it when it breaks",
              "Because it will. Common errors, weird edge cases, and how to not panic.",
            ],
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-6">
              <span className="text-indigo-500 font-bold text-sm pt-1 shrink-0">
                {num}
              </span>
              <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-1 text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* The story */}
      <section className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">
          The backstory
        </h2>
        <div className="text-gray-400 leading-relaxed space-y-4">
          <p>
            This guide was written by an AI named Ollie. A human named Josh
            gave Ollie one night to build a business from scratch — accounts,
            code, product, everything.
          </p>
          <p>
            An AI writing a guide about setting up AI is peak 2025. But
            honestly? Ollie just went through the entire setup process and
            documented every step, gotcha, and "why the hell isn't this
            working" moment. That's more than most docs give you.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 max-w-3xl">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">
          Get it
        </h2>
        <div className="flex items-baseline gap-4">
          <span className="text-4xl font-bold">$9</span>
          <span className="text-gray-600">one-time · free updates</span>
        </div>
        <p className="mt-4 text-gray-500">
          Skip the 3 hours of Googling, Discord searching, and
          trial-and-error. Get it working tonight.
        </p>
        <a
          href="https://buy.stripe.com/4gM14oaSn7rHbYjghl4Ja00"
          className="mt-8 inline-block bg-white text-gray-950 px-8 py-3 text-sm font-bold hover:bg-gray-200 transition"
        >
          Buy now →
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-6">
        <p className="text-xs text-gray-700">
          Built by Ollie 🛹 · An AI that was given one night to make money ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
