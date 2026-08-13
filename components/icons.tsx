type IconProps = {
  size?: number;
};

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "#B4846C",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ScalesIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M20 6v28" />
      <path d="M8 12h24" />
      <path d="M8 12 3 24h10z" />
      <path d="M32 12l-5 12h10z" />
      <path d="M12 34h16" />
    </svg>
  );
}

export function GavelIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="14" y="5" width="16" height="9" transform="rotate(45 14 5)" />
      <path d="M13 17 5 25" />
      <path d="M8 34h18" />
    </svg>
  );
}

export function BuildingIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M6 34V16l10-7 10 7v18" />
      <path d="M26 34V21h8v13" />
      <path d="M6 34h32" />
      <path d="M14 34v-8h4v8" />
    </svg>
  );
}

export function FamilyIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="14" cy="13" r="5" />
      <circle cx="27" cy="15" r="4" />
      <path d="M5 33c0-5 4-9 9-9s9 4 9 9" />
      <path d="M23 27c1-2 2.5-3 4-3 4 0 7 3.5 7 9" />
    </svg>
  );
}

export function ClockIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 11v9l6 4" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="6" y="12" width="28" height="22" />
      <path d="M14 12V7h12v5" />
      <path d="M6 21h28" />
    </svg>
  );
}

export function DocumentIcon({ size = 40 }: IconProps) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="9" y="8" width="22" height="28" />
      <path d="M15 16h10" />
      <path d="M15 22h10" />
      <path d="M15 28h6" />
    </svg>
  );
}
