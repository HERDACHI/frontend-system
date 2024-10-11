import React from 'react';


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

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="article-card">
      <h2 className="article-title">{article.title}</h2>
      <p>{article.description}</p>
      <p>Price: ${article.price}</p>
      <p>Stock: {article.stock}</p>
      <p>Category: {article.category}</p>
      <p>Serial: {article.serial}</p>
      <p>Brand: {article.brand}</p>
      <p>Discount: {article.discount}%</p>
      <p>Rating: {article.rating}</p>
    </div>
  );
};

export default ArticleCard;
