import Link from "next/link";
import TarjetaFlor from "@/components/TarjetaFlor";
import { prisma } from "@/lib/prisma";

type Props = {
  searchParams: Promise<{
    categoria?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const { categoria } = await searchParams;

  // Obtener las categorías activas de PostgreSQL
  const categoriasBD = await prisma.categoria.findMany({
    where: {
      activa: true,
    },
    select: {
      nombre: true,
    },
  });

  // Comprobar si la categoría de la URL existe
  const categoriaValida = categoriasBD.find(
    (cat) =>
      cat.nombre.toLowerCase() === categoria?.toLowerCase()
  )?.nombre;

  return (
    <main className="min-h-screen bg-white">

      {/* BANNER PRINCIPAL */}
      {!categoriaValida && (
        <section className="mx-auto max-w-7xl px-6 pt-8">

          <div className="flex min-h-[300px] flex-col justify-center rounded-2xl bg-green-50 px-8 py-12 md:px-16">

            <div className="max-w-xl">

              <h1 className="mb-4 text-4xl font-bold tracking-tight text-green-950 md:text-5xl">
                Flores y plantas
                <br />
                para cada ocasión
              </h1>

              <p className="mb-7 text-base text-gray-600 md:text-lg">
                Ramos, plantas, arreglos y regalos especiales.
              </p>

              <Link
                href="#catalogo"
                className="inline-block rounded-lg bg-green-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-800"
              >
                Ver catálogo
              </Link>

            </div>

          </div>

        </section>
      )}

      {/* CATÁLOGO DE PRODUCTOS */}
      <section
        id="catalogo"
        className="mx-auto max-w-7xl px-6 py-12"
      >

        <div className="mb-8 flex items-center justify-between gap-4">

          <h2 className="text-2xl font-semibold text-green-950 md:text-3xl">
            {categoriaValida
              ? categoriaValida
              : "Productos destacados"}
          </h2>

          {categoriaValida && (
            <Link
              href="/"
              className="text-sm font-medium text-green-800 hover:underline"
            >
              Ver todos
            </Link>
          )}

        </div>

        {/* Reutilizamos el componente existente */}
        <TarjetaFlor
          {...(categoriaValida
            ? { categoria: categoriaValida }
            : {})}
        />

      </section>

    </main>
  );
}