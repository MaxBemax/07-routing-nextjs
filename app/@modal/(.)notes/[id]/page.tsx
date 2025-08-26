import NotePreviewClient from './NotePreview.client';

type NotePreviewProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;

  if (!id) return null;

  return <NotePreviewClient noteId={id} />;
}
