export default function Footer() {
  return (
    <footer className="bg-[#145530] px-4 py-8 text-center" style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
      <p>© 2026 Kit Recursos da Copa · Todos os direitos reservados</p>
      <p className="mt-1">
        <a href="#" className="underline underline-offset-2 hover:text-[#F5C400]">Termos de uso</a>
        {" · "}
        <a href="#" className="underline underline-offset-2 hover:text-[#F5C400]">Política de privacidade</a>
        {" · "}
        <a href="#" className="underline underline-offset-2 hover:text-[#F5C400]">Contato</a>
      </p>
    </footer>
  );
}
