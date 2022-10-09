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

// Layouts
import AdminLayout from './components/layouts/AdminLayout/AdminLayout';
import BaseLayout from './components/layouts/BaseLayout/BaseLayout';

// Styles
import './assets/css/reset.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN} element={<AdminPage />} />
        </Route>
        <Route element={<BaseLayout />}>
          <Route
            path={ROUTES.CATEGORIES}
            element={<CategoriesPage />}
          />
          <Route path={ROUTES.ITEMS} element={<ItemPage />} />
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.LOGIN} element={<LogInPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
        </Route>

        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
      </Routes>
    </>
  );
}

export default App;
