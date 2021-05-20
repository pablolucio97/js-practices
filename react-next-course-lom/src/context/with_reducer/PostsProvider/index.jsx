import { PostsContext } from './context';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';

export const PostsProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{postState, postDispatch}}>
        {children}
    </PostsContext.Provider>
  );
};
