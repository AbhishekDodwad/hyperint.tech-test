import React, { useEffect, useState } from 'react';
import './ReviewInsightsModal.css';

const ReviewInsightsModal = ({ isOpen, onClose, analyticsData }) => {
  const [animatedValues, setAnimatedValues] = useState({
    averageRating: 0,
    totalReviews: 0,
    verifiedReviews: 0,
    recentReviews: 0,
    satisfactionRate: 0,
    neutralRate: 0,
    criticalRate: 0
  });

  useEffect(() => {
    if (isOpen) {
      // Animate counters
      const duration = 1500;
      const steps = 60;
      const interval = duration / steps;
      
      Object.keys(animatedValues).forEach(key => {
        const target = analyticsData[key] || 0;
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, interval);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const ratingBreakdown = analyticsData.ratingBreakdown || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="review-insights-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Review Insights</h2>
            <p className="modal-subtitle">Detailed analytics for {analyticsData.productName || 'product'} reviews</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {/* Summary Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{animatedValues.averageRating.toFixed(1)}</div>
              <div className="stat-label">Average Rating</div>
              <div className="stat-stars">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`stat-star ${i < Math.floor(analyticsData.averageRating) ? 'filled' : i < analyticsData.averageRating ? 'half' : ''}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-value">{animatedValues.totalReviews}</div>
              <div className="stat-label">Total Reviews</div>
              <div className="stat-progress-bar">
                <div 
                  className="stat-progress-fill orange" 
                  style={{ width: `${(animatedValues.totalReviews / 300) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-value green">{animatedValues.verifiedReviews}</div>
              <div className="stat-label">Verified Reviews</div>
              <div className="stat-percentage">{analyticsData.verifiedPercentage || 0}%</div>
              <div className="stat-progress-bar">
                <div 
                  className="stat-progress-fill green" 
                  style={{ width: `${analyticsData.verifiedPercentage || 0}%` }}
                ></div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-value blue">{animatedValues.recentReviews}</div>
              <div className="stat-label">Recent Reviews</div>
              <div className="stat-subtitle">Last 30 days</div>
              <div className="stat-chart">
                {[...Array(7)].map((_, i) => (
                  <div 
                    key={i} 
                    className="stat-bar" 
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Rating Breakdown */}
          <div className="rating-breakdown-section">
            <h3 className="section-title">Detailed Rating Breakdown</h3>
            <div className="breakdown-list">
              {ratingBreakdown.map((item, index) => {
                const stars = 5 - index;
                return (
                  <div key={stars} className="breakdown-item">
                    <div className="breakdown-stars">
                      {[...Array(stars)].map((_, i) => (
                        <span key={i} className="breakdown-star filled">★</span>
                      ))}
                      {[...Array(5 - stars)].map((_, i) => (
                        <span key={i} className="breakdown-star">★</span>
                      ))}
                    </div>
                    <div className="breakdown-bar-container">
                      <div 
                        className={`breakdown-bar ${item.color || 'green'}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="breakdown-stats">
                      <span className="breakdown-percentage">{item.percentage}%</span>
                      <span className="breakdown-count">{item.count} reviews</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Analysis */}
          <div className="review-analysis-section">
            <div className="analysis-card satisfaction">
              <div className="analysis-value green">{animatedValues.satisfactionRate}%</div>
              <div className="analysis-label">Satisfaction Rate</div>
              <div className="analysis-subtitle">4-5 star reviews</div>
            </div>
            <div className="analysis-card neutral">
              <div className="analysis-value orange">{animatedValues.neutralRate}%</div>
              <div className="analysis-label">Neutral Reviews</div>
              <div className="analysis-subtitle">3 star reviews</div>
            </div>
            <div className="analysis-card critical">
              <div className="analysis-value red">{animatedValues.criticalRate}%</div>
              <div className="analysis-label">Critical Reviews</div>
              <div className="analysis-subtitle">1-2 star reviews</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewInsightsModal;

