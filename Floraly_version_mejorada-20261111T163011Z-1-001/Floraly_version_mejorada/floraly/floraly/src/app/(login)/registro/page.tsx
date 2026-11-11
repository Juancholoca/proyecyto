import { RegistrarUsuario } from "@/lib/RegistrarUsuario";
import Link from "next/link";

export default function Registro() {
  const inputStyle =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-green-700 focus:ring-1 focus:ring-green-700";

  const labelStyle = "mb-2 block text-sm font-medium text-gray-700";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8faf8] px-4 py-12">

      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

        {/* ENCABEZADO */}
        <div className="mb-9 text-center">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-green-950"
          >
            🌿 Floraly
          </Link>

          <h1 className="mt-5 text-2xl font-semibold text-gray-900">
            Crear cuenta
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Completá tus datos para registrarte
          </p>
        </div>

        {/* FORMULARIO */}
        <form action={RegistrarUsuario} className="space-y-6">

          {/* NOMBRE Y APELLIDO */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="nombre" className={labelStyle}>
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                autoComplete="given-name"
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="apellido" className={labelStyle}>
                Apellido
              </label>
              <input
                id="apellido"
                type="text"
                name="apellido"
                placeholder="Tu apellido"
                autoComplete="family-name"
                className={inputStyle}
              />
            </div>

          </div>

          {/* FECHA DE NACIMIENTO Y GÉNERO */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="fecha_nacimiento" className={labelStyle}>
                Fecha de nacimiento
              </label>
              <input
                id="fecha_nacimiento"
                type="date"
                name="fecha_nacimiento"
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="genero" className={labelStyle}>
                Género
              </label>
              <select
                id="genero"
                name="genero"
                defaultValue=""
                className={inputStyle}
              >
                <option value="">Seleccionar</option>
                <option value="femenino">Femenino</option>
                <option value="masculino">Masculino</option>
                <option value="otro">Otro</option>
                <option value="no_especificado">
                  Prefiero no decirlo
                </option>
              </select>
            </div>

          </div>

          {/* EMAIL */}
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

          {/* CONTRASEÑAS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="contrasena" className={labelStyle}>
                Contraseña
              </label>
              <input
                id="contrasena"
                type="password"
                name="contrasena"
                placeholder="Ingresá tu contraseña"
                autoComplete="new-password"
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="confirmar_contrasena" className={labelStyle}>
                Confirmar contraseña
              </label>
              <input
                id="confirmar_contrasena"
                type="password"
                name="confirmar_contrasena"
                placeholder="Repetí tu contraseña"
                autoComplete="new-password"
                className={inputStyle}
              />
            </div>

          </div>

          {/* DIRECCIÓN Y TELÉFONO */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="direccion" className={labelStyle}>
                Dirección
              </label>
              <input
                id="direccion"
                type="text"
                name="direccion"
                placeholder="Tu dirección"
                autoComplete="street-address"
                className={inputStyle}
              />
            </div>

            <div>
              <label htmlFor="telefono" className={labelStyle}>
                Teléfono
              </label>
              <input
                id="telefono"
                type="tel"
                name="telefono"
                placeholder="11 1234-5678"
                autoComplete="tel"
                className={inputStyle}
              />
            </div>

          </div>

          {/* BOTÓN */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-lg bg-green-900 px-6 py-3 font-medium text-white transition hover:bg-green-800"
            >
              Crear cuenta
            </button>
          </div>

          {/* INICIAR SESIÓN */}
          <p className="text-center text-sm text-gray-600">
            ¿Ya tenés una cuenta?{" "}
            <Link
              href="/login"
              className="font-semibold text-green-900 hover:underline"
            >
              Iniciá sesión
            </Link>
          </p>

        </form>

      </div>

    </main>
  );
}
