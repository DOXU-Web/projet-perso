"use client";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Erreur lors de l'envoi");
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full max-w-md mx-auto p-4 bg-black rounded-xl shadow"
    >
      <h2 className="text-xl font-semibold text-center text-purple-500">Inscription à la sortie du jeu</h2>
      <input
        type="email"
        placeholder="Ton adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded text-gray-800"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded transition"
      >
        {loading ? "Envoi en cours..." : "M'inscrire"}
      </button>
      {message && <p className="text-sm text-center text-green-600">{message}</p>}
    </form>
  );
}
