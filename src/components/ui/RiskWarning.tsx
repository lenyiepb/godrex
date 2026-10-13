import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { RISK_WARNING } from "@/lib/constants";

export function RiskWarning() {
  return (
    <div className="risk-banner no-print">
      <div className="section-container flex items-start gap-2">
        <AlertTriangle size={14} className="flex-shrink-0 mt-0.5 text-amber-400" />
        <p className="text-xs text-amber-200 leading-relaxed">
          <span className="font-semibold text-amber-100">Risk Warning: </span>
          {RISK_WARNING}{" "}
          <Link href="/legal/risk-disclosure" className="underline hover:text-amber-50 transition-colors">
            Read full risk disclosure
          </Link>
        </p>
      </div>
    </div>
  );
}
