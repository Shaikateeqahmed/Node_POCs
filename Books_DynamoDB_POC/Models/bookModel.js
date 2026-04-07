const dynamoose = require('dynamoose');

const bookSchema = new dynamoose.Schema({
    id: {
        type: String,
        hashKey: true,
        default: () => require('uuid').v4()
    },
    title: String,  
    description: String,
    author : String,
    publishedYear: Number,
    genre: {
		type: String,
		enum: [
			"fantasy",
			"sci-fi",
			"mystery",
			"thriller",
			"romance",
			"non-fiction",
			"horror",
			"biography",
			"autobiography",
			"poetry",
			"children's",
			"other"
		]
	},  
});

const BookModel = dynamoose.model('Books', bookSchema);
module.exports = BookModel;