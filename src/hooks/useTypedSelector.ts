import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/indexReducer';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
