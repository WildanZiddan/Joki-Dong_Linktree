import React from 'react';

const Services = ({ items }) => (
  <div className="grid grid-cols-2 gap-3 w-full max-w-[30rem] mb-8">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-center gap-2 bg-zinc-800/50 border border-teal-900/30 p-3 rounded-lg text-xs hover:border-teal-500/50 hover:bg-zinc-800/50 transition-all duration-300 group">
        <span className="text-teal-400">{item.icon}</span>
        {item.name}
      </div>
    ))}
  </div>
);

export default Services;