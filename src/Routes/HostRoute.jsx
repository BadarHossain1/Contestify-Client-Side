import { Navigate } from 'react-router-dom'


import PropTypes from 'prop-types'
import useRole from '../Hooks/useRoleUser'
const HostRoute = ({ children }) => {
  const [role, isLoading] = useRole();


  if (isLoading) return <p>Loading</p>
  if (role === 'creator') return children
  return <Navigate to='/dashboard' />
}

export default HostRoute;

HostRoute.propTypes = {
  children: PropTypes.element,
}


