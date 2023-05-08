import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFound from "pages/NotFound/NotFound";
import PhonebookPage from "pages/PhonebookPage/PhonebookPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


export default function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/phonebook" element={<PhonebookPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
        
    </div>
    );
};
