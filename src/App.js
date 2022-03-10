import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Home from './components/Home'
import About from './components/About'
import data from './db.json'

function App() {
  return (
    <>
        <Header />
        <Wrapper records={data} />
        <Footer />
    </>
  );
}

export default App;