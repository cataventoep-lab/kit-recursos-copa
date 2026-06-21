import Link from "next/link";

export default function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 bg-white px-4 py-3 md:hidden"
      style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.12)" }}
      role="complementary"
      aria-label="Compra rápida"
    >
      <div className="shrink-0">
        <p className="text-[#4a4a4a] line-through" style={{ fontSize: "0.7rem" }}>
          De R$ [X]
        </p>
        <p
          className="leading-none text-[#1A6B3A]"
          style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
        >
          R$ [Y]
        </p>
      </div>
      <Link
        href="#preco"
        className="flex flex-1 items-center justify-center rounded-full bg-[#F5C400] py-3 text-[#145530] transition-transform active:scale-95"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.95rem",
          boxShadow: "0 4px 0 #d4a900",
        }}
        aria-label="Quero o Kit agora"
      >
        QUERO O KIT →
      </Link>
    </div>
  );
}
