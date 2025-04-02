import "./App.css";
import SidebarContainer from "./components/layout/SidebarContainer";
import FolderCart from "./components/modules/FolderCart";

function App() {
  return (
    <>
      <div className="w-full flex">
        <SidebarContainer />
        <FolderCart />
      </div>
    </>
  );
}

export default App;
