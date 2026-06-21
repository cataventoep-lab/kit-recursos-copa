import { F } from "@/app/lib/tokens";

export default function TopBar() {
  return (
    <div
      className="bg-[#145530] text-white text-center py-2 px-4"
      role="banner"
      style={{ fontFamily: F.badge, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em" }}
    >
      ⚽ <strong>Exclusivo para Professoras dos Anos Iniciais</strong>
      <span className="opacity-80"> &nbsp;•&nbsp; 1º ao 5º ano</span>
    </div>
  );
}
