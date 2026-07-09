import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { ArrowLeft } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (err: any) {
      if (err.code === 'auth/operation-not-allowed') {
        // Fallback pour l'environnement de prototypage (AI Studio)
        console.warn("L'authentification Email/Mot de passe n'est pas activée sur ce projet Firebase. Mode Démo activé.");
        onLogin();
      } else {
        setError("Identifiants incorrects ou compte inexistant.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Veuillez saisir votre adresse e-mail d'abord.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError('');
    } catch (err: any) {
      if (err.code === 'auth/operation-not-allowed') {
        setResetSent(true);
        setError('');
      } else {
        setError("Erreur lors de l'envoi de l'e-mail de réinitialisation.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f5] px-4">
      <div className="max-w-md w-full bg-white p-8 border border-[#e7e2d8] shadow-sm">
        {/* Back button */}
        <a 
          href="/" 
          className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-widest text-slate-500 hover:text-[#ea580c] font-bold mb-6 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Retour au site</span>
        </a>

        <h2 className="text-2xl font-extrabold text-center text-[#181615] mb-2 tracking-tight">Administration</h2>
        <p className="text-center text-xs text-slate-500 mb-6">Connectez-vous pour gérer votre portfolio</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 mb-4 text-xs border border-red-100 rounded-none">
            {error}
          </div>
        )}
        
        {resetSent && (
          <div className="bg-emerald-50 text-emerald-700 p-3 mb-4 text-xs border border-emerald-100 rounded-none">
            Un e-mail de réinitialisation a été envoyé à {email}.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
              placeholder="elfridw4@gmail.com"
            />
          </div>
          
          <div className="space-y-1.5">
            <label className="font-sans font-extrabold text-[10px] text-slate-700 uppercase tracking-widest block">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#faf8f5] border border-[#e7e2d8] focus:border-[#181615] focus:ring-0 rounded-none py-3 px-4 text-xs text-slate-800 transition-all focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full font-sans font-extrabold text-xs uppercase tracking-widest py-3 px-8 rounded-none bg-[#181615] hover:bg-brand-accent disabled:bg-slate-300 text-white transition-all shadow-md flex items-center justify-center cursor-pointer focus:outline-none"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={handleResetPassword}
            className="text-[11px] text-slate-500 hover:text-[#181615] underline underline-offset-2 transition-colors"
          >
            Mot de passe oublié ?
          </button>
        </div>
      </div>
    </div>
  );
}
