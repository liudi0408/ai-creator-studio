import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "请提供提示词" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const baseURL = process.env.OPENAI_BASE_URL || "https://ark.cn-beijing.volces.com/api/v3";
    const model = process.env.ARK_MODEL || "ep-20260524015402-clmjj";

    if (!apiKey) {
      return NextResponse.json(
        { error: "未配置 API Key，请在 .env.local 中设置 OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const response = await fetch(`${baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: `AI服务错误: ${err}` }, { status: 500 });
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "生成结果为空";

    return NextResponse.json({ text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "生成失败，请稍后重试";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
