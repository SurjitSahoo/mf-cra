import { createContext } from 'react';
import { ReactReduxContextValue } from 'react-redux';

// @ts-ignore
export const centralContext = createContext<ReactReduxContextValue>(null);
export default centralContext;
