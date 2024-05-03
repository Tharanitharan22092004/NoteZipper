import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Landingpage from './screens/LandingPage/Landingpage';

const App = () => (
  <>
    <Header />
    <main>
      <Landingpage/>
      </main>
    <Footer />
  </>
);

export default App;
