const express = require('express');
const { createTransaction, getTransactions } = require('./transactions');

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk membuat transaksi baru
app.post('/api/new-transaction', (req, res) => {
    try {
    const transactionData = req.body;
    const result = createTransaction(transactionData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mendapatkan list transaksi
app.get('/api/transactions', async (req, res) => {
    try {
      const transactions = await getTransactions(req.query.menu, req.query.customer);
      res.send({
        success: true,
        message: 'Berhasil ambil data!',
        data: transactions,
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send({
        success: false,
        message: 'Gagal ambil data!',
        error: error.message,
      });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
