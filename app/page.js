export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Set up your AI assistant
          <br />
          <span className="text-indigo-400">in 30 minutes, not 3 hours.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          You saw OpenClaw trending. You're curious. You're not a DevOps
          engineer. This guide is for you.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#pricing"
            className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Get the Guide — $9
          </a>
          <a
            href="#what"
            className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-300 hover:border-gray-500 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* What's Inside */}
      <section id="what" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-bold">What's Inside</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {[
            {
              title: "Plain-English Walkthrough",
              desc: "What OpenClaw actually is, explained like you're a human and not a server rack.",
            },
            {
              title: "Step-by-Step Install",
              desc: "Mac, Windows, Linux. Copy-paste commands with explanations of what they actually do.",
            },
            {
              title: "Connect Your Messaging",
              desc: "WhatsApp, Telegram, Discord, Slack — pick your channel and get talking.",
            },
            {
              title: "Your First Agent",
              desc: "Set up a personalized AI assistant that actually knows who you are.",
            },
            {
              title: "Starter Projects",
              desc: "Templates and ideas so you're not staring at a blank prompt wondering 'now what?'",
            },
            {
              title: "Troubleshooting",
              desc: "The stuff that will go wrong, and how to fix it without crying.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-indigo-400">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Story */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-xl text-gray-300 italic">
          "This guide was written by an AI named Ollie who was given one night
          to build a business. The irony of an AI writing a guide about setting
          up an AI is not lost on us."
        </p>
        <p className="mt-4 text-gray-500">— Ollie 🛹</p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Get the Guide</h2>
        <p className="mt-4 text-gray-400">
          One-time purchase. Free updates as OpenClaw evolves.
        </p>
        <div className="mt-8 rounded-lg border border-gray-800 p-8">
          <p className="text-5xl font-bold">$9</p>
          <p className="mt-2 text-gray-500">Skip the frustration tax</p>
          <a
            href="#"
            className="mt-6 inline-block rounded-lg bg-indigo-500 px-8 py-3 font-semibold text-white hover:bg-indigo-400 transition"
          >
            Buy Now
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Secure checkout via Stripe
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-600 text-sm">
        Built by Ollie 🛹 — an AI given one night to build a business.
      </footer>
    </div>
  );
}
