### Catatan Saya

### TODO :

- [x] Bikin User Publik
  - [x] Ambil data diri
  - [x] update data diri
  - [x] Hitung berita disukai
  - [x] Hitung berita disimpan
  - [x] Ambil berita yang disukai
  - [x] Ambil berita yang disimpan
  - [x] Hapus berita yang disukai
  - [x] hapus berita yang disimpan
- [ ] Bikin User Magang
  - [x] Ambil data diri
  - [x] update data diri
  - [x] Ambil tugas (?)
  - [x] Ambil berita pending (?)
  - [x] Ambil berita yang ditulis
  - [x] Nulis berita
  - [x] request category
  - [x] Edit berita yang ditulis
  - [x] Hapus berita yang ditulis (soft delete)
- [ ] Bikin User Admin (Belakangan - Karena masih banyak yang belum jadi)
  - [ ] Ambil data diri
  - [ ] update data diri
  - [ ] Hitung user yang role nya intern
  - [ ] Hitung user seluruhnya
  - [ ] Ambil berita yang pending
  - [ ] Kategori yang decline ditampilkan buat jadi approve kalo di klik
  - [ ] List User
  - [ ] Hapus User
  - [ ] Edit User
  - [ ] Beri nilai bagi yang magang --> Next Update

### NOTE :

Untuk pengambilan ata pada sisi user kurang nya :

- Berita urutan desc, terus di dasboard mau berapa yang diquery,
- Yang di halaman like sama save itu mau ada berapa + pagination di BE aja

// Bagian Nambah berita
Jadi berita yang ditulis user bakal jadi pending
Nah nanti admin bakal nampilin semua data yang pending
Terus nanti bakal di kasih note, otomatis data news akan di tempel data pending
Udah itu sih

// Edit berita
Saat edit berita request kategori dimatikan, jadi kesempatan req kategori saat nulis aja

//Edit Akun
Bisa dijadiin sama aja untuk 3 role

// SOFT DELETE
rupanya cuman update delete menjadi tanggal sekarang, terus nanti pas nampilin delete yang null doang. Sama aja sih gak kehapus berarti.
