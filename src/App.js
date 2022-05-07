import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import Blog from "./components/Blog/Blog";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import ManageItem from "./components/ManageItem/ManageItem";
import MyItems from "./components/MyItems/MyItems";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PassReset from "./components/PassReset/PassReset";
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
        <Route path="/resetPass" element={<PassReset></PassReset>}></Route>
        <Route path="/inventory/:_id" element={
          <ProtectedRoute>
            <ManageItem></ManageItem>
          </ProtectedRoute>}>
        </Route>
        <Route path="/manage_inventory" element={
          <ProtectedRoute>
            <ManageInventory></ManageInventory>
          </ProtectedRoute>}>
        </Route>
        <Route path="/addItem" element={
          <ProtectedRoute>
            <AddItem></AddItem>
          </ProtectedRoute>}>
        </Route>
        <Route path="/myItems" element={
          <ProtectedRoute>
            <MyItems></MyItems>
          </ProtectedRoute>}>
        </Route>
          <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
