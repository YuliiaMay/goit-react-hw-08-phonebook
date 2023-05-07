import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFound from "pages/NotFound/NotFound";
import PhonebookPage from "pages/PhonebookPage/PhonebookPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";


export default function App() {
  const dispatch = useDispatch();
  console.log(dispatch);



  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/phonebook"></Link>
      </nav>

      <Routes>
        <Route path="/" index element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        


        <Route path="/phonebook" element={<PhonebookPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        
    </div>
    );
};
