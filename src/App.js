import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./routes/home/home.components";

const Navigation = () => {
  return (
    <div>
      <h1>Nav!</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
