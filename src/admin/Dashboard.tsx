import React, { useState, useEffect } from 'react';
import { Briefcase, MessageSquare, Eye } from 'lucide-react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export default function Dashboard() {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'messages'), where('read', '==', false));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setUnreadCount(querySnapshot.size);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Bonjour, Horacio</h1>
        <p className="text-gray-500 mt-2">Voici le résumé de votre activité sur le portfolio.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Cards */}
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Nouveaux messages</p>
            <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-gray-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Projets publiés</p>
            <p className="text-2xl font-bold text-gray-900">3</p>
          </div>
        </div>

        <div className="bg-white p-6 border border-gray-200 shadow-sm flex items-center space-x-4 cursor-pointer hover:bg-gray-50" onClick={() => window.open('/', '_blank')}>
          <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center text-brand-accent">
            <Eye className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Voir le site public</p>
            <p className="text-sm font-bold text-brand-accent">horaciochinkoun.site</p>
          </div>
        </div>
      </div>

      {/* Guide Rapide */}
      <div className="bg-white border border-gray-200 p-6 md:p-8 mt-8">
        <h2 className="text-xl font-bold mb-4">Que voulez-vous faire ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 bg-gray-50 flex items-start space-x-3">
            <span className="bg-white p-2 border border-gray-200 shadow-sm text-gray-600 font-bold">1</span>
            <div>
              <h3 className="font-bold text-gray-900">Ajouter un nouveau projet</h3>
              <p className="text-sm text-gray-500 mt-1">Allez dans l'onglet "Mes Projets" pour ajouter ou modifier une réalisation de votre portfolio.</p>
            </div>
          </div>
          <div className="p-4 border border-gray-100 bg-gray-50 flex items-start space-x-3">
            <span className="bg-white p-2 border border-gray-200 shadow-sm text-gray-600 font-bold">2</span>
            <div>
              <h3 className="font-bold text-gray-900">Lire vos messages</h3>
              <p className="text-sm text-gray-500 mt-1">Vos clients potentiels vous contactent via le formulaire. Lisez tout dans "Boîte de réception".</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
