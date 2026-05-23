import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function EcommerceTitlePage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">电商标题优化</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            电商标题优化
          </h1>
          <p className="text-gray-500">
            输入商品信息，生成5个高点击率电商标题 + 搜索热词推荐
          </p>
        </div>

        <GeneratorForm
          toolId="ecommerce-title"
          placeholder="输入商品信息，例如：无线蓝牙耳机 降噪 30小时续航 / 女士真丝睡衣 桑蚕丝 家居服 / 儿童积木玩具 益智 3-6岁"
          promptPrefix={`你是一个电商运营标题优化专家。请根据用户提供的商品信息，生成5个高点击率的商品标题，要求：
1. 每个标题控制在30字以内
2. 包含核心关键词和长尾词
3. 突出卖点和差异化
4. 符合平台规则（淘宝/京东/拼多多）
5. 5个标题分别侧重不同卖点角度

同时给出：
- 推荐的搜索关键词（10个）
- 标题设计思路说明

商品信息：`}
        />
      </main>
    </div>
  );
}
