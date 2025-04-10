// import React, { Suspense, lazy } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included
// import "bootstrap/dist/js/bootstrap.bundle.min";

// // Lazy load the App component for performance boost
// const App = lazy(() => import("./App"));

// const rootElement = document.getElementById("root");

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <Router>
//         {/* Suspense fallback UI for a smoother experience */}
//         <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
//           {/* Wrapper to prevent bottom navbar from hiding content */}
//           <div className="content-wrapper">
//             <App />
//           </div>
//         </Suspense>
//       </Router>
//     </React.StrictMode>
//   );
// } else {
//   console.error("❌ Error: Root element not found. Check your HTML structure.");
// }


import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Lazy load App component for performance
const App = lazy(() => import("./App"));

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <div className="content-wrapper">
            <App />
          </div>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("❌ Error: Root element not found. Check your HTML structure.");
}
