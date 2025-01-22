import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Home from "./pages/home";
import LeadingProgram from "./pages/LeadingProgram";
import { organizationSchema, faqs } from "./scheama";

export const App = () => {

  const jsonLD = [organizationSchema, faqs];

  return (
    <Router>
      <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(jsonLD)}
          </script>
        </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college-admissions-counseling-tech" element={<Home />} />
          <Route
            path="/college-admissions-counseling-tech-2"
            element={<LeadingProgram />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
