import "./App.css";
import Layout from "./Layout/Layout";
import { MusicContextProvider } from "./Context/MusicContext";
function App() {
  return (
    <MusicContextProvider>
      <Layout />
    </MusicContextProvider>
  );
}

export default App;
