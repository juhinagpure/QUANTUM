// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import AboutUs from "./pages/AboutUsPage";
// import BlogPage from "./pages/BlogPage";
// import CareerPage from "./pages/CareersPage";
// import ContactPage from "./pages/ContactPage";
// import HomePage from "./pages/HomePage";

// // Import Service Components - ALL SERVICES
// import Development from "./components/ServicesComps/Development/Development";

// import PersonalBranding from "./components/ServicesComps/PersonalBranding/PersonalBranding";
// import SocialMedia from "./components/ServicesComps/SocialMedia/SocialMedia";

// // ✅ Correct Import for the Page
// import PayPerClickPage from "./pages/PayPerClickPage";
// import SearchEngine from "./pages/SearchEnginePage";

// // 👇 Add this import
// import ScrollToTop from "./ScrollToTop";

// const App = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="/career" element={<CareerPage />} />

//         {/* All Service Routes */}
//         {/* <Route path="/services/userEx" element={<UserEx />} /> */}
//         <Route path="/services/development" element={<Development />} />
//         <Route path="/services/seo" element={<SearchEngine />} />
//         <Route path="/services/smm" element={<SocialMedia />} />
//         <Route path="/services/pay-per-click" element={<PayPerClickPage />} />

//         <Route
//           path="/services/personal-branding"
//           element={<PersonalBranding />}
//         />

//         {/* Fallback route */}
//         <Route
//           path="*"
//           element={
//             <div style={{ padding: "50px", textAlign: "center" }}>
//               Page Not Found - 404
//             </div>
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import ScrollToTop from "./ScrollToTop";

import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import CareerPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

import Development from "./components/ServicesComps/Development/Development";
import PersonalBranding from "./components/ServicesComps/PersonalBranding/PersonalBranding";
import SocialMedia from "./components/ServicesComps/SocialMedia/SocialMedia";
import PayPerClickPage from "./pages/PayPerClickPage";
import SearchEngine from "./pages/SearchEnginePage";

const App = () => {
  const location = useLocation();

  // ✅ These routes should NOT have top padding
  const fullTopRoutes = [
    "/services/seo",
    "/services/smm",
    "/services/pay-per-click",
    "/services/personal-branding",
  ];

  const noPadding = fullTopRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Header />

      {/* Apply pt-20 to all pages except the ones listed above */}
      <div className={noPadding ? "" : "pt-20"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/career" element={<CareerPage />} />

          {/* Services Routes */}
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/seo" element={<SearchEngine />} />
          <Route path="/services/smm" element={<SocialMedia />} />
          <Route path="/services/pay-per-click" element={<PayPerClickPage />} />
          <Route
            path="/services/personal-branding"
            element={<PersonalBranding />}
          />

          <Route
            path="*"
            element={
              <div className="p-12 text-center text-xl text-red-400">
                Page Not Found - 404
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
