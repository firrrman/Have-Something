import { useEffect, useState } from "react";

type TextElement = {
  char: string;
  delay: number;
  key: number;
};

export default function Index() {
  const [textElements, setTextElements] = useState<TextElement[]>([]);

  useEffect(() => {
    const text = `I Have Something`.split("");
    const elements = text.map((char, index) => ({
      char: char === " " ? "\u00A0" : char, // Non-breaking space for spaces
      delay: Math.random() * 3,
      key: index,
    }));
    setTextElements(elements);
  }, []);

  return (
    <div className="h-lvh bg-black flex flex-col justify-center gap-10 md:gap-20 items-center px-5">
      {/* Title with typing animation */}
      <h1
        className="lg:text-5xl sm:text-3xl text-[#AAA] flex flex-wrap justify-center gap-2 relative shadow-2xl"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          textShadow: "0px 0px 20px white",
        }}
      >
        {textElements.map((element) => (
          <span
            key={element.key}
            className="opacity-0 animate-pulse"
            style={{
              animation: `fadeIn 1s ease forwards`,
              animationDelay: `${element.delay}s`,
              width: element.char === "\u00A0" ? "1rem" : "auto",
              letterSpacing: "0.2em",
            }}
          >
            {element.char}
          </span>
        ))}
      </h1>

      {/* Button */}
      <div>
        <a
          href="/flower"
          className="
            border-none w-60 h-20 rounded-3xl 
            flex justify-center items-center gap-3 
            bg-gray-800 cursor-pointer 
            transition-all duration-500 ease-in-out
            hover:bg-gradient-to-t hover:from-[#ec008c] hover:to-[#fc6767]
            hover:shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#fc6767]
            hover:-translate-y-0.5
            group
          "
        >
          <svg
            height="24"
            width="24"
            fill="#AAAAAA"
            viewBox="0 0 24 24"
            className="transition-all duration-700 group-hover:fill-white group-hover:scale-110"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>

          <span className="font-semibold text-gray-400 text-base transition-colors duration-500 group-hover:text-white">
            Open
          </span>
        </a>
      </div>

      {/* Custom keyframes for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
