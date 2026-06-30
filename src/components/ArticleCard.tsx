import React from 'react';

interface ArticleCardProps {
  title: string;
  author: string;
  date?: string;
  excerpt: string;
  category: string;
  onClick: () => void;
  isFeatured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, author, date, excerpt, category, onClick, isFeatured 
}) => {
  return (
    <div className={`article-card ${isFeatured ? 'featured' : ''}`} onClick={onClick}>
      <div className="article-thumbnail">
        {/* Placeholder for actual image */}
        <div className="thumbnail-placeholder"></div>
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span className="article-category">{category}</span>
          {date && <span className="article-date"> · {date}</span>}
        </div>
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
        <div className="article-author">{author}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
