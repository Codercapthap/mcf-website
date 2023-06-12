import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import { useEffect } from "react";
import { PageType, mainPages, subPages } from "@/shared";

function App() {
  let location = useLocation();
  useEffect(() => {
    let isValidLocation = mainPages.concat(subPages).some((page: PageType) => {
      if (page.link === location.pathname) {
        document.title = page.title + " - MCF";
      }
      return page.link === location.pathname;
    });
    if (!isValidLocation) {
      document.title = "Page not found - MCF";
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace></Navigate>}
        ></Route>
        {mainPages.concat(subPages).map((page: PageType) => {
          return (
            <Route
              path={`${page.link}`}
              Component={page.component}
              key={page.link}
            ></Route>
          );
        })}
      </Routes>
      <ScrollToTopBtn></ScrollToTopBtn>
    </>
  );
}

export default App;
