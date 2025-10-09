"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { CustomCard } from "../ui/CustomCard";

interface AffiliateLinkBoxProps {
  link: string;
  title: string;
}

export function AffiliateLinkBox({ link, title }: AffiliateLinkBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <CustomCard>
      <h4 className="font-semibold text-[#1c1d1f] mb-2">{title}</h4>
      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
        <input
          type="text"
          value={link}
          readOnly
          className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
        />
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-gray-200 rounded transition-colors"
          title="Copy link"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
    </CustomCard>
  );
}
