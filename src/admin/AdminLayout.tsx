import React, { useState, useEffect } from 'react';
import { LogOut, Home, Briefcase, FileText, Settings, MessageSquare } from 'lucide-react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import Dashboard from './Dashboard';
import ProjectsAdmin from './ProjectsAdmin';
import ContentAdmin from './ContentAdmin';
import MessagesAdmin from './MessagesAdmin';

export default function AdminLayout({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleLogout = async () => {
    await signOut(auth);
    onLogout();
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <ProjectsAdmin />;
      case 'content': return <ContentAdmin />;
      case 'messages': return <MessagesAdmin />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans text-gray-900">
      {/* Sidebar Mobile */}
      <div className="md:hidden bg-[#181615] text-white p-4 flex justify-between items-center">
        <span className="font-bold tracking-widest uppercase text-sm">Portfolio Admin</span>
        <button onClick={handleLogout} className="text-gray-400 hover:text-white">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
      
      <div className="md:hidden bg-gray-900 text-white flex overflow-x-auto text-xs font-medium border-t border-gray-800">
        <button onClick={() => setActiveTab('dashboard')} className={`p-4 flex items-center space-x-2 ${activeTab === 'dashboard' ? 'bg-gray-800' : ''}`}>
          <Home className="w-4 h-4" /> <span>Accueil</span>
        </button>
        <button onClick={() => setActiveTab('projects')} className={`p-4 flex items-center space-x-2 ${activeTab === 'projects' ? 'bg-gray-800' : ''}`}>
          <Briefcase className="w-4 h-4" /> <span>Projets</span>
        </button>
        <button onClick={() => setActiveTab('content')} className={`p-4 flex items-center space-x-2 ${activeTab === 'content' ? 'bg-gray-800' : ''}`}>
          <FileText className="w-4 h-4" /> <span>Contenus</span>
        </button>
        <button onClick={() => setActiveTab('messages')} className={`p-4 flex items-center space-x-2 ${activeTab === 'messages' ? 'bg-gray-800' : ''}`}>
          <MessageSquare className="w-4 h-4" /> <span>Messages</span>
        </button>
      </div>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-[#181615] text-white min-h-screen">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold tracking-widest uppercase text-brand-accent">Admin Panel</h2>
          <p className="text-xs text-gray-400 mt-1">Espace de gestion</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')} 
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-none transition-colors ${activeTab === 'dashboard' ? 'bg-brand-accent text-white font-bold' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <Home className="w-4 h-4" />
            <span>Tableau de bord</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-none transition-colors ${activeTab === 'projects' ? 'bg-brand-accent text-white font-bold' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Mes Projets</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('content')} 
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-none transition-colors ${activeTab === 'content' ? 'bg-brand-accent text-white font-bold' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <FileText className="w-4 h-4" />
            <span>Textes & Sections</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('messages')} 
            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-none transition-colors ${activeTab === 'messages' ? 'bg-brand-accent text-white font-bold' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Boîte de réception</span>
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
