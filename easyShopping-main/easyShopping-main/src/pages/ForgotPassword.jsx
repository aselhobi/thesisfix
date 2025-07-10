import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your password reset logic here
        console.log('Password reset email sent to:', email);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Have you Forgotten Your Password?</h1>
                <p className="text-sm text-gray-700 text-center mb-8">
                    If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-700"
                        >
                            RESET PASSWORD
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
