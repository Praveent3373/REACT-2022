import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'
const UserView = () => {
  const user = useSelector((state) => state.user );
  console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h2>Users</h2>
        {user.loading && <h2>Loading...</h2>}
        {!user.loading && user.error? <h2>Error: {user.error}</h2> : null}
        {!user.loading && user.users.length ? (
          <ul>
              {
                user.users.map(item => (
                  <li key={item.id}> {item.name} </li>
                ))
              }
          </ul>
        ): null}
    </div>
  )
}

export default UserView;