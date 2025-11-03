import Page from "./components/Page";
import {GenerateProvider} from "./provider/GenerateProvider"
function App() {
  return (
    <GenerateProvider>
    <Page/>
    </GenerateProvider>
  );
}

export default App;
