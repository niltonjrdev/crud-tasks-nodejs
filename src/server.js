import http from 'node:http'
import { routes} from './routes.js'

const server = http.createServer((req, res) => {
    routes(req, res);
});

server.listen(3333);