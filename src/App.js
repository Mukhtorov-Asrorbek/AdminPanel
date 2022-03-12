import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index component={Home} />
            <Route path="login" component={Login} />
            <Route path="users">
              <Route index component={List} />
              <Route path=":userId" component={Single} />
              <Route
                path="new"
                component={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index component={List} />
              <Route path=":productId" component={Single} />
              <Route
                path="new"
                component={
                  <New inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
