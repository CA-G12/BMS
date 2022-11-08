import { Spin } from 'antd';
import axios from 'axios';
import {
  ReactNode, createContext, FC, useState, useEffect, useMemo,
} from 'react';

interface ChildrenProps {
  children: ReactNode;
}

interface User {
  id: number;
  role: string;
  fullName: string;
}

export interface UserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const authContext = createContext<UserContext | null>(null);

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await axios.get<User>('/api/v1/auth/userdata');
        const userInfo = data.data;
        setUser(userInfo);
        setLoading(false);
      } catch (err) {
        setUser(null);
        setLoading(false);
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUser();
  }, []);

  const passedValue = useMemo(() => ({
    user, setUser,
  }), [user]);
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

    );
  }
  return (
    <authContext.Provider value={passedValue}>{children}</authContext.Provider>
  );
};
