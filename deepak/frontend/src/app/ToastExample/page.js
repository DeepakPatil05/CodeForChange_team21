"use client";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastExample() {
  return (
    <div className="p-4">
      <Button variant="default" onClick={() => toast.success("Clicked successfully")}>
        Show Success Toast
      </Button>

      <Button
        variant="destructive"
        className="ml-2"
        onClick={() => toast.error("Something went wrong")}
      >
        Show Error Toast
      </Button>
    </div>
  );
}

// toast("Default message") → basic toast
// toast.success("Success message") → green success
// toast.error("Error message") → red error
// toast.warning("Warning message") → yellow warning
// toast.info("Info message") → blue info
