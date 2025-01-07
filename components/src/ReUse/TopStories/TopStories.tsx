// src/components/TopStories/TopStories.tsx
import React from "react";
import StoryItem from "./StoryItem";

export interface TopStoriesProps {
    data: {
        icon: string;
        timeAgo: string;
        headline: string;
        image: string;
    }[];
    cssText: string;
    height: number;
}

const TopStories: React.FC<TopStoriesProps> = ({ data,  height }) => {
    return (
        <div className="container mx-auto p-1 bg-white rounded-lg shadow-lg" style={{ width: "400px", height: "550px" }}>
            <h2 className="text-2xl font-bold mb-4 text-black sticky top-0 bg-white z-10 p-2">
                Top Stories
            </h2>
            <div className="flex flex-col  overflow-y-auto  " style={{ height: `${height}px` }}>
                {data.map((d, i) => (
                    <StoryItem
                        key={i}
                        data={d}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopStories;
