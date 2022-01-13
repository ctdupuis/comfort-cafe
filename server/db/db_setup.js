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