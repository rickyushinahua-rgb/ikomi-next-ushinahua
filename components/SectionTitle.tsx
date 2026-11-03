type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  variant = "dark",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {subtitle && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            variant === "light" ? "text-white/80" : "text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          variant === "light" ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
