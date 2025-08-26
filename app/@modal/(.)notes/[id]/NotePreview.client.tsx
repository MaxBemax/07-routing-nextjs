'use client';

import css from './NotePreview.module.css';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export default function NotePreview() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params?.id;

  const handleClose = () => router.back();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id!),
    enabled: !!id,
  });

  if (!id) return null;

  return (
    <Modal onClose={handleClose}>
      {isLoading && <p>Loading note...</p>}
      {error && <p>Something went wrong</p>}
      {note && (
        <div className={css.container}>
          <button className={css.backBtn} onClick={handleClose}>
            Close
          </button>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{note.title}</h2>
            </div>
            <p className={css.content}>{note.content}</p>
            <p className={css.date}>Created at: {note.createdAt}</p>
          </div>
        </div>
      )}
    </Modal>
  );
}
