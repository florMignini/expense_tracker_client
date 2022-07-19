import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components imports
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./components/register/Register";
import SignIn from "./components/signIn/SignIn";
import WelcomeScreen from "./pages/welcomeScreen/WelcomeScreen";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
