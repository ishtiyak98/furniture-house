import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import ManageItem from "./components/ManageItem/ManageItem";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SignupPage from "./components/SignupPage/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/inventory/:_id" element={
          <ProtectedRoute>
            <ManageItem></ManageItem>
          </ProtectedRoute>}>
        </Route>
        <Route path="/manage_inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
