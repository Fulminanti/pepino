"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Producto añadido",
        description: `${name} ha sido añadido a tu carrito.`,
      })
    }, 1000)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/productos/${id}`}>
        <div className="overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <Link href={`/productos/${id}`} className="hover:underline">
          <h3 className="font-medium text-lg">{name}</h3>
        </Link>
        <div className="mt-2 font-bold text-lg">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={addToCart} className="w-full" disabled={isLoading}>
          {isLoading ? (
            "Añadiendo..."
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Añadir al Carrito
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
