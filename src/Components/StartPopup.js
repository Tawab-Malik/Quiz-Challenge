import React from 'react';

const StartPopup = ({ totalQuestions, onStart }) => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg text-center animate-fade-in">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to the Quiz!</h1>
                <div className="mb-8">
                    <p className="text-xl text-gray-600 mb-4">Test your knowledge with our interactive quiz</p>
                    <div className="flex flex-col gap-2 text-gray-600">
                        <p>• Total Questions: {totalQuestions}</p>
                        <p>• Categories: Entertainment</p>
                        <p>• Different Difficulty Levels</p>
                    </div>
                </div>
                <button
                    onClick={onStart}
                    className="bg-vivid-tangerine text-white px-8 py-3 rounded-lg text-xl font-semibold 
                        hover:bg-vivid-tangerine-600 transition-colors"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default StartPopup; 