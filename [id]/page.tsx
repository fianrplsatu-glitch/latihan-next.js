import { notFound } from 'next/navigation';
import { events, rupiah } from '@/data/events';

type DetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { id } = await params;
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    notFound();
  }

  const sisa = event.kuota - event.terisi;

  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">
      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
        {event.kategori}
      </span>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{event.judul}</h1>
      <p className="mt-1 text-slate-500">
        {event.tanggal} · {event.lokasi}
      </p>
      <p className="mt-4 text-xl font-semibold text-slate-900">{rupiah(event.harga)}</p>
      <p className="text-slate-600">
        Sisa {sisa} dari {event.kuota} tiket
      </p>
    </article>
  );
}
