import React, { useState } from 'react';

const LoginRegisterCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        console.log(isFlipped)
    };

    return (
        <div className="relative w-96 h-150 mx-auto my-52 border-3 ">
            <div className={`w-full h-full transform transition-transform duration-700  bg-black
                            ${isFlipped ? 'rotate-y-180' : 'rotate-y-0'}`}>
                {/* Front */}
                <div className={`absolute w-full h-full backface-hidden ${!isFlipped ? 'block' : 'hidden'}`}>
                    <div className="flex flex-col items-center justify-center h-full bg-white p-5 shadow-lg">
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" className="mt-3 px-2 py-1"/>
                        <input type="password" placeholder="Password" className="mt-3 px-2 py-1"/>
                        <div className="flex gap-4">
                            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={handleFlip}>REGISTER
                            </button>
                            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </div>
                {/* Back */}
                <div
                    className={`absolute w-full h-full backface-hidden ${isFlipped ? 'block' : 'hidden'} rotate-y-180`}>
                    <div className="flex flex-col items-center justify-center h-full bg-gray-200 p-5 shadow-lg">
                    <h2>Register</h2>
                        <input type="text" placeholder="Name" className="mt-3 px-2 py-1" />
                        <input type="email" placeholder="Email" className="mt-3 px-2 py-1" />
                        <input type="password" placeholder="Password" className="mt-3 px-2 py-1" />
                        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded" onClick={handleFlip}>Back to Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegisterCard;
