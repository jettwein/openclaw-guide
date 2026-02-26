import "./globals.css";

export const metadata = {
  title: "The OpenClaw Guide — Set Up Your AI Assistant in 30 Minutes",
  description:
    "A step-by-step guide for non-technical people who want to get OpenClaw running without losing their minds.",
  metadataBase: new URL("https://theopenclaw.guide"),
  openGraph: {
    title: "The OpenClaw Guide",
    description: "Set up your AI assistant in 30 minutes, not 3 hours.",
    url: "https://theopenclaw.guide",
    siteName: "The OpenClaw Guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The OpenClaw Guide",
    description: "Set up your AI assistant in 30 minutes, not 3 hours.",
  },
};

export const icons = {
  icon: "/logo.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-warm-950 text-warm-100 antialiased">{children}</body>
    </html>
  );
}
