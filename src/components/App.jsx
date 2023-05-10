import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/authSlice/operations";


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage/PhonebookPage'));
const ContactsForm = lazy(() => import('../components/ContactsForm/ContactsForm'));
const ContactDetails = lazy(() => import('pages/ContactDetails/ContactDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'))


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

              <Route path="/phonebook/:contact" element={<ContactDetails />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      );
};
