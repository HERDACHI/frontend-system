import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import Filters from './Filters';

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

const FilterablePaginatedArticles: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Calcular los artículos a mostrar en la página actual
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Filters articles={articles} onFilter={setFilteredArticles} />
      <div className="articles-grid">
        {currentArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
       
      </div>
    </div>
  );
};

export default FilterablePaginatedArticles;
