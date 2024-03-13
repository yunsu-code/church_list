import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "@pages/view/Main";
import BaseLIst from "@pages/view/BaseLIst";
import BaseListForm from "@pages/form/BaseListForm";

function App() {
  return (
    <Routes>
      <Route exact path="/church_list" element={<Main />} />
      <Route exact path="/BaseLIst" element={<BaseLIst />} />
      <Route exact path="/BaseListForm" element={<BaseListForm />} />
    </Routes>
  );
}

export default App;
