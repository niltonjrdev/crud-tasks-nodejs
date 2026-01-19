import http from 'node:http';
import { tasksRoutes } from './routes/tasks.js';

const server = http.createServer(async (req, res) => {
  const handled = await tasksRoutes(req, res);

  if (handled === false) {
    res.statusCode = 404;
    return res.end('Rota não encontrada');
  }
});

server.listen(3333);
