import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <BottomNavigation />
    </>
  );
}

export default App;
