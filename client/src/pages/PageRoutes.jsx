import React, { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Preloader from "../components/Preloader";
import TopSlider from "../components/TopSlider";
import { lazyImportRetry } from "../store/requestMethods";
import AdminRoutes from "./admin/AdminRoutes";
// import SProutes from "./SP/SProutes";
// import SPLogin from "./SP/SPLogin";
// import SPRegister from "./SP/SPRegister";
// import Home from "./Home";
// import Page404 from "./Page404";
// import Auth from "./Auth";
// import ServiceProviders from "./ServiceProviders";
// import ServiceProvider from "./ServiceProvider";

// const Home = lazy(() =>
//   import("./Home").then((module) => {
//     console.log(module.default);
//     return module;
//   })
// );
const Home = lazy(() => lazyImportRetry(() => import("./Home")));
const Auth = lazy(() => lazyImportRetry(() => import("./Auth")));
const SPlogin = lazy(() => lazyImportRetry(() => import("./SP/SPLogin")));
const SPreister = lazy(() => lazyImportRetry(() => import("./SP/SPRegister")));
const SPs = lazy(() => lazyImportRetry(() => import("./ServiceProviders")));
const SingleSP = lazy(() => lazyImportRetry(() => import("./ServiceProvider")));
const P404 = lazy(() => lazyImportRetry(() => import("./Page404")));
const SProutes = lazy(() => lazyImportRetry(() => import("./SP/SProutes")));

const PageRoutes = () => {
  // const [IsPending, startTransition] = useTransition();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <TopSlider />
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Home />
            </Suspense>
          </>
        }
      />
      <Route
        path="/service/:id"
        element={
          <>
            <TopSlider />
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SPs />
            </Suspense>
          </>
        }
      />
      <Route
        path="/services/provider/:id"
        element={
          <>
            <TopSlider />
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <SingleSP />
            </Suspense>
          </>
        }
      />
      <Route
        path="/auth/cl/login"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Auth type={"user"} />
          </Suspense>
        }
      />
      {/* <Route path="/auth/cl/signup" element={<Auth type={"user"} />} /> */}
      <Route
        path="/auth/ad/login"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <Auth type={"admin"} />
          </Suspense>
        }
      />
      <Route
        path="/admin/dash/*"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <AdminRoutes />
          </Suspense>
        }
      />
      <Route
        path="/auth/sp/login"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <SPlogin />
          </Suspense>
        }
      />
      <Route
        path="/SPdash/*"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <SProutes />
          </Suspense>
        }
      />
      <Route
        path="/auth/sp/signup"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <SPreister />
          </Suspense>
        }
      />
      {/* <Route path="/auth/sp/signup" element={<Auth  type={"user"}/>} /> */}
      <Route path="/index.html" element={<Navigate to="/" />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route
        path="/404"
        element={
          <Suspense
            fallback={
              <div>
                <Preloader />
              </div>
            }
          >
            <P404 />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default PageRoutes;
