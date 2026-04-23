-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Apr 2026 pada 11.28
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resep_nusantara`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bahan`
--

CREATE TABLE `bahan` (
  `id` int(11) NOT NULL,
  `resep_id` int(11) NOT NULL,
  `nama_bahan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `bahan`
--

INSERT INTO `bahan` (`id`, `resep_id`, `nama_bahan`) VALUES
(7, 3, 'Ayam'),
(8, 3, 'Bumbu Kacang'),
(9, 4, 'Cendol'),
(10, 4, 'Santan'),
(11, 5, 'Tepung'),
(12, 5, 'Gula Merah'),
(13, 6, 'Nangka'),
(14, 6, 'Santan'),
(15, 7, 'Ikan'),
(16, 7, 'Tepung'),
(17, 8, 'Daging'),
(18, 8, 'Kluwek'),
(19, 9, 'Tepung'),
(20, 9, 'Kelapa'),
(21, 10, 'Jahe'),
(22, 10, 'Gula'),
(23, 11, 'Ketan'),
(24, 11, 'Ayam'),
(25, 12, 'Tepung'),
(26, 12, 'Telur'),
(27, 13, 'Ayam'),
(28, 13, 'Bumbu Bali'),
(29, 14, 'Santan'),
(30, 14, 'Gula Aren'),
(31, 15, 'Kulit Pastel'),
(32, 15, 'Sayur');

-- --------------------------------------------------------

--
-- Struktur dari tabel `langkah`
--

CREATE TABLE `langkah` (
  `id` int(11) NOT NULL,
  `resep_id` int(11) NOT NULL,
  `urutan` int(11) NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `langkah`
--

INSERT INTO `langkah` (`id`, `resep_id`, `urutan`, `deskripsi`) VALUES
(5, 3, 1, 'Tusuk ayam'),
(6, 3, 2, 'Bakar'),
(7, 3, 3, 'Sajikan'),
(8, 4, 1, 'Campur'),
(9, 4, 2, 'Tambahkan es'),
(10, 5, 1, 'Bentuk bola'),
(11, 5, 2, 'Rebus'),
(12, 6, 1, 'Masak lama'),
(13, 6, 2, 'Tambah santan'),
(14, 7, 1, 'Bentuk adonan'),
(15, 7, 2, 'Rebus'),
(16, 7, 3, 'Goreng'),
(17, 8, 1, 'Rebus'),
(18, 8, 2, 'Masak bumbu'),
(19, 9, 1, 'Campur'),
(20, 9, 2, 'Panggang'),
(21, 10, 1, 'Rebus air'),
(22, 10, 2, 'Masukkan jahe'),
(23, 11, 1, 'Isi ketan'),
(24, 11, 2, 'Bungkus'),
(25, 12, 1, 'Campur'),
(26, 12, 2, 'Panggang'),
(27, 13, 1, 'Lumuri ayam'),
(28, 13, 2, 'Panggang perlahan'),
(29, 14, 1, 'Rebus santan'),
(30, 14, 2, 'Tambahkan gula'),
(31, 15, 1, 'Isi kulit'),
(32, 15, 2, 'Lipat'),
(33, 15, 3, 'Goreng');

-- --------------------------------------------------------

--
-- Struktur dari tabel `resep`
--

CREATE TABLE `resep` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `kategori` varchar(50) NOT NULL,
  `kesulitan` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `resep`
--

INSERT INTO `resep` (`id`, `nama`, `kategori`, `kesulitan`, `created_at`) VALUES
(3, 'Sate Ayam', 'Makanan Utama', 'Sedang', '2026-04-23 07:00:38'),
(4, 'Es Cendol', 'Minuman', 'Mudah', '2026-04-23 07:00:46'),
(5, 'Klepon', 'Dessert', 'Sedang', '2026-04-23 07:01:08'),
(6, 'Gudeg', 'Makanan Utama', 'Sedang', '2026-04-23 07:19:03'),
(7, 'Pempek', 'Snack', 'Sulit', '2026-04-23 07:19:08'),
(8, 'Rawon', 'Makanan Utama', 'Sulit', '2026-04-23 07:19:16'),
(9, 'Serabi', 'Dessert', 'Mudah', '2026-04-23 07:19:21'),
(10, 'Wedang Jahe', 'Minuman', 'Mudah', '2026-04-23 07:19:26'),
(11, 'Lemper', 'Snack', 'Sedang', '2026-04-23 07:19:32'),
(12, 'Bika Ambon', 'Dessert', 'Sulit', '2026-04-23 07:19:36'),
(13, 'Ayam Betutu', 'Makanan Utama', 'Sulit', '2026-04-23 07:21:00'),
(14, 'Bajigur', 'Minuman', 'Mudah', '2026-04-23 07:21:06'),
(15, 'Pastel', 'Snack', 'Sedang', '2026-04-23 07:21:11');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bahan`
--
ALTER TABLE `bahan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `resep_id` (`resep_id`);

--
-- Indeks untuk tabel `langkah`
--
ALTER TABLE `langkah`
  ADD PRIMARY KEY (`id`),
  ADD KEY `resep_id` (`resep_id`);

--
-- Indeks untuk tabel `resep`
--
ALTER TABLE `resep`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bahan`
--
ALTER TABLE `bahan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `langkah`
--
ALTER TABLE `langkah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT untuk tabel `resep`
--
ALTER TABLE `resep`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `bahan`
--
ALTER TABLE `bahan`
  ADD CONSTRAINT `bahan_ibfk_1` FOREIGN KEY (`resep_id`) REFERENCES `resep` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `langkah`
--
ALTER TABLE `langkah`
  ADD CONSTRAINT `langkah_ibfk_1` FOREIGN KEY (`resep_id`) REFERENCES `resep` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
