import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import ProductPage from './pages/ProductPage/ProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { useDispatch } from 'react-redux';
import authService from './app/services/auth/AuthService';
import './scss/app.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (authService.isExpired() === false) {
      const token = authService.getToken();
      authService.saveToken(token, dispatch);

      authService.refreshToken(token).then((response) => {
        if (!response) {
          return;
        }

        console.log('token is refreshed');

        authService.saveToken(response.data.token, dispatch);
      });
    }
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} exact />
          <Route path={'/store'} element={<ProductsPage />} exact />
          <Route path={'/product/:id'} element={<ProductPage />} exact />
          <Route path={'/about'} element={<AboutUs />} exact />
          <Route path={'/contact'} element={<ContactPage />} exact />
          <Route path={'/login'} element={<LoginPage />} exact />
          <Route path={'/register'} element={<RegisterPage />} exact />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
