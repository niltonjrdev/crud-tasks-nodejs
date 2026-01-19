import { tasks } from '../database/tasks.js';
import { parseBody } from '../middleware/parseBody.js';
import crypto from 'node:crypto';

export async function tasksRoutes(req, res) {
  const { method, url } = req;

  // GET /tasks
  if (method === 'GET' && url === '/tasks') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify(tasks));
  }

  // POST /tasks
  if (method === 'POST' && url === '/tasks') {
    try {
      const body = await parseBody(req);

      if (!body || !body.title || !body.description) {
        res.statusCode = 400;
        return res.end('title e description são obrigatórios');
      }

      const task = {
        id: crypto.randomUUID(),
        title: body.title,
        description: body.description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      tasks.push(task);

      res.statusCode = 201;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(task));
    } catch (error) {
      res.statusCode = 400;
      return res.end('JSON inválido');
    }
  }

  return false;
}
