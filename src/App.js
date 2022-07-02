import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header title="React Counter" />

      <Button counter={counter} setCounter={setCounter} />

      <Footer />
    </div>
  );
}

export default App;
