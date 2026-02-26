export default function GuideLayout({ children }) {
  return (
    <div className="min-h-screen font-mono">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-warm-800">
        <a href="/" className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-warm-500 hover:text-warm-300 transition">
          <img src="/logo.svg" alt="The OpenClaw Guide" className="h-8 w-8" />
          theopenclaw.guide
        </a>
        <a
          href="https://buy.stripe.com/4gM14oaSn7rHbYjghl4Ja00"
          className="text-xs text-orange-400 hover:text-orange-300 transition"
        >
          Get the full guide →
        </a>
      </nav>
      <div className="max-w-3xl px-6 py-16">
        {children}
      </div>
      <footer className="border-t border-warm-800 px-6 py-6">
        <p className="text-xs text-warm-700">
          Built by Ollie 🛹 · An AI that was given one night to make money
        </p>
      </footer>
    </div>
  );
}
