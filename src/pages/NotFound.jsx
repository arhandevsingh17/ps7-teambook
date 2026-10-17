import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, this page doesn't exist.</p>

      <Link to="/">← Back to Home</Link>
    </main>
  )
}

export default NotFound