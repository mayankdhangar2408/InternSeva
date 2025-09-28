require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function testConnection() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB successfully!");
    } catch (err) {
        console.error("❌ Connection failed:", err);
    } finally {
        await client.close();
    }
}

testConnection();
