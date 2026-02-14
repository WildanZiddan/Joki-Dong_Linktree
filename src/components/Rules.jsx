import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Rules = ({ rules }) => (
  <div className="w-full max-w-[30rem] bg-slate-800/40 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm">
    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 tracking-[0.1em]">Rules :</h2>
    <ul className="space-y-3 text-sm">
      {rules.map((rule, i) => (
        <li key={i} className="flex gap-3">
          <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-slate-300">{rule}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Rules;