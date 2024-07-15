import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import LoginRegisterCard from './components/LoginRegisterCard';
import { NextUIProvider } from "@nextui-org/react";

const App = () => {
    const [showLoginLink, setShowLoginLink] = useState(true);

    return (
        <NextUIProvider>
            <Router>
                <Header showLoginLink={showLoginLink} />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/LoginRegister" element={<LoginRegisterCard setShowLoginLink={setShowLoginLink} />} />
                </Routes>
            </Router>
        </NextUIProvider>
    );
};

export default App;
