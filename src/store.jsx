import About from "./components/About";
import Contact from "./components/Contact";
import List from "./components/List";
import Header from "./components/Header";
import History from "./components/History";


function Store() {
  return (
    <div className="w-full h-full m-0 p-0 bg-yellow-500">
      <Header />
      <List />
      <History/>
      <About />
      <Contact />
    </div>
  );
}

export default Store;
