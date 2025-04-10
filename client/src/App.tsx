import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App
