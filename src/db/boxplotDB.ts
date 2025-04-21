class boxplotDB {
  async getData(): Promise<number[]> {
    // Simula base de datos con 100 números aleatorios
    const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100 + 1));
    return data;
  }
}

export default boxplotDB;