import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Mail, Check, Trash2 } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  email: string;
  role: string;
  message: string;
  read: boolean;
  createdAt: any;
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs: Message[] = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(msgs);
      setLoading(false);
    }, (error) => {
      console.error("MessagesAdmin Firestore Error:", error);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const markAsRead = async (id: string, currentRead: boolean) => {
    try {
      await updateDoc(doc(db, 'messages', id), { read: !currentRead });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMessage = async (id: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce message définitivement ?")) {
      try {
        await deleteDoc(doc(db, 'messages', id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8 text-center">
        <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-brand-accent rounded-full mx-auto"></div>
        <p className="text-gray-500 mt-4">Chargement des messages...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Boîte de réception</h1>
        <p className="text-gray-500 mt-2">Consultez les messages reçus depuis le formulaire de contact.</p>
      </header>
      
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="bg-white p-8 text-center border border-gray-200">
            <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Aucun message pour le moment.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`bg-white border ${msg.read ? 'border-gray-200' : 'border-l-4 border-brand-accent shadow-sm'} p-6`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{msg.name}</h3>
                  <div className="flex space-x-3 text-sm mt-1">
                    <a href={`mailto:${msg.email}`} className="text-brand-accent hover:underline">{msg.email}</a>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider">{msg.role}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {msg.createdAt?.toDate ? new Date(msg.createdAt.toDate()).toLocaleDateString('fr-FR', {
                    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                  }) : 'Date inconnue'}
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed mb-4 p-4 bg-gray-50 border border-gray-100">
                {msg.message}
              </p>
              <div className="flex space-x-3">
                <button 
                  onClick={() => markAsRead(msg.id, msg.read)}
                  className={`text-xs uppercase tracking-wider font-bold py-2 px-4 flex items-center space-x-2 transition-colors ${msg.read ? 'text-gray-500 border border-gray-200 hover:bg-gray-50' : 'bg-[#181615] text-white hover:bg-gray-800'}`}
                >
                  <Check className="w-4 h-4" />
                  <span>{msg.read ? 'Marquer comme non lu' : 'Marquer comme lu'}</span>
                </button>
                <button 
                  onClick={() => deleteMessage(msg.id)}
                  className="text-xs uppercase tracking-wider font-bold py-2 px-4 flex items-center space-x-2 text-red-600 border border-red-100 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Supprimer</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
