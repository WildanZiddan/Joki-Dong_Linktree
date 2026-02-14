import React from 'react';
import { Code, Layout, Image as ImageIcon, FileText } from 'lucide-react';
import Profile from './components/Profile';
import Services from './components/Services';
import WhatsAppCTA from './components/WhatsAppCTA';
import Rules from './components/Rules';
import Footer from './components/Footer'

const App = () => {
  const whatsappConfig = {
    number: "6287776198644",
    message: "Halo Joki Dong! Mau tanya jasa joki nih..."
  };

  const serviceData = [
    { icon: <Code size={20}/>, name: "Web & Apps (Desktop/Mobile)" },
    { icon: <Layout size={20}/>, name: "UI/UX" },
    { icon: <ImageIcon size={20}/>, name: "Design & Poster" },
    { icon: <FileText size={20}/>, name: "Office (PPT, Word, Excel)" }
  ];

  const rulesData = [
    "Detail & Deadline tugas/project wajib jelas di awal",
    "DP minimal 50% untuk mulai pengerjaan",
    "First Come, First Serve",
    "Revisi maksimal 2x (Minor), Lebih dari itu = tambahan biaya",
    "Penyerehan file dikirim setelah pelunasan 100%",
    "No Rush Tanpa Fee Tambahan"
  ];

  return (
    <div className="min-h-screen bg-[#091216] text-zinc-200 font-sans selection:bg-teal-500/30">
      <div className="max-w-md mx-auto px-6 py-12 flex flex-col items-center">
        
        <Profile 
          title="Joki Dong" 
          subtitle="Solusi Cepat Tugas & Project 🚀" 
        />

        <Services items={serviceData} />

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