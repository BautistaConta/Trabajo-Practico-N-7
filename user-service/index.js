const express = require('express');
const app = express();
app.use(express.json());

const users = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Carlos' }];

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

// Crear un nuevo usuario
app.post('/users', (req, res) => {
  const user = { id: users.length + 1, name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

app.listen(3001, () => console.log('User Service running on port 3001'));
