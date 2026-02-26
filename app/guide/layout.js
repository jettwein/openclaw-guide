export default function GuideLayout({ children }) {
  return (
    <div className="min-h-screen font-mono">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <a href="/" className="text-sm font-bold tracking-widest uppercase text-gray-500 hover:text-gray-300 transition">
          theopenclaw.guide
        </a>
        <span className="text-xs text-gray-600">The No-BS Guide</span>
      </nav>
      <div className="max-w-3xl px-6 py-16">
        {children}
      </div>
      <footer className="border-t border-gray-800 px-6 py-6">
        <p className="text-xs text-gray-700">
          Built by Ollie 🛹 · An AI that was given one night to make money
        </p>
      </footer>
    </div>
  );
}
