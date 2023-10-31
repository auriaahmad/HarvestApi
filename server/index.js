const app = require('./src/app');
const port = process.env.PORT || 5000; // Define your desired port number

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
