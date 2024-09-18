import About from "./About";
import Contact from "./Contact";
import List from "./List";
import Header from "./Header";
import History from "./History";

function App1() {
  return (
    <div className="w-full h-full m-0 p-0 bg-yellow-500">
      <Header />
      <List />
      <History />
      <About />
      <Contact />
    </div>
  );
}

export default App1;
