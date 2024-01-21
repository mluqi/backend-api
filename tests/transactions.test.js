const { getTransactions } = require('../src/transactions'); // Sesuaikan dengan path file Anda
const db = require('../src/database'); // Sesuaikan dengan path file Anda

test('Get Transactions with Query', async () => {
    // Buat transaksi untuk diuji
    await request(app)
      .post('/api/new-transaction')
      .send({
        customer_id: '2',
        menu: 'Item 2',
        price: 15,
        qty: 3,
        payment: 'Card',
        total: 45,
      });
  
    const response = await request(app)
      .get('/api/transactions')
      .query({ query: 'Item' });
  
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  
    // Verifikasi respons mencakup data transaksi
    const transaction = response.body[0];
    expect(transaction).toHaveProperty('id');
    expect(transaction).toHaveProperty('customer_id', '2');
    expect(transaction).toHaveProperty('menu', 'Item 2');
    expect(transaction).toHaveProperty('price', 15);
    expect(transaction).toHaveProperty('qty', 3);
    expect(transaction).toHaveProperty('payment', 'Card');
    expect(transaction).toHaveProperty('total', 45);
    expect(transaction).toHaveProperty('created_at');
  });

// Test case untuk mendapatkan list transaksi tanpa query dan customer
test('Get Transactions Without Query and Customer', async () => {
  const results = await getTransactions(null, false);
  expect(results).toBeDefined();
  expect(results.length).toBeGreaterThan(0); // Pastikan ada data yang dikembalikan
});

// Test case untuk mendapatkan list transaksi dengan query
test('Get Transactions with Query', async () => {
  const results = await getTransactions('burger', false);
  expect(results).toBeDefined();
  expect(results.length).toBeGreaterThan(0);
});

// Test case untuk mendapatkan list transaksi diurutkan dari nama customer
test('Get Transactions Sorted by Customer Name', async () => {
  const results = await getTransactions(null, true);
  expect(results).toBeDefined();
  expect(results.length).toBeGreaterThan(0);
});

// Test case untuk mendapatkan list transaksi dengan query dan customer
test('Get Transactions with Query and Sorted by Customer Name', async () => {
  const results = await getTransactions('burger', true);
  expect(results).toBeDefined();
  expect(results.length).toBeGreaterThan(0);
});

// Test case untuk mendapatkan list transaksi tanpa data
test('Get Transactions Without Data', async () => {
  // Anggap ada kondisi di mana tidak ada data dalam tabel transactions
  // Hapus atau nonaktifkan data pada database untuk skenario ini
  // atau sesuaikan dengan kondisi yang sesuai pada lingkungan pengujian Anda.
  const results = await getTransactions('nonexistentmenu', false);
  expect(results).toBeDefined();
  expect(results.length).toBe(0);
});
