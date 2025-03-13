import React from 'react';

const ResultPopup = ({ totalQuestions, correctAnswers, score, onRestart }) => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-xl shadow-lg text-center animate-fade-in">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Quiz Completed!</h2>
                <div className="mb-8">
                    <p className="text-xl mb-2">Your Results:</p>
                    <p className="text-2xl font-semibold mb-2">
                        Correct Answers: {correctAnswers} out of {totalQuestions}
                    </p>
                    <p className="text-3xl font-bold text-vivid-tangerine">Final Score: {score}</p>
                </div>
                <button
                    onClick={onRestart}
                    className="bg-vivid-tangerine text-white px-8 py-3 rounded-lg text-xl font-semibold 
                        hover:bg-vivid-tangerine-600 transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ResultPopup; 