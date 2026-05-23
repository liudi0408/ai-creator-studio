import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function MomentsPage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">朋友圈文案</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">✨</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            朋友圈文案
          </h1>
          <p className="text-gray-500">
            输入场景，生成3种风格的朋友圈文案：文艺 / 幽默 / 高级
          </p>
        </div>

        <GeneratorForm
          toolId="moments"
          placeholder="输入你的场景，例如：周末海边日落 / 加班到深夜 / 终于拿到offer / 和闺蜜吃火锅"
          promptPrefix={`你是一个朋友圈文案大师。请根据用户提供的场景，生成3条不同风格的朋友圈文案，风格分别为：
1. 文艺清新风：细腻感性、意境美
2. 幽默接地气：轻松有趣、有梗
3. 高级质感风：简洁有深度、不俗套

每条文案控制在50字以内，适当使用emoji。

场景：`}
        />
      </main>
    </div>
  );
}
