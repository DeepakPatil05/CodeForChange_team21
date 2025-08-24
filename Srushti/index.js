const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("college");
    const users = db.collection("students");

    // 1️⃣ Clear old data so no duplicates
    await users.deleteMany({});
    console.log("🧹 Old data cleared");

    // 2️⃣ Insert one
    await users.insertOne({ name: "Srushti", rollNo: 657 });

    // 3️⃣ Insert many
    await users.insertMany([
      { name: "Siddhi", rollNo: 658 },
      { name: "Shruti", rollNo: 663 },
      { name: "Pranjali", rollNo: 664 }
    ]);
    console.log("✅ Inserted students");

    // 4️⃣ Update one
    await users.updateOne(
      { rollNo: 657 },                 // condition
      { $set: { branch: "CSE" } }      // update
    );
    console.log("✏️ Updated Srushti’s branch to CSE");

    // 5️⃣ Delete one
    await users.deleteOne({ rollNo: 664 });
    console.log("🗑️ Deleted student with rollNo 664");

    // 6️⃣ Fetch all
    const all = await users.find().toArray();
    console.log("📌 Final Data in collection:", all);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
