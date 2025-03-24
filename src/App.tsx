import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
    </Routes>
  );
}
