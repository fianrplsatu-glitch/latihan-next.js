import { events, type Event } from '@/data/events';

// Pura-pura mengambil data dari database yang agak lambat.
function jeda(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function ambilEvents(): Promise<Event[]>;
export function ambilEvents(id: number): Promise<Event | undefined>;
export function ambilEvents(id?: number) {
  if (typeof id === 'number') {
    return (async () => {
      await jeda(800);
      return events.find((e) => e.id === id);
    })();
  }

  return (async () => {
    await jeda(1500);
    return events;
  })();
}

export async function ambilTerkait(event: Event) {
  await jeda(2000);
  return events.filter((e) => e.kategori === event.kategori && e.id !== event.id);
}