import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Pages
import {
  LandingPage,
  ContactPage,
  WishlistPage,
  AboutPage,
  AccountPage,
  AdminPage,
  CategoriesPage,
  ItemPage,
  LogInPage,
  RegisterPage,
} from './pages';

// Components
import LayoutComponent from './components/layouts/BaseLayout/Layout';
import Footer from './components/Footer/Footer';

// Styles

import './assets/css/reset.css';
import './App.css';
import AdminLayout from './components/layouts/AdminLayout/AdminLayout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        </Route>
        <Route
          path={ROUTES.CATEGORIES}
          element={<CategoriesPage />}
        />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.ITEMS} element={<ItemPage />} />
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.LOGIN} element={<LogInPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
