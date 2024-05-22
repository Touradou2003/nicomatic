import Bienvenue from './components/bienvenue';
import Header from './components/header';
import OnceUponATime from './components/onceUponATime';
import Ainsi from './components/ainsi';
import Zone from './components/zone'; 
import "./styles/body.css";
import Cartes from './components/cartes';
import Realisation from './components/realisation';
import Partenaire from './components/partenaire';



import React from 'react';
;

function App() {
    return (
        <div class="body">
            <Header />        
           <Bienvenue />
           <OnceUponATime />
           <Ainsi />  
           <Zone />  
           <Cartes />
           <Realisation />
           <Partenaire />

        </div>
    );
}

export default App;
