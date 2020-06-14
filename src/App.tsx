import React from 'react';
import {Footer, Header, Banner, About, LatestListings, Services, PopularCities, MoreInfo} from './components'
import {AuthennticationPopUp} from './components/forms/Auth'
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
     <AuthennticationPopUp />
   <Banner />
   <About />
  <LatestListings />
  <Services />
  <PopularCities />
  <MoreInfo />
  <Footer />
</div>

  );
}

export default App;
