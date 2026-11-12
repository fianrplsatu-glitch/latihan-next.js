import { Suspense } from 'react';
import Image from 'next/image';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { events, rupiah } from '@/data/events';
import FormPesan from '@/components/FormPesan';
import TombolFavorit from '@/components/TombolFavorit';
import EventTerkait from '@/components/EventTerkait';

export default async function DetailPage({
  params,
}: PageProps<'/event/[id]'>) {
  const { id } = await params;
  const event = events.find((item) => item.id === Number(id));

  if (!event) notFound();

  const sisa = event.kuota - event.terisi;
  const namaAwal = (await cookies()).get('nama')?.value ?? '';

  return (
    <article className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="relative mb-4 aspect-[40/21] w-full">
        <Image
          src={event.gambar ?? '/img/default.svg'}
          alt={event.judul}
          fill
          sizes="(max-width: 1024px) 100vw, 960px"
          preload
          className="rounded-lg object-cover"
        />
      </div>
      <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
        {event.kategori}
      </span>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{event.judul}</h1>
      <p className="mt-1 text-slate-500">
        {event.tanggal} · {event.lokasi}
      </p>
      <p className="mt-4 text-xl font-semibold text-slate-900">
        {rupiah(event.harga)}
      </p>
      <p className="text-slate-600">
        Sisa {sisa} dari {event.kuota} tiket
      </p>
      <TombolFavorit id={event.id} />
      <FormPesan event={event} namaAwal={namaAwal} />
      <section className="mt-6">
        <h2 className="font-semibold">Event terkait</h2>
        <Suspense
          fallback={<p className="text-slate-400">Memuat event terkait...</p>}
        >
          <EventTerkait event={event} />
        </Suspense>
      </section>
    </article>
  );
}
