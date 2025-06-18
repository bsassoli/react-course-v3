import { links, social } from './data';
import logo from "./logo.svg";
import Navbar from "./Navbar";

const App = () => {
  return (
  <main>
    <Navbar logo={logo} links={links} social={social}/>
  </main>
  )
};
export default App;
