import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { FeaturedCategories } from "@/components/featured-categories"

export default function Home() {
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
                  3
                </span>
              </Button>
            </Link>
            <Button className="hidden md:flex">Iniciar Sesión</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Todo para tu mejor amigo</h1>
              <p className="max-w-[600px] mt-4 text-muted-foreground md:text-xl">
                Encuentra todo lo que tu perro necesita: alimentos, juguetes, accesorios y más.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="text-base">
                  Ver Productos
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Ofertas Especiales
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FeaturedCategories />

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Productos Destacados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <ProductCard
                id="1"
                name="Alimento Premium"
                price={24.99}
                image="/placeholder.svg?height=200&width=200"
                category="Alimentos"
              />
              <ProductCard
                id="2"
                name="Juguete Interactivo"
                price={12.5}
                image="/placeholder.svg?height=200&width=200"
                category="Juguetes"
              />
              <ProductCard
                id="3"
                name="Cama Ortopédica"
                price={39.99}
                image="/placeholder.svg?height=200&width=200"
                category="Accesorios"
              />
              <ProductCard
                id="4"
                name="Collar Ajustable"
                price={9.99}
                image="/placeholder.svg?height=200&width=200"
                category="Accesorios"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline">Ver Todos los Productos</Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-medium">Productos de Calidad</h3>
                      <p className="text-muted-foreground">
                        Seleccionamos cuidadosamente cada producto para asegurar la mejor calidad.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-medium">Envío Rápido</h3>
                      <p className="text-muted-foreground">
                        Entregamos tus pedidos en 24-48 horas a cualquier parte del país.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-medium">Asesoramiento Personalizado</h3>
                      <p className="text-muted-foreground">
                        Nuestro equipo de expertos está disponible para ayudarte a elegir lo mejor para tu mascota.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Perro feliz con productos de nuestra tienda"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
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
