import { TypedUseSelectorHook, createDispatchHook, createSelectorHook } from 'react-redux';
import { ActionDispatch, RootState } from './store';
import centralContext from './context';

const useSelector = createSelectorHook(centralContext);
const useDispatch = createDispatchHook(centralContext);

export const useActionDispatcher = () => useDispatch<ActionDispatch>();
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;
