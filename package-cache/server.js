const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// 静的ファイル（index.htmlなど）を提供
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
