import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";

export const metadata: Metadata = {
  title: "Marcas | IKOMI PERÚ",
  description:
    "Conoce marcas de repuestos para camiones y buses presentadas en el sitio de IKOMI PERÚ.",
};

const brands = [
  "Hyundai Mobis",
  "Mando",
  "Valeo",
  "SKF",
  "Gates",
  "GMB",
  "Sangsin",
  "Hi-Q",
] as const;

export default function MarcasPage() {
  return (
    <main className="flex-1">
      <Hero
        eyebrow="Repuestos para camiones y buses"
        title="Nuestras marcas"
        description="Conoce algunas de las marcas de repuestos que IKOMI PERÚ presenta en su sitio corporativo."
        imageSrc="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
        imageAlt="Camiones de carga circulando por una carretera rodeada de árboles"
      />

      <section className="bg-white px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Marcas de repuestos"
            title="Opciones presentes en la referencia de IKOMI PERÚ"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-dark/80">
            Estas marcas aparecen en el sitio de referencia. Sus nombres se
            muestran en texto para evitar reproducir logotipos no autorizados.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <li
                key={brand}
                className={[
                  "flex min-h-36 items-center justify-center rounded-2xl border",
                  "border-primary/10 bg-background px-6 text-center shadow-sm",
                  "transition-[transform,box-shadow] duration-200 hover:-translate-y-1",
                  "hover:shadow-lg motion-reduce:transform-none",
                ].join(" ")}
              >
                <span className="text-xl font-bold tracking-tight text-primary">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-dark px-5 py-14 text-white sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explora las líneas de repuestos
            </h2>
            <p className="mt-3 text-white/80">
              Conoce más sobre los productos de IKOMI PERÚ.
            </p>
          </div>
          <Link
            href="/productos"
            className={[
              "inline-flex min-h-12 items-center justify-center rounded-lg bg-white",
              "px-6 py-3 text-sm font-semibold text-primary transition-colors",
              "hover:bg-background focus-visible:outline-2",
              "focus-visible:outline-offset-4 focus-visible:outline-white",
            ].join(" ")}
          >
            Ver productos
          </Link>
        </div>
      </section>
    </main>
  );
}
