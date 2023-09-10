import React from "react";

export const LoadingBlocks = ({ item }) => {
    return [...Array(item).keys()].map(() => (
        <div className="animate-pulse">
            <div className="bg-gray-300 rounded-lg h-60">

            </div>
        </div>
    ))
};
