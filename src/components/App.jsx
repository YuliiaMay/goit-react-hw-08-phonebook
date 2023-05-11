import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/authSlice/operations";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage/PhonebookPage'));
// const ContactDetails = lazy(() => import('pages/ContactDetails/ContactDetails'));
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
              <Route path="/register" element={
                <RestrictedRoute redirectTo="/phonebook" component={<RegisterPage />} />
              } />
              <Route path="/login" element={
                <RestrictedRoute redirectTo="/phonebook" component={<LoginPage />} />
              } />
          
              <Route path="/phonebook" element={
                  <PrivateRoute redirecrTo="/login" component={<PhonebookPage />} />
              } />
              {/* <Route path="/phonebook/:contact" element={<ContactDetails />} /> */}

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
      );
};
