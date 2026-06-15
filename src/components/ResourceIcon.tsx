type IconKey = "globe" | "gavel" | "scroll";

export default function ResourceIcon({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const paths: Record<IconKey, React.ReactNode> = {
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.4 3.9 5.6 3.9 9s-1.4 6.6-3.9 9c-2.5-2.4-3.9-5.6-3.9-9S9.5 5.4 12 3Z" />
      </>
    ),
    gavel: (
      <>
        <path d="m14 5 5 5" />
        <path d="m9.5 9.5 5 5" />
        <path d="M16.5 3 21 7.5l-2.3 2.3-4.5-4.5L16.5 3Z" />
        <path d="m12 7-7 7 4.5 4.5 7-7" />
        <path d="M4 21h9" />
      </>
    ),
    scroll: (
      <>
        <path d="M8 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8" />
        <path d="M8 3a2 2 0 0 0-2 2v12a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-2h4" />
        <path d="M10 8h6" />
        <path d="M10 12h6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[(icon as IconKey) in paths ? (icon as IconKey) : "globe"]}
    </svg>
  );
}
