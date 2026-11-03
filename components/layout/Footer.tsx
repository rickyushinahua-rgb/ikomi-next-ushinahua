import Link from "next/link";
import { cacheLife } from "next/cache";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contáctenos" },
] as const;

async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-10 md:grid-cols-2">
        <div>
          <p className="text-xl font-bold tracking-tight">IKOMI PERÚ</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
            Un espacio para conocer la propuesta de IKOMI PERÚ en repuestos
            automotrices. Sitio corporativo en desarrollo.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página" className="md:justify-self-end">
          <h2 className="text-base font-semibold">Explorar</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/80 underline-offset-4 hover:text-white hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/20 px-5 py-5 text-center text-xs text-white/80 sm:px-10">
        © {year} IKOMI PERÚ. Todos los derechos reservados.
      </div>
    </footer>
  );
}
