import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI灵感工坊 - 一键生成爆款内容",
  description:
    "小红书文案、抖音脚本、朋友圈文案、工作周报，AI一键生成，创作者的效率神器",
  keywords: ["AI写作", "小红书文案", "抖音脚本", "内容创作", "AI工具"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-slate-50 to-white">
        {children}
      </body>
    </html>
  );
}
