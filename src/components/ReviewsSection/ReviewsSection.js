import React, { useState, useEffect } from 'react';
import ReviewInsightsModal from '../ReviewInsightsModal/ReviewInsightsModal';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liveCounters, setLiveCounters] = useState({
    totalReviews: 0,
    verifiedReviews: 0,
    recentReviews: 0
  });

  const reviews = [
    {
      id: 1,
      name: 'Priya S.',
      initial: 'P',
      rating: 5.0,
      comment: 'Amazing glow and radiance! This product has transformed my skin completely.',
      fullComment: 'Amazing glow and radiance! This product has transformed my skin completely. I\'ve been using it for 2 months now and the results are incredible. Highly recommend!',
      timeAgo: '2 months ago',
      isTopReviewer: true,
      isVerified: true,
      likes: 23,
      productIcon: '🧴'
    },
    {
      id: 2,
      name: 'Ananya S.',
      initial: 'A',
      rating: 5.0,
      comment: 'Best purchase ever! My skin feels so smooth and hydrated.',
      fullComment: 'Best purchase ever! My skin feels so smooth and hydrated. The texture is perfect and it absorbs quickly without leaving any greasy residue.',
      timeAgo: '1 month ago',
      isTopReviewer: false,
      isVerified: true,
      likes: 14,
      productIcon: '🧴'
    },
    {
      id: 3,
      name: 'R. K. Varma',
      initial: 'R',
      rating: 5.0,
      comment: 'Excellent quality and fast delivery. Very satisfied with the purchase.',
      fullComment: 'Excellent quality and fast delivery. Very satisfied with the purchase. The product exceeded my expectations.',
      timeAgo: '3 months ago',
      isTopReviewer: false,
      isVerified: true,
      likes: 8,
      productIcon: '🧴'
    },
    {
      id: 4,
      name: 'Deepika',
      initial: 'D',
      rating: 5.0,
      comment: 'It is very Good Product. Highly recommend to everyone.',
      fullComment: 'It is very Good Product. Highly recommend to everyone. The quality is outstanding and the price is reasonable.',
      timeAgo: '2 weeks ago',
      isTopReviewer: false,
      isVerified: true,
      likes: 12,
      productIcon: '🧴'
    },
    {
      id: 5,
      name: 'Vishnu Rao',
      initial: 'V',
      rating: 5.0,
      comment: 'Prompt Delivery. The team was very helpful and guided me throughout my purchase.',
      fullComment: 'Prompt Delivery. The team was very helpful and guided me throughout my purchase. Great customer service and excellent product quality.',
      timeAgo: '1 week ago',
      isTopReviewer: true,
      isVerified: true,
      likes: 19,
      productIcon: '🧴'
    },
    {
      id: 6,
      name: 'Kishore Varma',
      initial: 'K',
      rating: 5.0,
      comment: 'Fast Response. I love the response I received from the customer service team.',
      fullComment: 'Fast Response. I love the response I received from the customer service team. The product is amazing and the service is top-notch.',
      timeAgo: '5 days ago',
      isTopReviewer: false,
      isVerified: true,
      likes: 7,
      productIcon: '🧴'
    }
  ];

  const ratingBreakdown = [
    { stars: 5, count: 187, percentage: 71.4, color: 'green' },
    { stars: 4, count: 45, percentage: 17.2, color: 'light-green' },
    { stars: 3, count: 18, percentage: 6.9, color: 'orange' },
    { stars: 2, count: 8, percentage: 3.1, color: 'red' },
    { stars: 1, count: 4, percentage: 1.5, color: 'red' }
  ];

  const analyticsData = {
    productName: 'DMD Clothing Product',
    averageRating: 4.8,
    totalReviews: 262,
    verifiedReviews: 218,
    verifiedPercentage: 83.2,
    recentReviews: 13,
    ratingBreakdown: ratingBreakdown,
    satisfactionRate: 89,
    neutralRate: 7,
    criticalRate: 5
  };

  useEffect(() => {
    // Animate live counters
    const animateCounters = () => {
      const targets = {
        totalReviews: 262,
        verifiedReviews: 218,
        recentReviews: 13
      };

      Object.keys(targets).forEach(key => {
        const target = targets[key];
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setLiveCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 50);
      });
    };

    animateCounters();
  }, []);

  const filteredReviews = reviews.filter(review => {
    if (filter === 'excellent') return review.rating >= 4.5;
    if (filter === 'great') return review.rating >= 4.0 && review.rating < 4.5;
    if (filter === 'verified') return review.isVerified;
    return true;
  });

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const paginatedReviews = filteredReviews.slice(startIndex, startIndex + reviewsPerPage);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="reviews-section-modern">
      {/* Detailed Analytics Section */}
      <div className="analytics-section">
        <div className="analytics-header">
          <h3 className="analytics-title">Detailed Analytics</h3>
          <button 
            className="view-insights-btn"
            onClick={() => setIsModalOpen(true)}
          >
            View Insights
            <span className="insights-icon">📊</span>
          </button>
        </div>
        <div className="analytics-chart">
          {ratingBreakdown.map((item, index) => {
            const stars = 5 - index;
            return (
              <div key={stars} className="chart-row">
                <div className="chart-stars">
                  {[...Array(stars)].map((_, i) => (
                    <span key={i} className="chart-star filled">★</span>
                  ))}
                  {[...Array(5 - stars)].map((_, i) => (
                    <span key={i} className="chart-star">★</span>
                  ))}
                </div>
                <div className="chart-bar-container">
                  <div 
                    className={`chart-bar ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <div className="chart-stats">
                  <span className="chart-count">{item.count} reviews</span>
                  <span className="chart-percentage">{item.percentage}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="customer-reviews-section">
        <div className="reviews-header-modern">
          <div className="header-left">
            <h2 className="reviews-title-modern">Customer Reviews</h2>
            <div className="overall-rating-modern">
              <span className="rating-number-modern">4.3</span>
              <div className="rating-stars-modern">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="star-filled">★</span>
                ))}
                <span className="star-half">★</span>
              </div>
            </div>
            <div className="total-reviews-text">{liveCounters.totalReviews} REVIEWS</div>
          </div>
        </div>

        {/* Filters and View Toggle */}
        <div className="reviews-controls">
          <div className="filters-group">
            <select className="sort-dropdown">
              <option>Most Recent</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
              <option>Most Helpful</option>
            </select>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                Show All
              </button>
              <button 
                className={`filter-btn ${filter === 'excellent' ? 'active' : ''}`}
                onClick={() => setFilter('excellent')}
              >
                Excellent
              </button>
              <button 
                className={`filter-btn ${filter === 'great' ? 'active' : ''}`}
                onClick={() => setFilter('great')}
              >
                Great
              </button>
              <button 
                className={`filter-btn ${filter === 'verified' ? 'active' : ''}`}
                onClick={() => setFilter('verified')}
              >
                Verified
              </button>
            </div>
          </div>
          <div className="view-toggle">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List View
            </button>
          </div>
        </div>

        <div className="reviews-count-text">
          Showing {startIndex + 1}-{Math.min(startIndex + reviewsPerPage, filteredReviews.length)} of {filteredReviews.length} reviews
        </div>

        {/* Reviews Grid/List */}
        <div className={`reviews-container ${viewMode}`}>
          {paginatedReviews.map((review) => (
            <div key={review.id} className="review-card-modern">
              <div className="review-card-header">
                <div className="reviewer-avatar">
                  {review.initial || getInitials(review.name)}
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-name-modern">{review.name}</div>
                  {review.isTopReviewer && (
                    <div className="top-reviewer-badge">Top Reviewer</div>
                  )}
                  <div className="review-time">{review.timeAgo}</div>
                </div>
                <div className="product-icon">{review.productIcon}</div>
              </div>
              <div className="review-rating-modern">
                <div className="review-stars-modern">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`review-star ${i < Math.floor(review.rating) ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-value-modern">{review.rating}</span>
              </div>
              <h4 className="review-title">{review.comment.split('.')[0]}</h4>
              <p className="review-text-modern">{review.comment}</p>
              <button className="read-more-link">More</button>
              <div className="review-engagement">
                <button className="engagement-btn">
                  👍 {review.likes}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="pagination-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`pagination-number ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Social Proof Widget */}
      <div className="social-proof-widget">
        <div className="proof-item">
          <div className="proof-icon">🔥</div>
          <div className="proof-text">
            <div className="proof-value">{liveCounters.recentReviews}</div>
            <div className="proof-label">Reviews this month</div>
          </div>
        </div>
        <div className="proof-item">
          <div className="proof-icon">✓</div>
          <div className="proof-text">
            <div className="proof-value">{liveCounters.verifiedReviews}</div>
            <div className="proof-label">Verified purchases</div>
          </div>
        </div>
        <div className="proof-item">
          <div className="proof-icon">⭐</div>
          <div className="proof-text">
            <div className="proof-value">4.8</div>
            <div className="proof-label">Average rating</div>
          </div>
        </div>
      </div>

      <ReviewInsightsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        analyticsData={analyticsData}
      />
    </div>
  );
};

export default ReviewsSection;

