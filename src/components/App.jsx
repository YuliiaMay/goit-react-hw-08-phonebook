import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import NotFound from "pages/NotFound/NotFound";
import PhonebookPage from "pages/PhonebookPage/PhonebookPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactDetails from "pages/ContactDetails/ContactDetails";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/phonebook" element={<PhonebookPage />}>
            <Route path="create-contact" element={<ContactsForm />} />
          </Route>
          {/* <Route path="/phonebook" element={<PhonebookPage />} /> */}
          <Route path="/phonebook/:contact" element={<ContactDetails />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
        
    </div>
    );
};
