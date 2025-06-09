
import { lazyLoadModuleRoute, lazyLoadRoute } from "@/routes/LazyLoadRoutes";
import { ModuleName, PageName, PagePath } from "@/shared/core/enum/page.enum";

export const templatesRoute = [
  {
    path: PagePath.TEMPLATE_FORM,
    element: lazyLoadRoute("Base"),
    children: [
      {
        path: "",
        element: lazyLoadModuleRoute(ModuleName.TEMPLATE, PageName.TEMPLATE_FORM),
      },
    ],
  },
];
