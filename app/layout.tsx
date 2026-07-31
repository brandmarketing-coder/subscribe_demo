import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "直購訂閱",
  description: "O'right 綠色工廠直送，不綁約、不自動扣款。一次備足辣木洗手慕斯，讓天然生活更輕鬆。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
