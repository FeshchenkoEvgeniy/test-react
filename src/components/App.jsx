import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Home } from "../pages/Home/Home";
import { Tweets } from "../pages/Tweets/Tweets";
import { Loader } from "../components/Loader/Loader";
export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
