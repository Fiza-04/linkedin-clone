import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* body */}
      <div className="app-body">
        <Sidebar />
        <Feed />

        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
