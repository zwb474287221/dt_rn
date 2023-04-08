import React, {useContext, createContext, useState, useEffect, useCallback} from 'react';
import * as api from './service';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext)
};

export const UserProvider = (props) => {
  const [user, setUser] = useState(''); // 用户信息

  // 退出登陆
  const logout = useCallback(() => {
    api.logout();
  }, []);

  const getInfo = useCallback(() => {
    api.getInfo().then(res => {
      if (res.code === 0) {
        setUser(res.data);
      }
    })
  }, []);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        getInfo
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
