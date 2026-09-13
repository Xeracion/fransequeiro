export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 240"
      className={className}
      fill="currentColor"
      aria-label="Fran Sequeiro"
      role="img"
    >
      <text
        x="0"
        y="90"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="800"
        fontSize="100"
        letterSpacing="-2"
      >
        FRAN
      </text>
      <text
        x="0"
        y="200"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="500"
        fontSize="88"
        letterSpacing="2"
      >
        SEQUEIRO
      </text>
    </svg>
  );
}
