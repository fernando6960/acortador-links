import server from './server';

const app = server;

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => { 
  console.log(`Server running on PORT: ${PORT}\n\n👉 http://localhost:${PORT}`); 
})