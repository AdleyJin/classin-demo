import { useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import ClassDetailPage from "./pages/ClassDetailPage";

type Page = "home" | "detail";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  if (page === "detail") {
    return <ClassDetailPage onBack={() => setPage("home")} />;
  }

  return <HomePage onOpenClass={() => setPage("detail")} />;
}
