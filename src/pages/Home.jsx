import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home home-hero">
      <section className="home-copy">
        <p className="tagline">A BETTER WAY TO KNOW YOUR TEAM</p>

        <h1>
          Great teams start with
          <span> knowing people.</span>
        </h1>

        <p className="intro">
          Find colleagues, explore their roles, and get the
          details you need, all in one place.
        </p>

        <div className="home-actions">
          <Link to="/employees" className="primary-btn">
            Explore Our Team →
          </Link>

          <p className="home-note">
            Simple directory · Clear profiles · Easy to search
          </p>
        </div>
      </section>

      <section className="home-visual" aria-label="TeamBook preview">
        <div className="preview-window">
          <div className="preview-top">
            <span className="preview-dot"></span>
            TEAMBOOK / PEOPLE
          </div>

          <div className="preview-heading">
            <div>
              <p>YOUR WORKSPACE</p>
              <h2>Meet your people</h2>
            </div>

            <span className="preview-count">TEAM</span>
          </div>

          <div className="preview-person">
            <div className="preview-avatar avatar-one">AM</div>
            <div className="preview-person-info">
              <strong>Alex Morgan</strong>
              <span>Product Designer</span>
            </div>
            <span className="preview-dept">Design</span>
          </div>

          <div className="preview-person">
            <div className="preview-avatar avatar-two">JL</div>
            <div className="preview-person-info">
              <strong>Jamie Lee</strong>
              <span>Software Engineer</span>
            </div>
            <span className="preview-dept">Engineering</span>
          </div>

          <div className="preview-person">
            <div className="preview-avatar avatar-three">JS</div>
            <div className="preview-person-info">
              <strong>Jordan Smith</strong>
              <span>Marketing Manager</span>
            </div>
            <span className="preview-dept">Marketing</span>
          </div>

          <div className="preview-footer">
            <span>People make the difference.</span>
            <span className="preview-check">✓</span>
          </div>
        </div>

        <div className="floating-note">
          <span className="note-check">✓</span>
          <div>
            <strong>Everything in one place</strong>
            <span>People, roles and contact details</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home