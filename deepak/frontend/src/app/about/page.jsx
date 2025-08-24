"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="p-10 flex justify-center">
      <Card className="max-w-2xl w-full shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eveniet dolore provident eaque aperiam optio, atque beatae itaque. Explicabo architecto odit facere dolorum dolore temporibus quod nihil corrupti qui minima?
            Repellat voluptatibus vel nisi in minus. Optio, totam! Soluta repudiandae, quidem molestias, id ratione veniam delectus distinctio architecto eligendi accusamus necessitatibus! Provident alias, accusantium sint pariatur aut eligendi minima odit?
            Eos similique veritatis, doloribus eum quia accusantium labore veniam consectetur consequatur sapiente omnis non ipsam sit debitis hic quisquam. Ratione a excepturi in! Voluptate, quas aliquam placeat fuga saepe recusandae?
            Porro autem provident praesentium maxime molestias non tempora odio delectus debitis dolorum reprehenderit possimus id dolor eum culpa saepe nobis explicabo eos, blanditiis corporis voluptatem ullam corrupti? Modi, recusandae molestias!
          </p>
          <div className="flex gap-3 mt-6">
            <Button>Contact Us</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}