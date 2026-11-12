import Link from 'next/link';
import { cookies } from 'next/headers';
import { batalkanPesanan } from '@/app/actions';
import { pesanan } from '@/data/pesanan';
import { rupiah } from '@/data/events';

export default async function HalamanPesanan() {
  const cookieStore = await cookies();
  const namaCookie = cookieStore.get('nama')?.value ?? '';

  const totalTiket = pesanan.reduce((t, p) => t + p.jumlah, 0);
  const pendapatan = pesanan.reduce((t, p) => t + p.total, 0);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">Daftar Pesanan</h1>
      {namaCookie && (
        <p className="mb-3 text-sm font-medium text-emerald-600">
          Halo, {namaCookie}!
        </p>
      )}

      {pesanan.length === 0 ? (
        <p className="text-slate-500">
          Belum ada pesanan.{' '}
          <Link href="/event" className="text-blue-600 underline">
            Pilih event
          </Link>
        </p>
      ) : (
        <>
          <p className="mb-3 text-sm text-slate-500">
            {pesanan.length} pesanan · {totalTiket} tiket · pendapatan{' '}
            {rupiah(pendapatan)}
          </p>
          <table className="w-full rounded-xl border bg-white text-sm">
            <thead className="bg-slate-100 text-left">
              <tr>
                <th className="p-2">#</th>
                <th className="p-2">Event</th>
                <th className="p-2">Pemesan</th>
                <th className="p-2">Tiket</th>
                <th className="p-2">Total</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pesanan.map((p) => {
                const milikKamu =
                  Boolean(namaCookie) &&
                  p.nama.toLowerCase() === namaCookie.toLowerCase();

                return (
                  <tr key={p.nomor} className="border-t">
                    <td className="p-2">{p.nomor}</td>
                    <td className="p-2">{p.judul}</td>
                    <td className="p-2 flex items-center gap-2">
                      {p.nama}
                      {milikKamu && (
                        <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-700">
                          Kamu
                        </span>
                      )}
                    </td>
                    <td className="p-2">{p.jumlah}</td>
                    <td className="p-2">{rupiah(p.total)}</td>
                    <td className="p-2">
                      {milikKamu && (
                        <form action={batalkanPesanan}>
                          <input type="hidden" name="nomor" value={p.nomor} />
                          <button className="text-red-600 underline">
                            Batalkan
                          </button>
                        </form>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
