import { Suspense } from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import { lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import Layout from "@/shared/layouts";
import { templatesRoute } from "@/routes/modules";
import NavigateComponent from "@/shared/components/Navigate/Navigate";

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
            <NavigateComponent />
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
