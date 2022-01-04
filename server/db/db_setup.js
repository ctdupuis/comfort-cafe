// const { MongoClient } = require('mongodb');

// const MONGO_USER = process.env.MONGO_USER;
// const MONGO_SECRET = process.env.MONGO_SECRET;

// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = `mongodb+srv://${MONGO_USER}:${MONGO_SECRET}@cluster0.0ani2.mongodb.net/cafe?retryWrites=true&w=majority`
 

//     const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };
 

// main().catch(console.error);


const mongoose = require('mongoose')

const startDB = async () => {
	const MONGO_USER = process.env.MONGO_USER;
	const MONGO_SECRET = process.env.MONGO_SECRET;
	const CONNECTION_URL = `mongodb+srv://${MONGO_USER}:${MONGO_SECRET}@cluster0.0ani2.mongodb.net/cafe?retryWrites=true&w=majority`
	try {
		await mongoose.connect(CONNECTION_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected to database");
	} catch (err) {
		console.warn("Error:", err)
	}
};

startDB();