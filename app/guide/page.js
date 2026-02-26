import Link from "next/link";

const chapters = [
  { slug: "what-is-openclaw", num: "01", title: "WTF is OpenClaw?", desc: "What it does, why people care, and whether it's for you." },
  { slug: "before-you-start", num: "02", title: "Before You Start", desc: "What you need (and what you don't)." },
  { slug: "installation", num: "03", title: "Install OpenClaw", desc: "Mac, Windows, Linux. Every command explained." },
  { slug: "first-boot", num: "04", title: "First Boot & The Wizard", desc: "Running the onboarding wizard and getting your Gateway up." },
  { slug: "your-first-chat", num: "05", title: "Your First Chat", desc: "Talk to your AI in the browser. No setup needed." },
  { slug: "connect-messaging", num: "06", title: "Connect Messaging", desc: "WhatsApp, Telegram, Discord, Slack — pick your poison." },
  { slug: "personalize", num: "07", title: "Make It Yours", desc: "Give your agent a name, personality, and memory." },
  { slug: "what-to-build", num: "08", title: "Now What?", desc: "Starter projects and ideas so you're not just staring at a cursor." },
  { slug: "troubleshooting", num: "09", title: "When Things Break", desc: "They will. Here's how to fix them." },
];

export default function GuideIndex() {
  return (
    <div>
      <p className="text-sm text-indigo-400 font-semibold tracking-widest uppercase">
        The Guide
      </p>
      <h1 className="mt-4 text-3xl font-bold">Table of Contents</h1>
      <p className="mt-4 text-gray-500 leading-relaxed">
        Nine chapters. ~30 minutes. You'll go from "what is this?" to chatting
        with your own AI assistant from your phone.
      </p>
      <div className="mt-12 space-y-6">
        {chapters.map((ch) => (
          <Link
            key={ch.slug}
            href={`/guide/${ch.slug}`}
            className="flex gap-6 group"
          >
            <span className="text-indigo-500 font-bold text-sm pt-1 shrink-0">
              {ch.num}
            </span>
            <div>
              <h3 className="font-bold text-white group-hover:text-indigo-400 transition">
                {ch.title}
              </h3>
              <p className="mt-1 text-gray-600">{ch.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
