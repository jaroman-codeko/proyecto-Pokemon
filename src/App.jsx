import "./App.css";
import { HeaderComponent } from "./componentes/index";
import { FooterComponent } from "./componentes/index";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <main>
        <AppRouter></AppRouter>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
