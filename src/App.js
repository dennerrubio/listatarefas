import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Video from './components/Video';

export default function App() {
  return (
    <>
      <Video />
      <div className="flex h-screen justify-between flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
