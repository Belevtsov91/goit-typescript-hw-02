import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" autoFocus placeholder="Search images and photos" value={query} onChange={handleChange} />
        <button type="submit" className={styles.searchIcon}>
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
