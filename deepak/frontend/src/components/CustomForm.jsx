"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CustomForm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter something..."
      />
      <Button type="submit">Add</Button>
    </form>
  );
}