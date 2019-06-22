require('module-alias/register');
const app = require('./config/express');
const { port } = require('./config/vars');

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});
