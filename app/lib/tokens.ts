export const C = {
  verde:       "#1A6B3A",
  verdeDark:   "#145530",
  verdeLight:  "#e8f5ee",
  amarelo:     "#F5C400",
  amareloD:    "#d4a900",
  azul:        "#0047AB",
  azulLight:   "#dce8ff",
  branco:      "#FAFAF7",
  cinza:       "#F0EFEB",
  texto:       "#1C1C1C",
  textoSuave:  "#4a4a4a",
} as const;

export const F = {
  hero:    "var(--font-hero, 'Bebas Neue', sans-serif)",
  display: "var(--font-display, 'Fredoka', sans-serif)",
  body:    "var(--font-body, 'Nunito', sans-serif)",
  badge:   "var(--font-badge, 'Barlow Condensed', sans-serif)",
} as const;

export const shadow = {
  btnYellow: `0 5px 0 #d4a900, 0 8px 24px rgba(245,196,0,0.35)`,
  btnGreen:  `0 4px 0 #145530, 0 6px 20px rgba(26,107,58,0.30)`,
  card:      `0 2px 12px rgba(0,0,0,0.08)`,
  cardLg:    `0 4px 20px rgba(0,0,0,0.10)`,
} as const;
