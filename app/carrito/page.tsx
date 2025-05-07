import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Datos de ejemplo para el carrito
const cartItems = [
  {
    id: "1",
    name: "Alimento Premium para Perros",
    price: 24.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Juguete Interactivo",
    price: 12.5,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Collar Ajustable",
    price: 9.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CartPage() {
  // Calcular subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 4.99
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span className="text-primary">PetMarket</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="/productos" className="text-sm font-medium hover:text-primary">
              Productos
            </Link>
            <Link href="/nosotros" className="text-sm font-medium hover:text-primary">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/carrito">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Button>
            </Link>
            <Button className="hidden md:flex">Iniciar Sesión</Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Tu Carrito</h1>
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Continuar Comprando
            </Link>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-muted text-sm font-medium">
                    <div className="col-span-6">Producto</div>
                    <div className="col-span-2 text-center">Precio</div>
                    <div className="col-span-2 text-center">Cantidad</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  {cartItems.map((item) => (
                    <div key={item.id} className="border-t first:border-t-0">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                        <div className="md:col-span-6 flex items-center gap-4">
                          <div className="w-16 h-16 flex-shrink-0 rounded border overflow-hidden">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link href={`/productos/${item.id}`} className="font-medium hover:underline">
                              {item.name}
                            </Link>
                            <div className="md:hidden text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</div>
                          </div>
                        </div>

                        <div className="md:col-span-2 text-center hidden md:block">${item.price.toFixed(2)}</div>

                        <div className="md:col-span-2 flex items-center justify-center">
                          <div className="flex items-center border rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Minus className="w-3 h-3" />
                            </Button>
                            <div className="w-8 text-center text-sm">{item.quantity}</div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                          <div className="md:hidden text-sm font-medium">Total:</div>
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive md:ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="border rounded-lg p-6 space-y-4">
                  <h2 className="font-bold text-lg mb-4">Resumen del Pedido</h2>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Envío</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-right mt-1">Impuestos incluidos</div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full" size="lg">
                      Proceder al Pago
                    </Button>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <div className="text-sm font-medium mb-2">Código de Descuento</div>
                    <div className="flex gap-2">
                      <Input placeholder="Ingresa tu código" className="flex-1" />
                      <Button variant="outline">Aplicar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <ShoppingCart className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">Tu carrito está vacío</h2>
              <p className="text-muted-foreground mb-6">Parece que aún no has añadido ningún producto a tu carrito.</p>
              <Link href="/productos">
                <Button>Explorar Productos</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PetMarket</h3>
              <p className="text-gray-400">Tu tienda de confianza para todo lo que tu perro necesita.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="text-gray-400 hover:text-white">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-gray-400 hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/productos/alimentos" className="text-gray-400 hover:text-white">
                    Alimentos
                  </Link>
                </li>
                <li>
                  <Link href="/productos/juguetes" className="text-gray-400 hover:text-white">
                    Juguetes
                  </Link>
                </li>
                <li>
                  <Link href="/productos/accesorios" className="text-gray-400 hover:text-white">
                    Accesorios
                  </Link>
                </li>
                <li>
                  <Link href="/productos/higiene" className="text-gray-400 hover:text-white">
                    Higiene
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <address className="not-italic text-gray-400">
                <p>Calle Principal 123</p>
                <p>Ciudad, CP 12345</p>
                <p className="mt-2">Email: info@petmarket.com</p>
                <p>Teléfono: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} PetMarket. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
