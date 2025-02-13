import "./App.css";
import { HeaderComponent } from "./componentes/index";
import { FooterComponent } from "./componentes/index";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <AppRouter></AppRouter>
      <FooterComponent></FooterComponent>
    </main>
  );
}

export default App;
