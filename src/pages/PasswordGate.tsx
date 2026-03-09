import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin") {
      localStorage.setItem("tc_auth", "tc_authenticated");
      navigate("/dashboard");
    } else {
      alert("Senha incorreta");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full tech-card p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold">Acesso Restrito</h1>
          <p className="text-gray-500 text-sm">Digite a senha para acessar o dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Entrar
          </button>
        </form>
      </motion.div>
    </div>
  );
}
