import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFound from "pages/NotFound/NotFound";
import PhonebookPage from "pages/PhonebookPage/PhonebookPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactDetails from "pages/ContactDetails/ContactDetails";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { refreshUser } from "redux/authSlice/operations";


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  
  return isRefreshing 
      ? (<b>Refreshing user...</b>)
      : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/phonebook" element={<PhonebookPage />}>
                <Route path="create-contact" element={<ContactsForm />} />
              </Route>
              {/* <Route path="/phonebook" element={<PhonebookPage />} /> */}
              {/* <Route path="/phonebook/:contact" element={<ContactDetails />} /> */}
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      );
};
