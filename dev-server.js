require('dotenv').config({ path: '.env.local' });
const express = require('express');
const handler = require('./api/contact');

const app = express();
app.use(express.json());
app.post('/api/contact', handler);
app.listen(3000, () => console.log('API dev server running on http://localhost:3000'));
