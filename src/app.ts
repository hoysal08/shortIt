import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());

// Define your routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
