import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Esta función simularía obtener datos del producto desde una API o base de datos
function getProductData(id: string) {
  // Datos de ejemplo
  return {
    id,
    name: "Alimento Premium para Perros",
    price: 24.99,
    description:
      "Alimento premium para perros adultos con ingredientes naturales y sin conservantes artificiales. Ideal para mantener a tu mascota saludable y con energía.",
    features: [
      "Ingredientes 100% naturales",
      "Sin conservantes artificiales",
      "Rico en proteínas y nutrientes esenciales",
      "Mejora la salud digestiva",
      "Fortalece el sistema inmunológico",
    ],
    specifications: {
      peso: "5kg",
      ingredientes: "Pollo, arroz, vegetales, vitaminas y minerales",
      edadRecomendada: "Perros adultos (1-7 años)",
      tamaño: "Razas medianas y grandes",
    },
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    category: "Alimentos",
    rating: 4.8,
    reviews: 124,
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

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
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <Link
            href="/productos"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver a Productos
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - Vista ${index + 1}`}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground">{product.category}</div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4">Cantidad:</div>
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="w-12 text-center">1</div>
                    <Button variant="ghost" size="icon" className="rounded-none">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Añadir al Carrito
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Comprar Ahora
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-2">Características Principales:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs mt-0.5">
                        ✓
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="descripcion">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                <TabsTrigger value="especificaciones">Especificaciones</TabsTrigger>
                <TabsTrigger value="resenas">Reseñas</TabsTrigger>
              </TabsList>
              <TabsContent value="descripcion" className="p-6 border rounded-b-lg">
                <h3 className="text-xl font-medium mb-4">Descripción del Producto</h3>
                <p className="mb-4">
                  Nuestro Alimento Premium para Perros está formulado con ingredientes de la más alta calidad para
                  proporcionar una nutrición completa y equilibrada para tu mascota. Elaborado con carne real como
                  ingrediente principal, este alimento ofrece proteínas de alta calidad que ayudan a mantener músculos
                  fuertes y saludables.
                </p>
                <p className="mb-4">
                  La fórmula incluye una mezcla de frutas, verduras y granos integrales que proporcionan vitaminas,
                  minerales y fibra esenciales para una digestión saludable. También contiene ácidos grasos omega-3 y
                  omega-6 para mantener un pelaje brillante y una piel sana.
                </p>
                <p>
                  Este alimento no contiene colorantes, sabores artificiales ni conservantes, lo que lo hace ideal para
                  perros con sensibilidades alimentarias. Es adecuado para perros adultos de todas las razas y tamaños,
                  y proporciona la energía necesaria para mantener un estilo de vida activo y saludable.
                </p>
              </TabsContent>
              <TabsContent value="especificaciones" className="p-6 border rounded-b-lg">
                <h3 className="text-xl font-medium mb-4">Especificaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="resenas" className="p-6 border rounded-b-lg">
                <h3 className="text-xl font-medium mb-4">Reseñas de Clientes</h3>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-medium">María G.</span>
                      <span className="text-sm text-muted-foreground">- hace 2 semanas</span>
                    </div>
                    <p>
                      Mi perro adora este alimento. Desde que cambiamos a esta marca, su pelaje luce más brillante y
                      tiene mucha más energía. Totalmente recomendado.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-medium">Carlos R.</span>
                      <span className="text-sm text-muted-foreground">- hace 1 mes</span>
                    </div>
                    <p>
                      Excelente calidad. Mi perro es bastante exigente con la comida, pero este alimento le encantó
                      desde el primer día. Su digestión ha mejorado notablemente.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-medium">Ana P.</span>
                      <span className="text-sm text-muted-foreground">- hace 2 meses</span>
                    </div>
                    <p>
                      Mi veterinario me recomendó este alimento para mi perro con problemas digestivos y ha sido un
                      cambio increíble. Ya no tiene molestias y está mucho más activo. Vale cada centavo.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
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
