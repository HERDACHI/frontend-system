import React, { useState, useEffect } from 'react';

type Article = {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  serial: string;
  brand: string;
  discount: number;
  rating: number;
};

interface FiltersProps {
  articles: Article[];
  onFilter: (filteredArticles: Article[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ articles, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStock, setFilterStock] = useState(false);
  const [filterSerial, setFilterSerial] = useState('');

  useEffect(() => {
    const filteredArticles = articles.filter(article => (
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filterStock || article.stock > 0) &&
      (filterSerial === '' || article.serial.includes(filterSerial))
    ));
    onFilter(filteredArticles);
  }, [searchTerm, filterStock, filterSerial]);

  return (
    <div className="filters">
      <label className="checkbox-label">
        <input type="checkbox" checked={filterStock} onChange={e => setFilterStock(e.target.checked)} className="form-checkbox h-5 w-5 text-blue-600" />
        <span className="checkbox-text">Con Stock</span>
      </label>
      <input type="text" placeholder="Buscar por título" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="filter-input" />
      <input type="text" placeholder="Buscar por serial" value={filterSerial} onChange={e => setFilterSerial(e.target.value)} className="filter-input" />
    </div>
  );
};

export default Filters;





