import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actions?: HeroAction[];
};

export default function Hero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  actions = [],
}: HeroProps) {
  return (
    <section className="overflow-hidden bg-primary text-white">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:py-24 lg:pr-16">
          {eyebrow && (
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-white/80">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {description}
          </p>
          {actions.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-4">
              {actions.map(({ label, href, variant = "primary" }) => (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "inline-flex min-h-12 items-center justify-center rounded-lg px-6 py-3",
                    "text-sm font-semibold transition-colors focus-visible:outline-2",
                    "focus-visible:outline-offset-4 focus-visible:outline-white",
                    variant === "primary"
                      ? "bg-white text-primary hover:bg-background"
                      : "border border-white/70 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative min-h-80 sm:min-h-96 lg:min-h-[34rem]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            preload
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
