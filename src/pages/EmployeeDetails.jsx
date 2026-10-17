import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function EmployeeDetails() {
  const { id } = useParams()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchEmployee() {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(
          `https://dummyjson.com/users/${id}`
        )

        if (!response.ok) {
          throw new Error('Could not load employee')
        }

        const data = await response.json()
        setUser(data)
      } catch {
        setError('Could not load employee. Please try again.')
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchEmployee()
  }, [id])

  if (loading) {
    return <p>Loading employee...</p>
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
        <Link to="/employees">Back to Employees</Link>
      </main>
    )
  }

  if (!user) {
    return <p>Employee not found.</p>
  }

  return (
  <main className="employee-details">
    <Link to="/employees">← Back to Employees</Link>

    <div className="profile">
      <div className="profile-header">
        <img src={user.image} alt={user.firstName} />

        <div>
          <h1>{user.firstName} {user.lastName}</h1>
          <p>{user.company.title}</p>
          <p>{user.company.department}</p>
        </div>
      </div>

      <div className="profile-info">
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>City:</strong> {user.address.city}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>
    </div>
  </main>
)
}

export default EmployeeDetails