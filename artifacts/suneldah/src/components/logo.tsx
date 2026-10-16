import type { SVGProps } from "react";

// The Hovina sunburst arch, redrawn as vector lines. Ink and bronze by default.
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  const ink = "#0A2A2F";
  const acc = "#B07A45";
  return (
    <svg viewBox="0 0 100 52" role="img" aria-label="" className="b-mark" {...props}>
      <line x1="21.00" y1="50.00" x2="2.00" y2="50.00" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="21.36" y1="45.46" x2="2.59" y2="42.49" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="22.42" y1="41.04" x2="4.35" y2="35.17" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="24.16" y1="36.83" x2="7.23" y2="28.21" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="26.54" y1="32.95" x2="11.17" y2="21.79" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="29.49" y1="29.49" x2="16.06" y2="16.06" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="32.95" y1="26.54" x2="21.79" y2="11.17" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="36.83" y1="24.16" x2="28.21" y2="7.23" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="41.04" y1="22.42" x2="35.17" y2="4.35" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="45.46" y1="21.36" x2="42.49" y2="2.59" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="50.00" y1="21.00" x2="50.00" y2="2.00" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="54.54" y1="21.36" x2="57.51" y2="2.59" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="58.96" y1="22.42" x2="64.83" y2="4.35" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="63.17" y1="24.16" x2="71.79" y2="7.23" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="67.05" y1="26.54" x2="78.21" y2="11.17" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="70.51" y1="29.49" x2="83.94" y2="16.06" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="73.46" y1="32.95" x2="88.83" y2="21.79" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="75.84" y1="36.83" x2="92.77" y2="28.21" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="77.58" y1="41.04" x2="95.65" y2="35.17" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="78.64" y1="45.46" x2="97.41" y2="42.49" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="79.00" y1="50.00" x2="98.00" y2="50.00" stroke={acc} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M26 50 V40 A24 24 0 0 1 74 40 V50" fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="34" y1="30.11" x2="34" y2="50" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="42" y1="25.37" x2="42" y2="50" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="50" y1="24.00" x2="50" y2="50" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="58" y1="25.37" x2="58" y2="50" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="66" y1="30.11" x2="66" y2="50" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M38 42 L50 30 L62 42" fill="none" stroke={acc} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
