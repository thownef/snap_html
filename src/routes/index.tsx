import { Suspense } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { ModuleName, PageName } from "@/shared/core/enum/page.enum";
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import Layout from "@/shared/layouts";
import { templatesRoute } from "@/routes/modules";

const configRoutes: RouteObject[] = [
  {
    path: "/",
    element: (
        <Layout />
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="loading...">
            {lazyLoadModuleRoute(ModuleName.HOME, PageName.HOME)}
          </Suspense>
        ),
      },
      ...templatesRoute,
    ],
  },
  {
    path: "*",
    element: lazyLoadRoute("NotFound"),
  },
];

const router = createBrowserRouter(configRoutes);

const RoutesApp = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
