"use client"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="p-8 flex gap-4">
      <Button>Default Button</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}