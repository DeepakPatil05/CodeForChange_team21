import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DataCard({ title, description, action }) {
  return (
    <Card className="w-full max-w-sm shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
        {action && <div className="mt-3">{action}</div>}
      </CardContent>
    </Card>
  );
}