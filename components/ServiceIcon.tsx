export type ServiceIconName = "ventas" | "asesoria" | "delivery" | "productos";

type ServiceIconProps = {
  name: ServiceIconName;
};

export default function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "ventas" && (
        <>
          <path d="M3 4h2l2 11h11l2-8H6" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="17" cy="19" r="1" />
        </>
      )}
      {name === "asesoria" && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4 4M8.5 10.5h4" />
        </>
      )}
      {name === "delivery" && (
        <>
          <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </>
      )}
      {name === "productos" && (
        <>
          <path d="M3 5h8v8H3zM13 5h8v8h-8zM8 15h8v6H8z" />
          <path d="M7 5v3M17 5v3M12 15v2" />
        </>
      )}
    </svg>
  );
}
