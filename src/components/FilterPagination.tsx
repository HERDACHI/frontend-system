import  { useState, useEffect } from 'react';
import Filters from './Filters';
import ArticleCard from './ArticleCard';

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

const FilterPagination = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {//useEffect se asegura de que la solicitud de datos solo se realice una vez cuando el componente se monta por primera vez.
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/HERDACHI/frontend-system/main/src/data/articles.json" //EndPoint donde se encuentra servido articles.json
      );
      const data = await response.json();
      setArticles(data);
      setFilteredArticles(data); // Inicializa los artículos filtrados con los datos obtenidos
    };

    fetchData();
  }, []);

  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  return (
    <div>
      <Filters articles={articles} onFilter={setFilteredArticles} />
      <div className="articles-list">
        {currentArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }).map((_, i) => (
          <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPagination;



