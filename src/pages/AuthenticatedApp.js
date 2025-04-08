import { BrowserRouter as Router, Route, Routes } from "react-router";

import HomePage from "./HomePage";
import SchedulePage from "./SchedulePage";
import RegistryPage from "./RegistryPage";
import ContactsPage from "./ContactsPage";
import PhotosPage from "./PhotosPage";

import Header from "../components/Header/Header";

export default function AuthenticatedApp({ user }) {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/schedule' element={<SchedulePage />} />
          <Route path='/registry' element={<RegistryPage />} />
          <Route path='/photos' element={<PhotosPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}
