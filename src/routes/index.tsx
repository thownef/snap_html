import { lazy, Suspense } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import Layout from "@/shared/layouts";
import { templatesRoute } from "@/routes/modules";
const NavigateComponent = lazy(() => import("@/shared/components/Navigate/Navigate"));
import { PageName } from "@/shared/core/enum/page.enum";
import { ModuleName } from "@/shared/core/enum/page.enum";
import { PagePath } from "@/shared/core/enum";
import ValidateLoginRoute from "@/routes/ValidateLoginRoute";
import PrivateRoute from "@/routes/PrivateRoute";
import AdminLayout from "@/modules/admin/layouts";

const configRoutes: RouteObject[] = [
  {
    path: PagePath.LOGIN,
    element: (
      <ValidateLoginRoute>
        {lazyLoadModuleRoute(ModuleName.AUTH, PageName.LOGIN)}
      </ValidateLoginRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...">
            <NavigateComponent />
          </Suspense>
        ),
      },
      ...templatesRoute,
    ],
  },
  
  {
    path: PagePath.ADMIN,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...">
            {lazyLoadModuleRoute(ModuleName.ADMIN, PageName.ADMIN)}
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: lazyLoadRoute("NotFound"),
  },
];

export const router = createBrowserRouter(configRoutes);
