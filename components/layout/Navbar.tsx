"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/marcas", label: "Marcas" },
  { href: "/contacto", label: "Contáctenos" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return <NavbarContent key={pathname} pathname={pathname} />;
}

function NavbarContent({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  }

  return (
    <header className="border-b border-primary/10 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-10">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-xl font-bold tracking-tight text-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
          IKOMI PERÚ
        </Link>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`border-b-2 py-2 text-sm font-medium transition-colors focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${
                    isActive(href)
                      ? "border-secondary text-primary"
                      : "border-transparent text-dark hover:border-secondary hover:text-primary"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden"
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      <nav
        id="menu-movil"
        aria-label="Navegación móvil"
        className={`${menuOpen ? "block" : "hidden"} border-t border-primary/10 bg-white px-5 pb-4 pt-2 lg:hidden sm:px-10`}
      >
        <ul className="mx-auto max-w-7xl">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-secondary ${
                  isActive(href)
                    ? "bg-background text-primary"
                    : "text-dark hover:bg-background hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
