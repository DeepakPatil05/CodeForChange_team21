import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CustomAlert({ type = "info", title, message }) {
  const variants = {
    success: "bg-green-50 border-green-500 text-green-700",
    error: "bg-red-50 border-red-500 text-red-700",
    info: "bg-blue-50 border-blue-500 text-blue-700",
  };

  return (
    <Alert className={`${variants[type]} border-l-4 my-4`}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}