import { useState, useEffect } from 'react'
import EmployeeCard from '../components/EmployeeCard'

function Employees() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await fetch(
          'https://dummyjson.com/users?limit=30'
        )

        if (!response.ok) {
          throw new Error('Could not load employees')
        }

        const data = await response.json()
        setUsers(data.users)
      } catch (err) {
        setError('Something went wrong while loading employees.')
      } finally {
        setLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`

    return fullName.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main className="employees-page">
      <div className="directory-heading">
  <div>
    <p className="tagline">PEOPLE DIRECTORY</p>
    <h1>Meet the team.</h1>
    <p className="page-intro">
      Get to know the people, roles, and teams behind the work.
    </p>
  </div>

  <div className="directory-count">
    <strong>{filteredUsers.length}</strong>
    <span>People found</span>
  </div>
</div>

<div className="directory-toolbar">
  <input
    className="search-input"
    type="text"
    placeholder="⌕  Search by employee name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      {loading && <p>Loading employees...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <div className="employee-grid">
            {filteredUsers.map((user) => (
              <EmployeeCard key={user.id} user={user} />
            ))}
          </div>

          {filteredUsers.length === 0 && (
            <p>No employees found.</p>
          )}
        </>
      )}
    </main>
  )
}

export default Employees