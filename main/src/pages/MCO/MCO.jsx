import { useState } from 'react';
import './MCO.css';
import Activity1 from '../Activities/Activity1/Activity1';
import Activity2 from '../Activities/Activity2/Activity2';
import Activity3 from '../Activities/Activity3/Activity3';
import Activity4 from '../Activities/Activity4/Activity4';

const MCO = () => {
  const [activeActivity, setActiveActivity] = useState('home');

  const renderContent = () => {
    switch(activeActivity) {
      case 'activity1':
        return <Activity1 />;
      case 'activity2':
        return <Activity2 />;
      case 'activity3':
        return <Activity3 />;
      case 'activity4':
        return <Activity4 />;
      default:
        return (
          <div className="mco-home">
            <div className="hero-section">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Final Term Output
              </div>
              <h1 className="hero-title">
                Comprehensive
                <span className="hero-highlight"> React Activities</span>
              </h1>
              <p className="hero-subtitle">
                A complete compilation of all React activities showcasing components,
                props, state management, hooks, and API integration.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">04</div>
                  <div className="stat-label">Activities</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Complete</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">✓</div>
                  <div className="stat-label">Verified</div>
                </div>
              </div>
            </div>

            <div className="activities-showcase">
              <div className="section-header">
                <div className="section-line"></div>
                <div className="section-text">
                  <span className="section-subtitle">Explore</span>
                  <h2>Select an Activity</h2>
                </div>
                <div className="section-line"></div>
              </div>
              
              <div className="activities-grid">
                <div className="activity-item" onClick={() => setActiveActivity('activity1')}>
                  <div className="activity-number">01</div>
                  <div className="activity-info">
                    <h3>Activity 1</h3>
                    <p>Basic React Component</p>
                    <div className="activity-tags">
                      <span className="tag">Component</span>
                      <span className="tag">JSX</span>
                      <span className="tag">Rendering</span>
                    </div>
                  </div>
                  <div className="view-indicator">
                    <span>View Activity</span>
                    <div className="arrow"></div>
                  </div>
                </div>

                <div className="activity-item" onClick={() => setActiveActivity('activity2')}>
                  <div className="activity-number">02</div>
                  <div className="activity-info">
                    <h3>Activity 2</h3>
                    <p>Props and State Management</p>
                    <div className="activity-tags">
                      <span className="tag">Props</span>
                      <span className="tag">State</span>
                      <span className="tag">useState</span>
                      <span className="tag">Events</span>
                    </div>
                  </div>
                  <div className="view-indicator">
                    <span>View Activity</span>
                    <div className="arrow"></div>
                  </div>
                </div>

                <div className="activity-item" onClick={() => setActiveActivity('activity3')}>
                  <div className="activity-number">03</div>
                  <div className="activity-info">
                    <h3>Activity 3</h3>
                    <p>Anime List with JSON Data</p>
                    <div className="activity-tags">
                      <span className="tag">JSON</span>
                      <span className="tag">Fetch</span>
                      <span className="tag">Mapping</span>
                      <span className="tag">useEffect</span>
                    </div>
                  </div>
                  <div className="view-indicator">
                    <span>View Activity</span>
                    <div className="arrow"></div>
                  </div>
                </div>

                <div className="activity-item" onClick={() => setActiveActivity('activity4')}>
                  <div className="activity-number">04</div>
                  <div className="activity-info">
                    <h3>Activity 4</h3>
                    <p>Pokemon API Fetch</p>
                    <div className="activity-tags">
                      <span className="tag">API</span>
                      <span className="tag">Fetch</span>
                      <span className="tag">Async/Await</span>
                      <span className="tag">Loading</span>
                    </div>
                  </div>
                  <div className="view-indicator">
                    <span>View Activity</span>
                    <div className="arrow"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="closing-section">
              <div className="closing-line"></div>
              <p className="closing-text">
                All activities demonstrate core React concepts with practical implementation
              </p>
              <div className="closing-line"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="mco-container">
      <nav className="mco-navbar">
        <div className="nav-brand" onClick={() => setActiveActivity('home')}>
          <div className="brand-logo">
            <div className="brand-text">
              <span className="brand-name">MCCJ.</span>
              <span className="brand-subtitle">React Activities</span>
            </div>
          </div>
        </div>
        <div className="nav-menu">
          <button 
            className={`nav-item ${activeActivity === 'home' ? 'active' : ''}`}
            onClick={() => setActiveActivity('home')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-item ${activeActivity === 'activity1' ? 'active' : ''}`}
            onClick={() => setActiveActivity('activity1')}
          >
            Activity 01
          </button>
          <button 
            className={`nav-item ${activeActivity === 'activity2' ? 'active' : ''}`}
            onClick={() => setActiveActivity('activity2')}
          >
            Activity 02
          </button>
          <button 
            className={`nav-item ${activeActivity === 'activity3' ? 'active' : ''}`}
            onClick={() => setActiveActivity('activity3')}
          >
            Activity 03
          </button>
          <button 
            className={`nav-item ${activeActivity === 'activity4' ? 'active' : ''}`}
            onClick={() => setActiveActivity('activity4')}
          >
            Activity 04
          </button>
        </div>
      </nav>

      <main className="mco-main">
        {renderContent()}
      </main>

      <footer className="mco-footer">
        <div className="footer-divider"></div>
        <div className="footer-content">
          <p className="footer-title">Final Term Comprehensive Output</p>
          <div className="footer-links">
            <span>React 18</span>
            <span className="footer-dot">•</span>
            <span>Components</span>
            <span className="footer-dot">•</span>
            <span>Hooks</span>
            <span className="footer-dot">•</span>
            <span>API Integration</span>
          </div>
          <p className="footer-copyright">All Activities Complete</p>
        </div>
      </footer>
    </div>
  );
};

export default MCO;