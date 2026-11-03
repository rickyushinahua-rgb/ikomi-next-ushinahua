export default function Home() {
  return (
    <main className="flex flex-1 items-center px-5 py-12 sm:px-10">
      <section className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="h-2 bg-secondary" aria-hidden="true" />
        <div className="px-7 py-16 sm:px-12 sm:py-20 lg:px-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Repuestos automotrices
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight text-primary sm:text-6xl">
            IKOMI PERÚ
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark sm:text-xl">
            Una nueva experiencia para conocer nuestra propuesta en repuestos
            automotrices está en camino.
          </p>
          <p className="mt-10 border-l-4 border-secondary pl-4 text-sm font-medium text-dark">
            Sitio corporativo en preparación
          </p>
        </div>
      </section>
    </main>
  );
}
