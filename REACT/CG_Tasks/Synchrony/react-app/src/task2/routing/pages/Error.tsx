import { useLocation } from 'react-router-dom'

const Error = () => {
  const location = useLocation();
  return (
    <div>
      <h3>{location.pathname} is Not Found</h3>
    </div>
  )
}

export default Error