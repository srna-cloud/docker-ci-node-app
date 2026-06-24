const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Node.js Express aplikacija radi uspešno.',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'docker-ci-node-app',
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Aplikacija je pokrenuta na portu ${PORT}`);
  });
}

module.exports = app;
