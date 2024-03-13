import { createBrowserRouter } from "react-router-dom";
import Main from "@pages/view/Main";
import BaseLIst from "@pages/view/BaseLIst";
import BaseListForm from "@pages/form/BaseListForm";

const router = createBrowserRouter(
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
  { basename: "/church_list" }
);

export default router;
