import React from 'react';
import { Code, Layout, Image as ImageIcon, FileText, Puzzle } from 'lucide-react';
import Profile from './components/Profile';
import Services from './components/Services';
import WhatsAppCTA from './components/WhatsAppCTA';
import Rules from './components/Rules';
import PriceList from './components/PriceList';
import Footer from './components/Footer'

const App = () => {
  const whatsappConfig = {
    number: "6287776198644",
    message: "Halo Joki Dong! Mau tanya jasa joki nih..."
  };

  const serviceData = [
    { icon: <Code size={20}/>, name: "Coding / Development" },
    { icon: <FileText size={20}/>, name: "Microsoft Office" },
    { icon: <ImageIcon size={20}/>, name: "Design & UI/UX" },
    { icon: <Puzzle size={20}/>, name: "System Analysis" }
  ];

  const rulesData = [
    "Detail & Deadline tugas/project wajib jelas di awal",
    "DP minimal 50% untuk mulai pengerjaan",
    "First Come, First Serve",
    "Revisi maksimal 2x (Minor), Lebih dari itu = tambahan biaya",
    "Penyerahan file dikirim setelah pelunasan 100%",
    "No Rush Tanpa Fee Tambahan"
  ];

  const priceData = [
    {
      title: "💻 Coding / Development",
      items: [
        { label: "Landing Page", price: "Start from 75k" },
        { label: "Web CRUD", price: "Start from 200k" },
        { label: "Fix Bug / Error", price: "Start from 30k" },
        { label: "Mobile App", price: "Start from 150k" },
        { label: "Desktop App", price: "Start from 150k" }
      ]
    },
    {
      title: "📊 Microsoft Office",
      items: [
        { label: "Word", price: "Start from 5k" },
        { label: "Excel", price: "Start from 20k" },
        { label: "PPT", price: "Start from 2k" },
      ]
    },
    {
      title: "🎨 Design & UI/UX",
      items: [
        { label: "UI/UX (per screen)", price: "Start from 20k" },
        { label: "Poster / Infografis", price: "Start from 10k" },
      ]
    },
    {
      title: "🧩 System Analysis",
      items: [
        { label: "ERD / Flowchart", price: "Start from 30k" },
        { label: "PDM", price: "Start from 50k" },
        { label: "Paket Hemat Analysis", price: "Start from 100k" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#091216] text-zinc-200 font-sans selection:bg-teal-500/30">
      <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        
        <Profile 
          title="Joki Dong" 
          subtitle="Solusi Cepat Tugas & Project 🚀" 
        />

        <Services items={serviceData} />

        <PriceList data={priceData} />

        <WhatsAppCTA 
          phone={whatsappConfig.number} 
          text={whatsappConfig.message} 
        />

        <Rules rules={rulesData} />
        <Footer />
      </div>
    </div>
  );
};

export default App;