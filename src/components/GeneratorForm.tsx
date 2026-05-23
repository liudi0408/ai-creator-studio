"use client";

import { useState, useEffect } from "react";
import { Loader2, Copy, Check, RefreshCw, Lock, Key } from "lucide-react";
import { canGenerate, incrementUsage, getRemainingCount, getUsage, setPro } from "@/lib/usage";

interface GeneratorFormProps {
  toolId: string;
  placeholder: string;
  promptPrefix: string;
}

export default function GeneratorForm({
  toolId,
  placeholder,
  promptPrefix,
}: GeneratorFormProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [remaining, setRemaining] = useState<number>(3);
  const [blocked, setBlocked] = useState(false);
  const [activationCode, setActivationCode] = useState("");
  const [activating, setActivating] = useState(false);
  const [activateError, setActivateError] = useState("");
  const [showActivation, setShowActivation] = useState(false);

  useEffect(() => {
    const usage = getUsage();
    setRemaining(getRemainingCount());
    setBlocked(!canGenerate());
  }, []);

  const handleGenerate = async () => {
    if (!input.trim() || loading || blocked) return;

    if (!canGenerate()) {
      setBlocked(true);
      return;
    }

    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: promptPrefix + input,
          toolId,
        }),
      });
      if (!res.ok) throw new Error("生成失败");
      const data = await res.json();
      setResult(data.text);
      incrementUsage();
      setRemaining(getRemainingCount());
      if (!canGenerate()) setBlocked(true);
    } catch {
      setResult("生成失败，请稍后重试。请确认已配置 AI API Key。");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleActivate = async () => {
    if (!activationCode.trim() || activating) return;
    setActivating(true);
    setActivateError("");
    try {
      const res = await fetch("/api/payment/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: activationCode }),
      });
      const data = await res.json();
      if (data.success) {
        setPro(true);
        setBlocked(false);
        setRemaining(Infinity);
        setShowActivation(false);
      } else {
        setActivateError(data.error || "激活失败");
      }
    } catch {
      setActivateError("激活请求失败，请重试");
    } finally {
      setActivating(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* 使用次数提示 */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          今日剩余次数：
          <span className={remaining <= 1 ? "text-red-500 font-medium" : "text-blue-600 font-medium"}>
            {remaining === Infinity ? "无限" : remaining}
          </span>
        </span>
        {!getUsage().isPro && (
          <a href="#pricing" className="text-blue-600 hover:text-blue-700 font-medium">
            升级Pro解锁无限次 →
          </a>
        )}
      </div>

      <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none text-gray-800 placeholder:text-gray-400"
        />
        <button
          onClick={handleGenerate}
          disabled={!input.trim() || loading || blocked}
          className="mt-3 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all hover:shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {blocked ? (
            <>
              <Lock className="w-5 h-5" />
              今日次数已用完，升级Pro解锁
            </>
          ) : loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              AI创作中...
            </>
          ) : (
            <>
              <RefreshCw className="w-5 h-5" />
              开始生成
            </>
          )}
        </button>
      </div>

      {/* 付费墙弹窗 */}
      {blocked && (
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
          <div className="text-center mb-4">
            <Lock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">今日免费次数已用完</h3>
            <p className="text-gray-600">升级Pro版，享受无限次生成</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <a
              href="https://mianbaoduo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-colors text-center"
            >
              <p className="font-semibold text-gray-900">月付</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">¥29<span className="text-sm font-normal text-gray-400">/月</span></p>
              <p className="text-xs text-gray-500 mt-1">无限次生成</p>
            </a>
            <a
              href="https://mianbaoduo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border-2 border-blue-500 hover:shadow-md transition-all text-center relative"
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">省43%</span>
              <p className="font-semibold text-gray-900">年付</p>
              <p className="text-2xl font-bold text-blue-600 mt-1">¥199<span className="text-sm font-normal text-gray-400">/年</span></p>
              <p className="text-xs text-gray-500 mt-1">≈¥16.6/月</p>
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>✓ 无限次生成</span>
            <span>✓ 高级模板</span>
            <span>✓ 优先速度</span>
          </div>

          {/* 激活码输入 */}
          <div className="border-t border-blue-200 pt-4">
            <button
              onClick={() => setShowActivation(!showActivation)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 mx-auto"
            >
              <Key className="w-4 h-4" />
              已购买？输入激活码
            </button>
            {showActivation && (
              <div className="mt-3 flex gap-2">
                <input
                  value={activationCode}
                  onChange={(e) => setActivationCode(e.target.value)}
                  placeholder="输入激活码"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none"
                />
                <button
                  onClick={handleActivate}
                  disabled={activating || !activationCode.trim()}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
                >
                  {activating ? "激活中..." : "激活"}
                </button>
              </div>
            )}
            {activateError && (
              <p className="text-red-500 text-sm mt-2 text-center">{activateError}</p>
            )}
          </div>
        </div>
      )}

      {result && (
        <div className="relative">
          <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 whitespace-pre-wrap text-gray-800 leading-relaxed">
            {result}
          </div>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
