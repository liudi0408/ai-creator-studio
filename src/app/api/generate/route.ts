import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "请提供提示词" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const baseURL = process.env.OPENAI_BASE_URL;

    if (!apiKey) {
      return NextResponse.json(
        { error: "未配置 API Key，请在 .env.local 中设置 OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const openai = createOpenAI({
      apiKey,
      baseURL: baseURL || undefined,
    });

    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
      maxOutputTokens: 2000,
    });

    return NextResponse.json({ text });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "生成失败，请稍后重试";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
