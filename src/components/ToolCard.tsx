"use client";

import Link from "next/link";
import { tools } from "@/lib/tools";

export default function ToolCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {tools.map((tool) => (
        <Link key={tool.id} href={tool.href}>
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity`}
            />
            <div className="text-4xl mb-3">{tool.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500">{tool.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
