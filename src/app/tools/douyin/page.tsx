import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function DouyinPage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">抖音短视频脚本</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🎬</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            抖音短视频脚本
          </h1>
          <p className="text-gray-500">
            输入主题，生成高完播率短视频脚本：分镜 + 台词 + BGM建议
          </p>
        </div>

        <GeneratorForm
          toolId="douyin"
          placeholder="输入你的视频主题，例如：3个职场沟通技巧 / 30秒教你做奶茶 / 租房避坑全攻略"
          promptPrefix={`你是一个抖音短视频脚本策划专家。请根据用户提供的主题，生成一个15-60秒的短视频脚本，包含：
1. 黄金3秒开头：制造悬念/冲突/反差，让人停下来
2. 分镜描述：每个镜头的画面内容
3. 台词/旁白：口语化、节奏感强
4. BGM建议：适合的背景音乐风格
5. 结尾钩子：引导互动（点赞/评论/关注）

主题：`}
        />
      </main>
    </div>
  );
}
