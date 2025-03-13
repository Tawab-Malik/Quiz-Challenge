import React from 'react';

const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={`text-2xl ${index < rating ? "text-yellow-500" : "text-white"}`}>
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating; 