import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import SEO from "./components/seo/SEO";
import Home from "./pages/Home";
import CampusOverview from "./pages/CampusOverview";
import AboutPage from "./pages/AboutPage";
import CampusAdmissionsPage from "./pages/CampusAdmissionsPage";
import AcademicsPage from "./pages/AcademicsPage";
import FAQs from "./pages/FAQs";
import LegacyPage from "./pages/LegacyPage";
import ContactPage from "./pages/Contact";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-primary text-light font-body">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout><Home /></HomeLayout>} />
          <Route path="/campus-overview" element={<HomeLayout><CampusOverview /></HomeLayout>} />
          <Route path="/home1" element={<Navigate to="/campus-overview" replace />} />
          <Route path="/aboutpage" element={<DefaultLayout><AboutPage /></DefaultLayout>} />
          <Route path="/contact" element={<DefaultLayout><ContactPage /></DefaultLayout>} />
          <Route path="/faqs" element={<DefaultLayout><FAQs /></DefaultLayout>} />
          <Route path="/academics" element={<DefaultLayout><AcademicsPage /></DefaultLayout>} />
          <Route path="/admissions" element={<DefaultLayout><CampusAdmissionsPage /></DefaultLayout>} />
          <Route path="/academicspage" element={<Navigate to="/academics" replace />} />
          <Route path="/campusadmissionspage" element={<Navigate to="/admissions" replace />} />
          <Route path="/legacypage" element={<DefaultLayout><LegacyPage /></DefaultLayout>} />
          <Route path="*" element={
            <DefaultLayout>
              <>
                <SEO
                  title="Page Not Found"
                  description="The requested page could not be found on Ali Public School Premier."
                  canonicalPath="/"
                  noindex
                  ogImage="/favicon.png"
                />
                <div className="min-h-screen flex items-center justify-center py-20">
                  <div className="text-center">
                    <h1 className="text-5xl text-secondary mb-4">404</h1>
                    <p className="text-gray-300">Page Not Found</p>
                  </div>
                </div>
              </>
            </DefaultLayout>
          } />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
