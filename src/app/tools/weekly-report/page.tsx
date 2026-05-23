import Link from "next/link";
import GeneratorForm from "@/components/GeneratorForm";

export default function WeeklyReportPage() {
  return (
    <div className="flex-1">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-gray-900">
            ✨ AI灵感工坊
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">工作周报生成</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            工作周报生成
          </h1>
          <p className="text-gray-500">
            把零碎工作内容变成专业周报，老板看了直点头
          </p>
        </div>

        <GeneratorForm
          toolId="weekly-report"
          placeholder="写下你本周做了什么，用逗号分隔即可。例如：完成了用户模块开发，修了3个线上bug，参加了产品需求评审会，写了两篇技术文档"
          promptPrefix={`你是一个职场周报撰写专家。请根据用户提供的本周工作内容，生成一份专业的周报，格式如下：
1. 本周工作总结：提炼3-5项重点工作，每项用一句话概括成果
2. 关键数据/成果：量化工作产出
3. 遇到的挑战及解决方案：展示问题解决能力
4. 下周工作计划：2-3项明确计划
5. 需要的支持：如有

要求：用词专业、成果导向、避免流水账。

本周工作内容：`}
        />
      </main>
    </div>
  );
}
