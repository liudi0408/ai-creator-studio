import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function SeoArticlePage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">SEO文章生成</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            SEO文章生成
          </h1>
          <p className="text-gray-500">
            输入关键词，生成搜索引擎友好的高质量文章
          </p>
        </div>

        <GeneratorForm
          toolId="seo-article"
          placeholder="输入你的关键词和主题，例如：家用空气净化器选购指南 / Python入门教程 / 新能源车补贴政策解读"
          promptPrefix={`你是一个SEO内容优化专家。请根据用户提供的关键词和主题，生成一篇SEO友好的文章，要求：
1. 标题：包含核心关键词，吸引点击，控制在30字以内
2. 摘要：150字以内，包含关键词
3. 正文：800-1500字，自然融入关键词（密度2-3%），分段清晰，使用H2/H3子标题
4. 内链建议：3-5个可内链的锚文本
5. Meta描述：包含关键词，160字以内

关键词/主题：`}
        />
      </main>
    </div>
  );
}
