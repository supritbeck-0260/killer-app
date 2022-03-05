const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static(path.resolve(__dirname, './build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`server started at ${PORT}`))