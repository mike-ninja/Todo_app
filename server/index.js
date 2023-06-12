// Import the app object from the app.js
const app = require('./app')

// Set the server port
const PORT = process.env.PORT || 3001

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on ${PORT}`)
}) 
