export default function Footer() {
  return (
    <footer className="text-center p-4 mt-10 bg-gray-100">
      <p className="text-sm text-gray-500">
       © {new Date().getFullYear()} MasterCard {"<code for change>"} 2.0 All rights reserved.
      </p>
    </footer>
  );
}