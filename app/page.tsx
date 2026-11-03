import KatalogInteraktif from '@/components/KatalogInteraktif';
import { events } from '@/data/events';

export default function KataLog() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Katalog Event</h1>
      <KatalogInteraktif events={events} />
    </div>
  );
}
