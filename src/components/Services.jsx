import React from 'react';

const Services = ({ items }) => (
  <div className="grid grid-cols-2 gap-3 w-120 mb-8">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 p-3 rounded-lg text-xs hover:border-blue-500/50 transition-colors">
        <span className="text-blue-400">{item.icon}</span>
        {item.name}
      </div>
    ))}
  </div>
);

export default Services;