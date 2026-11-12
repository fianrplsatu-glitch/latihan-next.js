export type Event = {
  id: number;
  judul: string;
  tanggal: string;
  lokasi: string;
  harga: number;
  kuota: number;
  terisi: number;
  kategori: string;
  gambar?: string; // Ditambahkan di akhir type Event
};

export const events: Event[] = [
  {
    id: 1,
    judul: 'Konser Musik Indie',
    tanggal: '12 Desember 2026',
    lokasi: 'Jakarta',
    harga: 150000,
    kuota: 100,
    terisi: 45,
    kategori: 'Musik',
    gambar: '/img/event-1.png',
  },
  {
    id: 2,
    judul: 'Workshop React & Next.js',
    tanggal: '15 Desember 2026',
    lokasi: 'Bandung',
    harga: 250000,
    kuota: 50,
    terisi: 20,
    kategori: 'Teknologi',
    gambar: '/img/event-2.png',
  },
  {
    id: 3,
    judul: 'Pameran Seni Rupa',
    tanggal: '20 Desember 2026',
    lokasi: 'Yogyakarta',
    harga: 50000,
    kuota: 200,
    terisi: 150,
    kategori: 'Seni',
    gambar: '/img/event-3.png',
  },
  {
    id: 4,
    judul: 'Festival Kuliner Nusantara',
    tanggal: '22 Desember 2026',
    lokasi: 'Surabaya',
    harga: 0,
    kuota: 500,
    terisi: 320,
    kategori: 'Kuliner',
    gambar: '/img/event-4.png',
  },
  {
    id: 5,
    judul: 'Seminar Kewirausahaan',
    tanggal: '28 Desember 2026',
    lokasi: 'Malang',
    harga: 100000,
    kuota: 80,
    terisi: 60,
    kategori: 'Bisnis',
    gambar: '/img/event-5.png',
  },
  {
    id: 6,
    judul: 'Lomba Marathon 10K',
    tanggal: '5 Januari 2027',
    lokasi: 'Bali',
    harga: 200000,
    kuota: 300,
    terisi: 290,
    kategori: 'Olahraga',
    gambar: '/img/event-6.png',
  },
];

export function rupiah(n: number) {
  return n === 0 ? 'Gratis' : `Rp ${n.toLocaleString('id-ID')}`;
}
