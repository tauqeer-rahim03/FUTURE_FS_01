// src/components/InfoCard.jsx
import React from "react";

const InfoCard = ({ icon, title, children }) => {
    return (
        <div className="border  rounded-3xl p-6 text-center flex flex-col items-center justify-start">
            {icon}
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <div className="text-gray-600 mt-2">{children}</div>
        </div>
    );
};

export default InfoCard;
