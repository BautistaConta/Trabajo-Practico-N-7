const express = require('express');
const axios = require('axios'); // Para consumir el User Service
const app = express();
app.use(express.json());

const products = [{ id: 1, name: 'Laptop', ownerId: 1 }];

// Obtener productos con info del usuario propietario
app.get('/products', async (req, res) => {
  try {
    const usersResponse = await axios.get('http://localhost:3001/users');
    const users = usersResponse.data;
    const result = products.map(product => {
      const owner = users.find(u => u.id === product.ownerId);
      return { ...product, ownerName: owner ? owner.name : 'Desconocido' };
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error al comunicar con el servicio de usuarios' });
  }
});

app.listen(3002, () => console.log('Product Service running on port 3002'));
