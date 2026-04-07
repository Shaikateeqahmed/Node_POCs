const dynamoose = require("dynamoose");

const todoSchema = new dynamoose.Schema({
    id: {
        type: String,   
        hashKey: true,
        default: () => require("uuid").v4() // Generates a random ID automatically
    },
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const TodoModel = dynamoose.model("Todo", todoSchema);

module.exports =   TodoModel;