"use client";

import { useState } from "react";
import { Loader2, Copy, Check, RefreshCw } from "lucide-react";

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

  const handleGenerate = async () => {
    if (!input.trim() || loading) return;
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

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none text-gray-800 placeholder:text-gray-400"
        />
        <button
          onClick={handleGenerate}
          disabled={!input.trim() || loading}
          className="mt-3 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all hover:shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
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
