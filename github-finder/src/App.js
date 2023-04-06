import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Alert from "./components/Layout/Alert";
import About from "./Pages/About";
import Home from "./Pages/Home";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import { GithubProvider } from "./Context/github/GithubContext";
import { AlertProvider } from "./Context/alert/AlertContext";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
