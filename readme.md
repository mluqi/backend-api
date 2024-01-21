REST API ini memiliki 2 routes 
- /api/new-transaction  = untuk menambahkan transaksi baru
- /api/transactions     = untuk mendapatkan daftar list transaksi diurutkan dari yang terbaru dengan 2 pilihan query :
1. /api/transactions?query=namaMenu untuk mendapatkan data menu sesuai dengan nama menu/pencarian menu
2. /api/transactions?customer=nama untuk mendapatkan data transaksi diurutkan dari nama customer

saya menggunakan Nodejs dengan framework Express karena Nodejs dan express sudah powerful ketika membuat API dan database Mysql karena saya terbiasa menggunakan Mysql, serta docker desktop untuk mendeploy. jujur saja ketika menggunakan docker saya masih baru belajar oleh karena itu saya sampai melewati batas waktu karena memang banyak eror yang saya temukan ketika menggunakan docker. solusinya saya mencoba menggunakan nodemon untuk run di localhost dahulu dan cek apakah API dan databasenya sudah terkoneksi dengan baik. Kemudian saya melakukan unit test menggunakan jest dan hasilnya PASSED semua, saya juga menggunakan ppostman untuk test API nya.

jika mendapatkan ribuan transaksi pada database untuk mencari data pasti membutuhkan lebih banyak waktu harusnya disini memakai elasticsearch agar mempercepat dan mempermudah pencarian data tetapi karena saya belum terlalu menguasai elasticsearch jadi saya gunakan tools yang saya bisa.
jika terdapat banyak user yang mengakses API secara bersamaan itu tergantung mendeploynya memakai hosting/cloud yang berukuran besar/kecil. kalau ingin aman ketika menerima banyak request memakai layanan yang menyediakan memori yang besar.
