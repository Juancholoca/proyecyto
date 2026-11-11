import { CerrarSesion } from "@/lib/CerrarSesion";
import Link from "next/link";

export default function Perfil() {

  // Datos de ejemplo para el diseño
  const usuario = {
    nombre: "Sin especificar",
    apellido: "Sin especificar",
    fechaNacimiento: "Sin especificar",
    correoVinculado: "Sin especificar",
    correo: "Sin especificar",
    direccion: "Sin especificar",
  };

  const datos = [
    { titulo: "Nombre", valor: usuario.nombre },
    { titulo: "Apellido", valor: usuario.apellido },
    {
      titulo: "Fecha de nacimiento",
      valor: usuario.fechaNacimiento,
    },
    {
      titulo: "Correo vinculado",
      valor: usuario.correoVinculado,
    },
    {
      titulo: "Correo electrónico",
      valor: usuario.correo,
    },
    {
      titulo: "Dirección",
      valor: usuario.direccion,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <div className="mb-8">

          <Link
            href="/"
            className="text-sm font-medium text-green-800 hover:underline"
          >
            ← Volver a la tienda
          </Link>

          <h1 className="mt-5 text-3xl font-semibold text-green-950">
            Mi perfil
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Administrá la información de tu cuenta.
          </p>

        </div>

        {/* CONTENEDOR PRINCIPAL */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr]">

          {/* MENÚ LATERAL */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5">

            {/* AVATAR */}
            <div className="flex flex-col items-center border-b border-gray-100 pb-6">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl">
                🌿
              </div>

              <h2 className="mt-3 font-semibold text-green-950">
                Mi cuenta
              </h2>

              <p className="text-xs text-gray-500">
                Perfil de usuario
              </p>

            </div>

            {/* NAVEGACIÓN */}
            <nav className="mt-5 flex flex-col gap-2">

              <div
                aria-current="page"
                className="rounded-lg bg-green-900 px-4 py-3 text-sm font-medium text-white"
              >
                Datos de la cuenta
              </div>

              <Link
                href="/carrito"
                className="rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-green-50"
              >
                Carrito
              </Link>

              <div className="rounded-lg px-4 py-3 text-sm text-gray-400">
                Configuración (próximamente)
              </div>

            </nav>

            {/* CERRAR SESIÓN */}
            <div className="mt-6 border-t border-gray-100 pt-5">

              <form action={CerrarSesion}>
                <button
                  type="submit"
                  className="w-full rounded-lg border border-red-200 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  Cerrar sesión
                </button>
              </form>

            </div>

          </aside>

          {/* DATOS PERSONALES */}
          <section className="rounded-xl border border-gray-200 bg-white p-6 sm:p-10">

            <div className="mb-8 border-b border-gray-100 pb-5">

              <h2 className="text-2xl font-semibold text-green-950">
                Datos de la cuenta
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Información personal de tu perfil.
              </p>

            </div>

            {/* CAMPOS */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

              {datos.map((dato) => (

                <div key={dato.titulo}>

                  <p className="mb-2 text-sm font-medium text-gray-700">
                    {dato.titulo}
                  </p>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-500">
                    {dato.valor}
                  </div>

                </div>

              ))}

            </div>

            {/* EDITAR PERFIL */}
            <div className="mt-10 flex justify-end">

              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-lg bg-green-900 px-6 py-3 text-sm font-medium text-white opacity-60"
              >
                Editar perfil
              </button>

            </div>

            <p className="mt-3 text-right text-xs text-gray-400">
              Edición de datos próximamente.
            </p>

          </section>

        </div>

      </div>

    </main>
  );
}
