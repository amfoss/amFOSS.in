"use client";
import React, { useState } from "react";
import { FiX, FiKey } from "react-icons/fi";
import { getStoredPat, setStoredPat } from "@/lib/githubApi";

export default function PatModal({ isOpen, onClose, onSave }) {
  const [token, setToken] = useState(getStoredPat());
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setStoredPat(token.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onSave(token.trim());
      onClose();
    }, 500);
  };

  const handleClear = () => {
    setToken("");
    setStoredPat("");
    onSave("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-[#181818] border border-white/10 max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
        >
          <FiX size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <FiKey size={20} className="text-[#D0A730]" />
          <h3 className="text-white font-semibold tracking-widest uppercase text-sm">
            GitHub Personal Access Token
          </h3>
        </div>

        <p className="text-white/40 text-sm mb-6 leading-relaxed">
          Connect a PAT to unlock 5,000 API requests/hour instead of 60. Your token is stored
          locally in your browser only.
        </p>

        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
              Token
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
              className="w-full bg-transparent border-b border-white/20 focus:border-[#D0A730] outline-none text-white placeholder-white/20 py-2 text-sm transition-colors"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            {getStoredPat() && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-white/30 hover:text-red-400 transition-colors tracking-widest uppercase"
              >
                Clear Token
              </button>
            )}
            <div className="flex items-center gap-4 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-white/30 hover:text-white transition-colors tracking-widest uppercase"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#D0A730] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors"
              >
                {saved ? "Saved!" : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
