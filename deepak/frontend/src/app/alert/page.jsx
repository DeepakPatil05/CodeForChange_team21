import CustomAlert from "@/components/CustomAlert";

export default function AlertPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Alert Examples</h1>
      <CustomAlert
        type="success"
        title="Success Alert"
        message="Your action was successful!"
      />
      <CustomAlert
        type="error"
        title="Error Alert"
        message="There was an error processing your request."
      />
      <CustomAlert
        type="info"
        title="Info Alert"
        message="This is an informational message."
      />
    </div>
  );
}