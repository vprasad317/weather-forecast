import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faCalendar, faCircle, faCircleNotch, faClock, faCloud, faCloudSunRain, faThermometerThreeQuarters, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

library.add(faCloudSunRain, faCircleNotch, faTint, faWind, faArrowRight, faCloud,faThermometerThreeQuarters, faClock, faCalendar)

function App() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
  );
}

export default App;
