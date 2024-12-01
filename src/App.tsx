import { Routes, Route } from "react-router-dom";
// import { useAuthenticator } from "@aws-amplify/ui-react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import TodoPage from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import TutorialsPage from "./pages/TutorialsPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";

function App() {
  // const { user } = useAuthenticator();

  return (
    <>
      <NavBar />
      <div className="layout">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<TodoPage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
