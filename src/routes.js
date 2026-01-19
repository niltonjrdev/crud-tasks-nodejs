export function routes(req, res) {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    return res.end('API de Tarefas');
  }

  return res.end('Rota não encontrada');
}