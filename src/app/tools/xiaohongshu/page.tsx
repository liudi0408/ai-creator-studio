import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function XiaohongshuPage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">小红书文案生成</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">📖</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            小红书文案生成
          </h1>
          <p className="text-gray-500">
            输入主题，一键生成爆款小红书笔记：标题 + 正文 + 标签
          </p>
        </div>

        <GeneratorForm
          toolId="xiaohongshu"
          placeholder="输入你的笔记主题，例如：分享一款超好用的平价面霜 / 周末探店北京胡同咖啡 / 新手养猫避坑指南"
          promptPrefix={`你是一个小红书爆款文案专家。请根据用户提供的主题，生成一篇小红书笔记，要求：
1. 标题：吸引眼球，使用emoji，控制在20字以内
2. 正文：口语化、有场景感、分段清晰，每段1-2句，适当使用emoji
3. 标签：5-8个相关话题标签
4. 互动引导：结尾引导点赞收藏评论

主题：`}
        />
      </main>
    </div>
  );
}
