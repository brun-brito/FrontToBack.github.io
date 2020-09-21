import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
// rota: localhost3333/users (endereço completo)
// recurso: /users (usuários)
