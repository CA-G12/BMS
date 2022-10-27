import { message } from 'antd';
import axios from 'axios';
import {
  ReactNode, createContext, FC, useState, useEffect, useMemo,
} from 'react';

interface ChildrenProps {
  children: ReactNode;
}

interface AuthResponse {
  data: Data;
}

interface Data {
  id: number;
  role: string;
}

export const authContext = createContext({});

export const AuthProvider: FC<ChildrenProps> = ({ children }) => {
  const [result, setResult] = useState<Data | null>(null);

  const fetchData = (signal: AbortSignal) => {
    axios.get<AuthResponse>('/', { signal })
      .then(({ data: { data } }) => {
        setResult(data);
      }).catch(() => message.error('حدث خطأ ما'));
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchData(signal);
    return () => controller.abort();
  }, []);

  const passedValue = useMemo(() => ({ result, setResult }), [result]);

  return (
    <authContext.Provider value={passedValue}>{children}</authContext.Provider>
  );
};
