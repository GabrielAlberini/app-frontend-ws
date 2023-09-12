// En tu archivo de enrutamiento (por ejemplo, App.js)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../views/Home"
import {BlogDetailView} from "../views/BlogDetailView"
import {NotFoundView} from "../views/NotFoundView"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetailView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };