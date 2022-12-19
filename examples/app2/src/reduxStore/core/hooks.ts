import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ActionDispatch, RootState } from './store';

export const useActionDispatcher = () => useDispatch<ActionDispatch>();
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
