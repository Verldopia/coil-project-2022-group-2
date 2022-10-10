import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Pages
import {
  LandingPage,
  ContactPage,
  AdminLoginPage,
  WishlistPage,
  AboutPage,
  AccountPage,
  AdminPage,
  CategoriesPage,
  ItemPage,
  LoginPage,
  RegisterPage,
} from './pages';

// Layouts
import AdminLayout from './components/.layouts/AdminLayout';
import BaseLayout from './components/.layouts/BaseLayout';
import FormLayout from './components/.layouts/FormLayout';

// Styles
import './assets/css/reset.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        {/* Admin layout */}
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
          <Route element={<FormLayout />}>
            <Route
              path={ROUTES.ADMINLOGIN}
              element={<AdminLoginPage />}
            />
          </Route>
        </Route>

        {/* User layout */}
        <Route element={<BaseLayout />}>
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route
            path={ROUTES.CATEGORIES}
            element={<CategoriesPage />}
          />
          <Route path={ROUTES.ITEMS} element={<ItemPage />} />
          <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
          <Route element={<FormLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route
              path={ROUTES.REGISTER}
              element={<RegisterPage />}
            />
          </Route>
        </Route>

        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;
