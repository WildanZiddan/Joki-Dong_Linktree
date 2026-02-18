import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Tag } from 'lucide-react';

const PriceList = ({ data }) => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full mb-8">
      <div className="flex items-center gap-2 mb-4 px-1">
        <Tag size={18} className="text-teal-400" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Estimasi Biaya :</h2>
      </div>

      <div className="space-y-3">
        {data.map((category, idx) => (
          <div key={idx} className="border border-teal-900/30 rounded-2xl overflow-hidden bg-zinc-800/10 backdrop-blur-sm">
            <button 
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-teal-500/5 transition-colors"
            >
              <span className="font-medium text-zinc-200">{category.title}</span>
              {openIdx === idx ? <ChevronUp size={18} className="text-teal-400" /> : <ChevronDown size={18} className="text-zinc-500" />}
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-4 space-y-3 border-t border-teal-900/10">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-zinc-400">{item.label}</span>
                    <span className="text-teal-400 font-mono font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-4 text-[10px] text-zinc-500 italic text-center px-4">
        *Harga final ditentukan setelah diskusi detail tugas & deadline.
      </p>
    </div>
  );
};

export default PriceList;