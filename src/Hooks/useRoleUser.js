
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../ContextProvider/ContextProvider'
import { axiosSecure } from './useAxiosSecure';
const useRole = () => {
    const {user, loading} = useContext(AuthContext);
  

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`)
      console.log(role)
      return data.role;
    },
  })

  //   Fetch user info using logged in user email

  return [role, isLoading]
}

export default useRole;
