import { NavigateFunction, useNavigate } from 'react-router-dom'

export let globalNavigate: NavigateFunction;

export const useNavigation  = () => {
  globalNavigate = useNavigate();

  return globalNavigate;
};
