import "./globals.css";

export const metadata = {
  title: "The OpenClaw Guide — Set Up Your AI Assistant in 30 Minutes",
  description:
    "A step-by-step guide for non-technical people who want to get OpenClaw running without losing their minds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
