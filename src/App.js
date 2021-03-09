import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import ContactScreen from './screens/ContactScreen';
import AboutScreen from './screens/AboutScreen';
import NotFoundPage from './screens/NotFoundPage';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import InfoScreen from './screens/InfoScreen';

const App =()=>{
  return (
    <Router>
      <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutScreen}/>
        <Route exact path="/contact" component={ContactScreen}/>
        <Route exact path="/Info" component={InfoScreen}/>
        <Route exact component={NotFoundPage}/>
      </Switch>
      {/*Footer*/}
      <Footer college="วิทยาลัยเทคนิคตราด" address="480 หมู่.9 ถนนสุขุมวิท ต.วังกระเเจะ อ.เมือง จ.ตราด" name="อารีรัตน์ รัตนมูล" />
      </div>
    </Router>
  );
}

export default App;
