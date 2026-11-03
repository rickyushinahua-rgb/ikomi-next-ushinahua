import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";

export const metadata: Metadata = {
  title: "Inicio | IKOMI PERÚ",
  description:
    "Conoce IKOMI PERÚ y su actividad de comercialización de repuestos para camiones y buses.",
};

const areas = [
  {
    title: "Motor",
    description: "Piezas relacionadas con el funcionamiento del motor.",
  },
  {
    title: "Frenos",
    description: "Componentes para el sistema de frenado de cada unidad.",
  },
  {
    title: "Embrague",
    description: "Repuestos para el sistema de transmisión de movimiento.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Hero
        eyebrow="IKOMI PERÚ · Repuestos automotrices"
        title="Repuestos para camiones y buses"
        description="Conoce una propuesta enfocada en las piezas que acompañan al transporte en movimiento."
        imageSrc="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
        imageAlt="Camiones de carga circulando por una carretera rodeada de árboles"
        actions={[
          { label: "Conoce nuestros productos", href: "/productos" },
          { label: "Contáctanos", href: "/contacto", variant: "outline" },
        ]}
      />

      <section className="bg-white px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              subtitle="Quiénes somos"
              title="Una propuesta para el transporte que sigue adelante"
            />
            <p className="mt-6 max-w-xl leading-relaxed text-dark/80">
              IKOMI PERÚ se dedica a la importación y comercialización de
              repuestos para camiones y buses. Su propuesta reúne diferentes
              líneas de piezas para quienes mantienen sus unidades en marcha.
            </p>
            <Link
              href="/nosotros"
              className={[
                "mt-7 inline-flex min-h-11 items-center font-semibold text-primary",
                "underline-offset-4 transition-colors hover:text-secondary",
                "hover:underline focus-visible:rounded focus-visible:outline-2",
                "focus-visible:outline-offset-4 focus-visible:outline-secondary",
              ].join(" ")}
            >
              Conoce a IKOMI PERÚ →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="https://images.pexels.com/photos/7565164/pexels-photo-7565164.jpeg"
              alt="Turbocompresor sobre una mesa de trabajo en un taller"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Líneas de repuestos"
            title="Piezas para diferentes sistemas del vehículo"
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {areas.map(({ title, description }) => (
              <article
                key={title}
                className={[
                  "rounded-2xl border border-primary/10 bg-white p-7 shadow-sm",
                  "transition-[transform,box-shadow] duration-200 hover:-translate-y-1",
                  "hover:shadow-lg motion-reduce:transform-none",
                ].join(" ")}
              >
                <span className="mb-5 block h-1 w-12 rounded-full bg-secondary" />
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 leading-relaxed text-dark/80">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-dark/70">
            Fotografías ilustrativas de Pexels; no muestran instalaciones ni
            productos de IKOMI PERÚ.
          </p>
        </div>
      </section>
    </main>
  );
}
