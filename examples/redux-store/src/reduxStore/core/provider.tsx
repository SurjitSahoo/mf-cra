import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import centralContext from './context';
import { store } from './store';

interface Props {
  children?: ReactNode;
}
export function CentralStoreProvider({ children }: Props) {
  return (
    <Provider context={centralContext} store={store}>
      {children}
    </Provider>
  );
}
