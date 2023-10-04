import {useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;