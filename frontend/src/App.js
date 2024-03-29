import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/client/SignUp/SignUp';
import LoginForm from './components/client/Login/Login';
import ForgotPasswordForm from './components/client/ForgotPassword/ForgotPassword';
import OTPVerificationForm from './components/client/OTPVerification/OTPVerification';
import PasswordResetForm from './components/client/ResetPassword/ResetPassword';
import Home from './pages/client/Home/Home';
import NewsletterForm from './components/client/Login/NewsLatter/NewsLatter';
import Footer from './components/client/Footer/Footer';
import Gallery from './pages/client/Gallary/Gallary';
import ContactForm from './pages/client/Contact_Us/Contact_Us';
import AboutUs from './pages/client/About_Us/About_Us';
import Menu from './pages/client/Menu/Menu';
import ProductDetails from './pages/client/ProductDetails/ProductDetails';
import AddToCartPage from './pages/client/Cart/Cart';
import OrderDetailPage from './pages/client/OrderDetails/OrderDetails';
import PaymentPage from './pages/client/Payment/Payment';
import LoginAdmin from './components/admin/LoginAdmin/AdminLogin';
import Dashboard from './components/admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path='/forgotpassword' element={<ForgotPasswordForm />} />
          <Route path='/otpverification' element={<OTPVerificationForm />} />
          <Route path='/resetpassword' element={<PasswordResetForm />} />
          <Route path='/newslatter' element={<NewsletterForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/gallary' element={<Gallery />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/details' element={<ProductDetails />} />
          <Route path='/cart' element={<AddToCartPage />} />
          <Route path='/order' element={<OrderDetailPage />} />
          <Route path='/pay' element={<PaymentPage />} />
          <Route path='/adminlogin' element={<LoginAdmin />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
