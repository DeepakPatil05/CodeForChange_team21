"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 border-r p-6 space-y-6">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <nav className="flex flex-col gap-3">
          <Button variant="outline" className="justify-start">Overview</Button>
          <Button variant="outline" className="justify-start">Analytics</Button>
          <Button variant="outline" className="justify-start">Settings</Button>
        </nav>
      </aside>

      <main className="flex-1 p-10 space-y-6">
        <h1 className="text-3xl font-bold">Welcome</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">120</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5000Rs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tasks Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">80%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Action</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Ajay</td>
                  <td className="py-2">Logged in</td>
                  <td className="py-2">Aug 24, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">vijay</td>
                  <td className="py-2">Logged out</td>
                  <td className="py-2">Aug 23, 2025</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}