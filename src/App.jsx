import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "./components/homeComponent/Home";
import Nav from "./components/navComponent/Nav";
import Counter from "./components/counterComponent/Counter";
import Store from "./components/scheme/storeUsers/Store";
import Users from "./components/scheme/showUsers/Users";
import Main from "./components/scheme/Main";
import Footer from "./components/footerComponent/Footer";
import SingleUsers from "./components/scheme/singleUser/SingleUsers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Counter" element={<Counter />} />

          <Route path="/Main" element={<Main />}>
            <Route index element={<Users />} />
            <Route path="Users" element={<Users />}>
              <Route path=":id" element={<SingleUsers />} />
              <Route path="Store" element={<Store />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
