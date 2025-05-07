import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

export function FeaturedCategories() {
  const categories = [
    {
      id: "alimentos",
      name: "Alimentos",
      description: "Alimentos secos, húmedos y snacks",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "juguetes",
      name: "Juguetes",
      description: "Juguetes interactivos y de entrenamiento",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "accesorios",
      name: "Accesorios",
      description: "Collares, correas, camas y más",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "higiene",
      name: "Higiene",
      description: "Champús, cepillos y productos de limpieza",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Categorías Destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/productos/${category.id}`}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-lg">{category.name}</h3>
                  <p className="text-muted-foreground mt-1">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
