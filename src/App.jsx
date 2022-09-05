import './App.scss';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './Components/App/Router/Router';
import { Header } from './Components/Partials/Header/Header';
import { Footer } from './Components/Partials/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <section>
          <AppRouter />
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
