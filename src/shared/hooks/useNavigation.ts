import { NavigateFunction } from 'react-router-dom'
import { router } from '@/routes'

export let globalNavigate: NavigateFunction;

export const useNavigation  = () => {
  globalNavigate = router.navigate;

  return globalNavigate;
};
