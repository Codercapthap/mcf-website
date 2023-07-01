import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import Cookie from "@/components/Cookie";
import { PageType, mainPages, subPages } from "@/shared";
import Carousel from "@/components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home" replace></Navigate>}
          ></Route>
          <Route path="none" Component={Carousel}></Route>
          {mainPages.concat(subPages).map((page: PageType) => {
            return (
              <Route
                path={`${page.link}`}
                Component={() => (
                  <page.component {...page.props}></page.component>
                )}
                key={page.link}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
      <ScrollToTopBtn></ScrollToTopBtn>
      <Cookie></Cookie>
    </>
  );
}

export default App;
