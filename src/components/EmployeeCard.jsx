import { Link } from 'react-router-dom'

function EmployeeCard({ user }) {
  return (
    <div className="employee-card">
      <img src={user.image} alt={user.firstName} />

      <h3>{user.firstName} {user.lastName}</h3>
      <p>{user.company.title}</p>
      <span>{user.company.department}</span>

      <Link to={`/employees/${user.id}`} className="profile-link">
        View Profile →
      </Link>
    </div>
  )
}

export default EmployeeCard