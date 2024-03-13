import { createBrowserRouter } from "react-router-dom";
import Main from "@pages/view/Main";
import BaseLIst from "@pages/view/BaseLIst";
import BaseListForm from "@pages/form/BaseListForm";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/BaseLIst",
      element: <BaseLIst />,
    },
    {
      path: "/BaseListForm",
      element: <BaseListForm />,
    },
  ],
  { basename: "/" }
);

export default router;
