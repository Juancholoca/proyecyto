import { LoginAuth } from "@/lib/LoginAuth";
import Link from "next/link";

export default function Login() {
  const inputStyle =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700";

  const labelStyle =
    "mb-2 block text-sm font-medium text-gray-700";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8faf8] px-4 py-12">

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">

        {/* ENCABEZADO */}
        <div className="mb-9 text-center">

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-green-950"
          >
            🌿 Floraly
          </Link>

          <h1 className="mt-5 text-2xl font-semibold text-gray-900">
            Iniciar sesión
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Bienvenido de nuevo a Floraly
          </p>

        </div>

        {/* FORMULARIO */}
        <form action={LoginAuth} className="space-y-6">

          {/* CORREO */}
          <div>
            <label htmlFor="email" className={labelStyle}>
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              required
              className={inputStyle}
            />
          </div>

          {/* CONTRASEÑA */}
          <div>
            <label htmlFor="contrasena" className={labelStyle}>
              Contraseña
            </label>

            <input
              id="contrasena"
              type="password"
              name="contrasena"
              placeholder="Ingresá tu contraseña"
              autoComplete="current-password"
              required
              className={inputStyle}
            />
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-900 px-6 py-3 font-medium text-white transition hover:bg-green-800"
          >
            Iniciar sesión
          </button>

          {/* REGISTRO */}
          <p className="text-center text-sm text-gray-600">
            ¿Todavía no tenés una cuenta?{" "}
            <Link
              href="/registro"
              className="font-semibold text-green-900 hover:underline"
            >
              Registrate
            </Link>
          </p>

        </form>

        {/* VOLVER */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-green-900"
          >
            ← Volver a la tienda
          </Link>
        </div>

      </div>

    </main>
  );
}