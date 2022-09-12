import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/shop" element={<h1>Shop now!</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
