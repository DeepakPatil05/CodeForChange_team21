"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">Mastercard</Link>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
        <Button>Login</Button>
      </div>
    </nav>
  );
}