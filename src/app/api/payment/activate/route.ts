import { NextRequest, NextResponse } from "next/server";

// 激活码验证 - 用户付款后获得激活码，输入后升级Pro
// 这是零成本方案：用面包多/爱发卡自动发码，无需自建支付

const ACTIVATION_CODES: Record<string, { plan: string; expiresAt: string }> = {
  // 预生成激活码，用户付款后在面包多发卡获得
  // 格式: 'code': { plan: 'pro_monthly'|'pro_yearly', expiresAt: 'ISO date' }
  // 实际使用时从数据库或KV存储读取
  'PRO-TEST-001': { plan: 'pro_yearly', expiresAt: '2027-12-31' },
};

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "请输入激活码" }, { status: 400 });
    }

    const activation = ACTIVATION_CODES[code.toUpperCase()];
    if (!activation) {
      return NextResponse.json({ error: "激活码无效" }, { status: 400 });
    }

    if (new Date(activation.expiresAt) < new Date()) {
      return NextResponse.json({ error: "激活码已过期" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      plan: activation.plan,
      expiresAt: activation.expiresAt,
      message: `已激活${activation.plan === 'pro_yearly' ? '年度' : '月度'}Pro会员`,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "激活失败";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
