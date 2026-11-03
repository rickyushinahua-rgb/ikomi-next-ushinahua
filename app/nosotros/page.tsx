import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";
import SectionTitle from "../../components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros | IKOMI PERÚ",
  description:
    "Conoce la actividad de IKOMI PERÚ y los valores que orientan su trabajo con repuestos para camiones y buses.",
};

const values = [
  {
    title: "Respeto",
    description: "Valorar a las personas en el trato con clientes y colaboradores.",
  },
  {
    title: "Compromiso",
    description: "Asumir cada tarea con responsabilidad y dedicación.",
  },
  {
    title: "Superación",
    description: "Buscar nuevos retos y maneras de mejorar continuamente.",
  },
  {
    title: "Adaptabilidad",
    description: "Estar abiertos a nuevas ideas y herramientas para avanzar.",
  },
];

const moments = [
  {
    title: "Personas",
    description: "Colaboración en un espacio de almacenamiento.",
    src: "https://images.pexels.com/photos/4480986/pexels-photo-4480986.jpeg",
    alt: "Trabajadores conversando en un almacén de suministros",
  },
  {
    title: "Almacén",
    description: "Estanterías organizadas en un almacén.",
    src: "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg",
    alt: "Estanterías con cajas y suministros en un almacén",
  },
  {
    title: "Distribución",
    description: "Camiones junto a un centro de distribución.",
    src: "https://images.pexels.com/photos/16663692/pexels-photo-16663692.jpeg",
    alt: "Camiones estacionados frente a un centro de distribución",
  },
];

export default function NosotrosPage() {
  return (
    <main className="flex-1">
      <Hero
        eyebrow="Conoce a IKOMI PERÚ"
        title="Detrás de cada repuesto hay personas en movimiento"
        description={
          "Nos dedicamos a la importación y comercialización de repuestos " +
          "para camiones y buses. Conoce los principios que orientan nuestra forma de trabajar."
        }
        imageSrc="https://images.pexels.com/photos/4277794/pexels-photo-4277794.jpeg"
        imageAlt="Pasillo de un almacén con estanterías de suministros"
      />

      <section className="bg-white px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionTitle
            subtitle="Nosotros"
            title="Una actividad ligada al transporte"
          />
          <div className="space-y-4 leading-relaxed text-dark/80">
            <p>
              IKOMI PERÚ presenta una oferta de repuestos para camiones y
              buses. El catálogo de referencia abarca líneas como motor,
              embrague, frenos y transmisión.
            </p>
            <p>
              Esta página reúne su actividad y los valores publicados en su
              sitio corporativo, sin atribuirle cifras, instalaciones ni
              fotografías propias que no hayan sido verificadas aquí.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Nuestros valores"
            title="Principios que orientan nuestro trabajo"
            align="center"
            variant="light"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description }) => (
              <article
                key={title}
                className={[
                  "rounded-2xl border border-primary/10 bg-white p-6 shadow-sm",
                  "transition-[transform,box-shadow] duration-200 hover:-translate-y-1",
                  "hover:shadow-lg motion-reduce:transform-none",
                ].join(" ")}
              >
                <span className="mb-5 block h-1 w-12 rounded-full bg-secondary" />
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/80">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            subtitle="Personas y logística"
            title="Una mirada ilustrativa al sector de repuestos"
          />
          <p className="mt-5 max-w-3xl leading-relaxed text-dark/80">
            Las siguientes imágenes son ilustrativas: muestran actividades
            relacionadas con equipos, almacenamiento y distribución, pero no
            pertenecen a IKOMI PERÚ.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {moments.map(({ title, description, src, alt }) => (
              <article
                key={title}
                className={[
                  "overflow-hidden rounded-2xl border border-primary/10 bg-background",
                  "shadow-sm transition-shadow duration-200 hover:shadow-lg",
                ].join(" ")}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark/80">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-14 text-white sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              Hablemos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              ¿Buscas un repuesto para tu unidad?
            </h2>
            <p className="mt-3 max-w-xl text-white/85">
              Cuéntanos qué necesitas y conoce nuestras opciones de contacto.
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
