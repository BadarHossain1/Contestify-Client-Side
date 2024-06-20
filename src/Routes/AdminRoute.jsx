import { Navigate } from 'react-router-dom'


import PropTypes from 'prop-types'
import useRole from '../Hooks/useRoleUser'
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();


  if (isLoading) return <p>Loading</p>
  if (role === 'Admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.element,
}
