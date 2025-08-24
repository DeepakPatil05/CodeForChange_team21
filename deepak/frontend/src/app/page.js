"use client";
import DataCard from "@/components/DataCard";
import CustomForm from "@/components/CustomForm";
import Loader from "@/components/Loader";
import CustomAlert from "@/components/CustomAlert";
import { useState,useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5002/api/hello")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  const addItem = (value) => {
    setLoading(true);
  
    fetch("http://localhost:5002/api/add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: value }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ Response from backend:", data);
        setItems([...items, data.receivedItem]); // use backend response
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Error:", err);
        setLoading(false);
      });
  };


  return (
    <main>
      <section className="p-6">
        <h1 className="text-3xl font-bold mb-4">Hackathon Starter</h1>
        <CustomForm onSubmit={addItem} />
        
        {loading && <Loader />}
        
        {items.length === 0 ? (
          <CustomAlert 
            type="info" 
            title="No items yet" 
            message="Add something to get started 🚀" 
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {items.map((item, i) => (
              <DataCard 
                key={i} 
                title={`Item ${i + 1}`} 
                description={item} 
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}