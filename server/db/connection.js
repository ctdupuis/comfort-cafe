const mongoose = require('mongoose');
const { CONNECTION_URL } = process.env;

// const connection = mongoose.createConnection(CONNECTION_URL)
// const db = connection.base.models
// const db = async () => {
//     const connection = await mongoose.connect(CONNECTION_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     return connection
// }

// exports.db = db;


const startDB = async () => {
	const CONNECTION_URL = process.env.CONNECTION_URL;
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