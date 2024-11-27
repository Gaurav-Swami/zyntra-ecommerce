import AuthLayout from "./components/auth/Layout";
import AuthRegister from "./pages/auth/Register";
import AuthLogin from "./pages/auth/Login";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminFeatures from "./pages/admin-view/orders";
import ShoppingLayout from "./pages/shopping-view/layout";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header</h1>

      <Routes>
        {/* auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<AuthRegister />} />
          <Route path="login" element={<AuthLogin />} />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* user routes */}
        <Route path="/shop" element={<ShoppingLayout />}></Route>

        {/* not found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
