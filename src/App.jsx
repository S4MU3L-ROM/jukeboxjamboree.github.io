import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent'; // Componente que incluye Video, AboutFestival, etc.
import LoginRegisterCard from './components/LoginRegisterCard.jsx';
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <NextUIProvider>
            <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/LoginRegister" element={<LoginRegisterCard />} />
                    </Routes>

            </Router>
        </NextUIProvider>
    );
};

export default App;
