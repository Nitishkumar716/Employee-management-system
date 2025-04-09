const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/userdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
