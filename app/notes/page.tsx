import { fetchNotes } from '@/lib/api';
import Notes from './filter/[...slug]/Notes.client';

export default async function NotesPage() {
  const initialData = await fetchNotes(1, 10, '');
  return <Notes initialData={initialData} />;
}
