import express from 'express';
import boxplotRoutes from './src/routes/boxplotRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", boxplotRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})