import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/home" replace></Navigate>}
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
