import React from 'react'

interface DashboardProps {
  user: string
}

const Dashboard = ( {user}:DashboardProps) => {
  return (
    <div>
      <h3>Dashboard</h3>
      <h5>Welcome {user}</h5>
    </div>
  )
}

export default Dashboard