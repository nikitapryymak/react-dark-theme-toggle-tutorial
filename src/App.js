import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";

const style = {
  minHeight: "100vh",
  textAlign: "center",
  paddingTop: "10rem",
  backgroundColor: "#f5f5f5",
};

function App() {
  return (
    <div style={style}>
      <SunIcon />
      <Switch />
      <MoonIcon />
      <h1>Jim Naysium</h1>
      <p>Username: jimnays10</p>
      <p>Email: jim@gmail.com</p>
    </div>
  );
}

export default App;
