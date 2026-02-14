import React from 'react';

const Profile = ({ title, subtitle }) => (
  <div className="flex flex-col items-center">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 overflow-hidden">
        <img 
          src="/jd-logo.png" 
          alt="Joki Dong Logo" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
    <h1 className="mt-4 text-2xl font-bold tracking-tight">{title}</h1>
    <p className="text-slate-400 text-sm mb-8">{subtitle}</p>
  </div>
);

export default Profile;