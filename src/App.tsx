import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "antd";

function App() {
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="text-2xl font-semibold">你好</div>
      <Button type="primary">Primary Button</Button>
    </>
  );
}

export default App;
