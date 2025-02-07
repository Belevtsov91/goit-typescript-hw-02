import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';

const API_KEY = '1nKlUkxp735P7LCD2aO90DPmgXVwE0024GT5EoRRHB0';
const API_URL = 'https://api.unsplash.com/search/photos';

// Інтерфейси для типізації API
interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<{ results: Image[] }>(API_URL, {
          params: { query, page, per_page: 12, client_id: API_KEY },
        });
        setImages((prev) => [...prev, ...response.data.results]);
      } catch (err) {
        console.error("API fetch error:", err);
        setError('Error fetching images. Try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error ? <ErrorMessage message={error} /> : <ImageGallery images={images} onImageClick={setModalImage} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {modalImage && <ImageModal image={modalImage} onClose={() => setModalImage(null)} />}
    </div>
  );
};

export default App;
