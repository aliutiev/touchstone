import React, { useState } from 'react';
import axios from 'axios';

interface EmailInputProps {
    apiEndpoint: string;
}

const EmailInput = ({apiEndpoint}:EmailInputProps) => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Make the API POST request to submit the email to the database
            await axios.post(apiEndpoint, { email });
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };


    return (
        <div>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Thank you for subscribing!</p>
            )}
        </div>
    )
}

export default EmailInput