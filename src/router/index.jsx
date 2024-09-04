import Main from "@pages/view/Main";
import BaseLIst from "@pages/view/BaseLIst";
import BaseListForm from "@pages/form/BaseListForm";
import DeleteDataGuide from "@pages/view/DeleteDataGuide";
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
    {
      path: "/DeleteDataGuide",
      element: <DeleteDataGuide />,
    },
  ],
  { basename: "/" }
);

export default router;
