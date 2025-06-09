import { lazyLoadModuleRoute } from "@/routes/LazyLoadRoutes";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum";
import { navigateWithRole } from "@/shared/utils";
import { Navigate, useLocation } from "react-router-dom";

const NavigateComponent = () => {
  const location = useLocation();

  if (location.pathname === PagePath.HOME) return lazyLoadModuleRoute(ModuleName.TEMPLATE, PageName.TEMPLATE);

  const path = navigateWithRole();

  return <Navigate state={{ from: location }} to={path} />;
};

export default NavigateComponent;
