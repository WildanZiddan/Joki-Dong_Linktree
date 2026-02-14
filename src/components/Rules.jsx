import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Rules = ({ rules }) => (
  <div className="w-full max-w-[30rem] bg-[#0c161c]/50 border border-teal-900/20 rounded-2xl p-6 backdrop-blur-md">
    <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4 tracking-[0.1em]">Rules :</h2>
    <ul className="space-y-3 text-sm">
      {rules.map((rule, i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
          <span className="text-zinc-400">{rule}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Rules;