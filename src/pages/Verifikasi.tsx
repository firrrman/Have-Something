import React, { useState } from "react";

export default function Verifikasi() {
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState("input");
  const [showFunnyMessage, setShowFunnyMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const funnyMessages = [
    "Wah, namanya bukan Dian Anggraini nih! 😅 Mungkin lagi nyamar ya?",
    "Ups! Sepertinya ada yang salah ketik... atau memang bukan orangnya? 🤔",
    "Hmm, ini bukan Dian Anggraini! Jangan-jangan ini adalah penyamaran superhero? 🦸‍♀️",
    "Maaf, tapi nama ini tidak cocok! Apakah Anda yakin bukan alien yang menyamar? 👽",
    "Eits! Bukan Dian Anggraini nih! Mungkin lagi main petak umpet nama? 🙈",
    "Waduh, salah nama! Jangan-jangan ini adalah nama samaran mata-mata? 🕵️‍♀️",
    "Oops! Nama tidak match! Mungkin sedang berubah identitas seperti di film action? 🎬",
  ];

  const handleSubmit = async (
    e: React.FormEvent | React.KeyboardEvent | React.MouseEvent
  ) => {
    e.preventDefault();

    if (!name.trim()) return;

    setIsLoading(true);

    // Simulate loading for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (name.trim().toLowerCase() === "dian anggraini") {
      setCurrentPage("success");
    } else {
      setShowFunnyMessage(true);
      setTimeout(() => setShowFunnyMessage(false), 5000);
    }

    setIsLoading(false);
  };

  const getRandomFunnyMessage = () => {
    return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  };

  const resetForm = () => {
    setName("");
    setCurrentPage("input");
    setShowFunnyMessage(false);
  };

  function toSupprise() {
    window.location.href = "/index";
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200">
        {/* Input Page */}
        {currentPage === "input" && (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#ec008c] to-[#fc6767] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-3xl">🔐</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Verifikasi Nama
              </h1>
              <p className="text-gray-600 text-lg">
                Masukkan nama Anda untuk melanjutkan
              </p>
            </div>

            <div className="space-y-6">
              <div className="text-left">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda..."
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSubmit(e);
                      }
                    }}
                    disabled={isLoading}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500">👤</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !name.trim()}
                className="w-full cursor-pointer bg-gradient-to-r from-[#ec008c] to-[#fc6767] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#ec008c]  hover:to-[#fc6767] transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Memverifikasi...
                  </div>
                ) : (
                  "Verifikasi Nama"
                )}
              </button>
            </div>

            {/* Funny Message */}
            {showFunnyMessage && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <div className="text-red-700 text-sm flex items-center">
                  <span className="text-2xl mr-2">🎭</span>
                  <span>{getRandomFunnyMessage()}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Success Page */}
        {currentPage === "success" && (
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <span className="text-4xl">✅</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Selamat Datang!
              </h1>
              <p className="text-gray-600 text-lg">
                Hai{" "}
                <span className="font-semibold text-pink-400">
                  Dian Anggraini
                </span>
                , verifikasi berhasil!
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🎉 Verifikasi Berhasil
              </h2>

              <div className="space-y-4">
                <button
                  onClick={toSupprise}
                  className="w-full bg-gradient-to-r from-[#ec008c] to-[#fc6767] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#ec008c]  hover:to-[#fc6767] cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Lanjut Ke Halaman Selanjutnya
                </button>

                <button
                  onClick={resetForm}
                  className="w-full bg-gradient-to-r from-gray-500 cursor-pointer to-gray-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
