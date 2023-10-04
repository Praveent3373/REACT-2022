import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { postActions } from './store';
import { useAppDispatch, useSelector } from './useTypedSelector';

const ReduxApp: FC = () =>  {
   const dispatch = useAppDispatch();
   useEffect(() => {
    dispatch(postActions.getPosts());
  }, [dispatch]);
  
   const {} = useSelector(state => state.posts)
  return (
    <div>ReduxApp</div>
  )
}

export default ReduxApp