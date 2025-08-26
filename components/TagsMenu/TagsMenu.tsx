import Link from 'next/link';
import css from './TagsMenu.module.css';
import { NoteTag } from '@/types/note';

interface TagsMenuProps {
  tags: NoteTag[];
}
export default function TagsMenu({ tags }: TagsMenuProps) {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link
            href="/notes/filter/All
          "
            className={css.menuLink}
          >
            All notes
          </Link>
        </li>
        {tags.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
