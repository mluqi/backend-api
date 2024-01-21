const db = require('./database');

// Fungsi untuk membuat transaksi baru
const createTransaction = (transactionData) => {
    const {
        customer_id,
        menu,
        price,
        qty,
        payment,
        total,
    } = transactionData;

    const created_at = new Date().toISOString();

    const query = `
      INSERT INTO transaction (customer_id, menu, price, qty, payment, total, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    const values = [customer_id, menu, price, qty, payment, total, created_at];
  
    db.query(query, values, (err, results) => {
      if (err) {
        throw err;
      }
      console.log('Transaction created:', results.insertId);
    });
  
    return { message: 'Transaction created successfully' };
};

// Fungsi untuk mendapatkan list transaksi
const getTransactions = (query, customer) => {
let sql = 'SELECT * FROM transaction';
  const values = [];

  if (query) {
    sql += ' WHERE menu LIKE ? OR price = ?';
    values.push(`%${query}%`, query);
  }

  if (customer) {
    sql += ' ORDER BY customer_id';
  } else {
    sql += ' ORDER BY created_at DESC';
  }
  console.log('Query:', sql);
  console.log('Values:', values);

  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = { createTransaction, getTransactions };