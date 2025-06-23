import AppContext from "./context";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";


const App = () => {
  return (
      <AppContext>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </AppContext>
  );
};
export default App;
