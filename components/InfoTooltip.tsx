
import React, { useState } from 'react';

interface InfoTooltipProps {
  description: string;
  source: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ description, source }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block ml-1 align-middle">
      <button 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="text-gray-400 hover:text-teal-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      
      {show && (
        <div className="absolute z-[100] bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-100 shadow-2xl rounded-xl text-left">
          <p className="text-xs text-gray-700 font-medium leading-relaxed">{description}</p>
          <div className="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Fuente:</span>
            <span className="text-[10px] font-bold text-teal-600">{source}</span>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
