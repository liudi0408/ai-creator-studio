import Link from "next/link";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  return (
    <div className="flex-1">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">免费使用中</span>
            <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity">
              升级Pro
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          🚀 已为创作者生成 10,000+ 条内容
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI一键生成
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            爆款内容
          </span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          小红书文案 / 抖音脚本 / 朋友圈文案 / 工作周报
          <br />
          告别灵感枯竭，30秒出稿
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#tools"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
          >
            立即体验
          </a>
          <button className="px-8 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            了解更多
          </button>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          选择你的创作工具
        </h2>
        <ToolCard />
      </section>

      {/* Social Proof */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            创作者们都在用
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "小红书博主 @蜜桃酱",
                text: "粉丝从2千涨到5万，文案效率提升了10倍！",
              },
              {
                name: "抖音达人 @老王说车",
                text: "脚本生成太准了，完播率直接翻倍。",
              },
              {
                name: "运营人 Lisa",
                text: "周报再也不愁了，老板还夸我写得专业。",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl bg-white border border-gray-100"
              >
                <p className="text-gray-600 text-sm mb-3">&ldquo;{item.text}&rdquo;</p>
                <p className="text-gray-900 font-medium text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">简单定价</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h3 className="font-semibold text-lg text-gray-900">免费版</h3>
            <p className="text-3xl font-bold text-gray-900 mt-3">
              ¥0<span className="text-base font-normal text-gray-400">/月</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
              <li>✓ 每日3次免费生成</li>
              <li>✓ 全部工具可用</li>
              <li>✓ 基础模板</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border-2 border-blue-500 bg-white relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
              最受欢迎
            </span>
            <h3 className="font-semibold text-lg text-gray-900">Pro版</h3>
            <p className="text-3xl font-bold text-gray-900 mt-3">
              ¥29<span className="text-base font-normal text-gray-400">/月</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
              <li>✓ 无限次生成</li>
              <li>✓ 全部工具可用</li>
              <li>✓ 高级模板 & 风格</li>
              <li>✓ 优先生成速度</li>
              <li>✓ 历史记录保存</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 AI灵感工坊</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">关于我们</a>
            <a href="#" className="hover:text-gray-600">使用条款</a>
            <a href="#" className="hover:text-gray-600">隐私政策</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
