type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
