Carrito

import Link from "next/link";

export default function Carrito() {
  // Productos de ejemplo para diseñar el frontend.
  // Más adelante se conectarán al carrito real.
  const productos = [
    {
      id: 1,
      nombre: "Ramo de rosas rojas",
      descripcion: "Ramo de flores naturales",
      precio: 28000,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Ramo de girasoles",
      descripcion: "Flores frescas seleccionadas",
      precio: 22000,
      cantidad: 1,
    },
  ];

  const formatoPrecio = (precio: number) =>
    precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });

  const subtotal = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.cantidad,
    0
  );

  return (
    <main className="min-h-screen bg-[#f8faf8] px-4 py-10 sm:px-6">

      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm font-medium text-green-800 hover:underline"
          >
            ← Seguir comprando
          </Link>

          <h1 className="mt-5 text-3xl font-semibold text-green-950">
            Mi carrito
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Revisá los productos antes de continuar.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

          {/* LISTA DE PRODUCTOS */}
          <section className="space-y-4 lg:col-span-2">

            {productos.length === 0 ? (
              <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
                <span className="text-4xl">🛒</span>

                <h2 className="mt-4 text-xl font-semibold text-gray-800">
                  Tu carrito está vacío
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Descubrí nuestros productos y elegí tus favoritos.
                </p>

                <Link
                  href="/"
                  className="mt-6 inline-block rounded-lg bg-green-900 px-6 py-3 text-sm font-medium text-white hover:bg-green-800"
                >
                  Explorar productos
                </Link>
              </div>
            ) : (
              productos.map((producto) => (
                <article
                  key={producto.id}
                  className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center"
                >

                  {/* IMAGEN */}
                  <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-lg bg-green-50 sm:w-32">
                    <span className="text-4xl">🌿</span>
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="flex-1">

                    <h2 className="text-lg font-semibold text-gray-900">
                      {producto.nombre}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {producto.descripcion}
                    </p>

                    <p className="mt-3 text-lg font-bold text-green-900">
                      {formatoPrecio(producto.precio)}
                    </p>

                  </div>

                  {/* CANTIDAD */}
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700">
                      Cantidad: {producto.cantidad}
                    </div>
                  </div>

                </article>
              ))
            )}

          </section>

          {/* RESUMEN DE COMPRA */}
          <aside className="rounded-xl border border-gray-200 bg-white p-6 lg:sticky lg:top-6">

            <h2 className="text-xl font-semibold text-green-950">
              Resumen de compra
            </h2>

            <div className="mt-6 space-y-4 border-b border-gray-200 pb-5">

              <div className="flex justify-between text-sm text-gray-600">
                <span>Productos ({productos.length})</span>
                <span>{formatoPrecio(subtotal)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Envío</span>
                <span>A calcular</span>
              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-5 flex items-center justify-between">
              <span className="font-semibold text-gray-900">
                Total de productos
              </span>

              <span className="text-2xl font-bold text-green-900">
                {formatoPrecio(subtotal)}
              </span>
            </div>

            {/* MÉTODO DE PAGO */}
            <div className="mt-7">
              <label
                htmlFor="metodoPago"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Método de pago
              </label>

              <select
                id="metodoPago"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-700"
              >
                <option value="" disabled>
                  Seleccionar método
                </option>

                <option value="efectivo">
                  Efectivo
                </option>

                <option value="transferencia">
                  Transferencia bancaria
                </option>

                <option value="tarjeta">
                  Tarjeta
                </option>
              </select>
            </div>

            {/* BOTÓN DE COMPRA */}
            <button
              type="button"
              disabled
              title="Compra pendiente de implementación"
              className="mt-6 w-full cursor-not-allowed rounded-lg bg-green-900 px-6 py-3 font-medium text-white opacity-60"
            >
              Finalizar compra
            </button>

            <p className="mt-3 text-center text-xs text-gray-400">
              Vista de demostración. No se realizan pagos.
            </p>

            <Link
              href="/"
              className="mt-5 block text-center text-sm font-medium text-green-800 hover:underline"
            >
              Seguir comprando
            </Link>

          </aside>

        </div>

      </div>

    </main>
  );
}
