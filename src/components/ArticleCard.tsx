import React from 'react';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  onClick?: () => void;
  isFeatured?: boolean;
  preview?: React.ReactNode;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, excerpt, category, onClick, isFeatured, preview 
}) => {
  return (
    <div className={`article-card ${isFeatured ? 'featured' : ''}`} onClick={onClick} style={{ cursor: 'pointer', height: '100%' }}>
      <div className="article-thumbnail">
        {preview ? preview : <div className="thumbnail-placeholder"></div>}
      </div>
      <div className="article-content">
        <div className="article-meta">
          <span className="article-category">{category}</span>
        </div>
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
