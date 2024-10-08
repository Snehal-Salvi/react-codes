import express from 'express';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/itemsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema for the items
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// GET: Retrieve all items
app.get('/items', async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items from MongoDB
        res.json(items);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// GET: Retrieve a specific item by ID
app.get('/items/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Fetch item by ID
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// POST: Create a new item
app.post('/items', async (req, res) => {
    try {
        const newItem = new Item(req.body); // Create a new item instance
        await newItem.save(); // Save the item to MongoDB
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).send('Error creating item');
    }
});

// PUT: Update an existing item by ID (replace the entire item)
app.put('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the item
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(400).send('Error updating item');
    }
});

// PATCH: Update an existing item by ID (partial update)
app.patch('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update only the provided fields
        if (item) {
            res.json(item);
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(400).send('Error updating item');
    }
});

// DELETE: Remove an item by ID
app.delete('/items/:id', async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id); // Delete the item
        if (item) {
            res.status(204).send(); // No content
        } else {
            res.status(404).send('Item not found');
        }
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
