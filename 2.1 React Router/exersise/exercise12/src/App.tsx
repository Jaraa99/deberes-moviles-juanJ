import React, { useState } from 'react';

const answers = ["Whatever.", "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!"];

const hey = (message: string) => {
    const speech = message.trim();
    if (speech === "") return "Fine. Be that way!";

    const isQuestion = speech.endsWith("?") ? 1 : 0;
    const isYelling = /[A-Z]+/.test(speech) && speech === speech.toUpperCase() ? 2 : 0;

    return answers[isQuestion + isYelling];
};

const App = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setResponse(hey(message));
    };

    return (
        <div>
            <h1>Hey Bot</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                />
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
};

export default App;
