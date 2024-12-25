import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSlider } from './components/ServiceSlider';
import { Services } from './components/Services';
import { PricingPlans } from './components/PricingPlans';
import { About } from './components/About';
import { InstagramCTA } from './components/InstagramCTA';
import { Footer } from './components/Footer';
import { LoginForm } from './components/LoginForm';
import { CheckoutForm } from './components/CheckoutForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServiceSlider />
                <Services />
                <PricingPlans />
                <About />
                <InstagramCTA />
              </>
            } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/checkout/:plan" element={<CheckoutForm planUrl="" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;