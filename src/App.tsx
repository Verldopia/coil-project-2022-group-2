import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

// Pages
import {
  LandingPage,
  ContactPage,
  WishlistPage,
  AboutPage,
  AccountPage,
  CategoriesPage,
  ItemPage,
  LoginPage,
  RegisterPage,
} from './pages';
import {
  AdminLandingPage,
  AdminLoginPage,
  AdminLivePage,
  AdminAdministrationPage,
  AdminContentPage,
  AdminContentApprovalPage,
  AdminStockPage,
  AdminShippingPage,
  AdminPaymentsPage,
  AdminDiscountPage,
  AdminCustomersPage,
} from './pages/Admin';

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
        <Route element={<FormLayout />}>
          <Route
            path={ROUTES.ADMINLogin}
            element={<AdminLoginPage />}
          />
        </Route>

        {/* Admin layout */}
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN} element={<AdminLandingPage />} />
          <Route
            path={ROUTES.ADMINLive}
            element={<AdminLivePage />}
          />
          <Route
            path={ROUTES.ADMINAdministration}
            element={<AdminAdministrationPage />}
          />
          <Route
            path={ROUTES.ADMINContent}
            element={<AdminContentPage />}
          />
          <Route
            path={ROUTES.ADMINContentApproval}
            element={<AdminContentApprovalPage />}
          />
          <Route
            path={ROUTES.ADMINStock}
            element={<AdminStockPage />}
          />
          <Route
            path={ROUTES.ADMINShipping}
            element={<AdminShippingPage />}
          />
          <Route
            path={ROUTES.ADMINPayments}
            element={<AdminPaymentsPage />}
          />
          <Route
            path={ROUTES.ADMINDiscount}
            element={<AdminDiscountPage />}
          />
          <Route
            path={ROUTES.ADMINCustomers}
            element={<AdminCustomersPage />}
          />
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
