import type { Metadata } from "next";
import Link from "next/link";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";
import ServiceIcon, { type ServiceIconName } from "../../components/ServiceIcon";

export const metadata: Metadata = {
  title: "Servicios | IKOMI PERÚ",
  description:
    "Conoce la venta de repuestos, la orientación para elegir piezas y las opciones de recojo o envío de IKOMI PERÚ.",
};

const services: { title: string; description: string; icon: ServiceIconName }[] = [
  {
    title: "Ventas",
    description:
      "Comercialización de repuestos para camiones y buses en distintas líneas del vehículo.",
    icon: "ventas",
  },
  {
    title: "Asesoría",
    description:
      "Orientación para encontrar la pieza según el vehículo, modelo, motor o número de parte.",
    icon: "asesoria",
  },
  {
    title: "Delivery",
    description:
      "Coordinación de recojo en tienda, envíos en Lima o despacho a una agencia para provincias.",
    icon: "delivery",
  },
  {
    title: "Productos",
    description:
      "Líneas de repuestos para sistemas como motor, embrague, frenos y transmisión.",
    icon: "productos",
  },
];

const steps = [
  {
    title: "Cuéntanos qué buscas",
    description:
      "Indica el repuesto y, si lo conoces, el modelo, motor o número de pieza.",
  },
  {
    title: "Consulta las opciones",
    description:
      "IKOMI confirma la disponibilidad y te orienta sobre las alternativas.",
  },
  {
    title: "Coordina la entrega",
    description:
      "Elige recojo o consulta el envío según tu destino y la modalidad disponible.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <Hero
        eyebrow="Soluciones para tu unidad"
        title="Nuestros servicios"
        description="Repuestos para camiones y buses, orientación para elegir la pieza y alternativas de entrega según tu destino."
        imageSrc="https://images.pexels.com/photos/7565164/pexels-photo-7565164.jpeg"
        imageAlt="Turbocompresor sobre una mesa de trabajo en un taller"
      />

      <section className="bg-white px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Qué hacemos"
            title="Acompañamos la búsqueda de tu repuesto"
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ title, description, icon }) => (
              <article
                key={title}
                className={[
                  "rounded-2xl border border-primary/10 bg-background p-7 shadow-sm",
                  "transition-[transform,box-shadow] duration-200 hover:-translate-y-1",
                  "hover:shadow-lg motion-reduce:transform-none sm:p-9",
                ].join(" ")}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white">
                  <ServiceIcon name={icon} />
                </div>
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-dark/80">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Cómo solicitar"
            title="De la consulta a la entrega"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map(({ title, description }, index) => (
              <article
                key={title}
                className="rounded-2xl border border-primary/10 bg-white p-7 shadow-sm"
              >
                <span className="text-sm font-bold tracking-widest text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-dark/80">
                  {description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm leading-relaxed text-dark/70">
            Las opciones y condiciones de envío se confirman según el destino y
            la disponibilidad; esta página no establece plazos ni tarifas.
          </p>
        </div>
      </section>

      <section className="bg-dark px-5 py-14 text-white sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Necesitas encontrar una pieza?
            </h2>
            <p className="mt-3 text-white/80">
              Cuéntanos qué necesitas y consulta las opciones disponibles.
            </p>
          </div>
          <Link
            href="/contacto"
            className={[
              "inline-flex min-h-12 items-center justify-center rounded-lg bg-white",
              "px-6 py-3 text-sm font-semibold text-primary transition-colors",
              "hover:bg-background focus-visible:outline-2",
              "focus-visible:outline-offset-4 focus-visible:outline-white",
            ].join(" ")}
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  );
}
