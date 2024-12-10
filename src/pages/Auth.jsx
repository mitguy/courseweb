import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "../components/Main.jsx";
import Header from "../components/Header.jsx";
import Content from "../components/Content.jsx";
import Button from "../components/Button.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

export default function Auth() {
  return (
    <Router>
      <Main>
        <Header />
        <Routes>
          <Route path="/" element={
            <Content>
              <Link to="/register">
                <Button name="Register" onClick={() => {}} />
              </Link>
              <div className="h-16"></div>
              <Link to="/login">
                <Button name="Login" onClick={() => {}} />
              </Link>
            </Content>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
    </Router>
  )
}