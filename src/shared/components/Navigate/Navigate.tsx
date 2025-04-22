import { PagePath } from "@/shared/core/enum";
import { Navigate, useLocation } from "react-router-dom";

const NavigateComponent = () => {
  const location = useLocation();

  const path = PagePath.TEMPLATE;

  return <Navigate state={{ from: location }} to={path} />;
};

export default NavigateComponent;
