// src/components/TopStories/StoryItem.tsx
import React from "react";

interface StoryItemProps {
    data: {
        icon: string;
        timeAgo: string;
        headline: string;
        image: string;
    };
}

const StoryItem: React.FC<StoryItemProps> = ({ data }) => {
    return (
        <div className="story-item flex items-center p-4 border-b border-gray-200 ">
            <img src={data.icon} alt="icon" className="w-6 h-6 relative"  style={{ top: "-38px" }} />
            <div className="flex flex-col flex-1">
                <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">{data.timeAgo}</span>
                </div>
                <span className="text-lg text-black font-semibold">{data.headline}</span>
            </div>
            <img src={data.image} alt="story" className="w-16 h-16 rounded-md ml-2" />
        </div>
    );
};

export default StoryItem;
