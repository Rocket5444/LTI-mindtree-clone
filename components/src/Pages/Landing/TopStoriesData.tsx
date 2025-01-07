// src/App.tsx
import React from "react";
import TopStories from "../../ReUse/TopStories/TopStories";

const sampleData = [
    {
        icon: "path/to/icon1.png",
        timeAgo: "5 hours ago",
        headline: "EUR/USD: Euro Extends Losses to $1.0730 as France Walks Into Political Uncertainty",
        image: "path/to/image1.jpg",
    },
    {
        icon: "path/to/icon2.png",
        timeAgo: "6 hours ago",
        headline: "SPX: S&P 500 Hits All-Time High Ahead of Fed Meeting, Nasdaq Joins Record Land",
        image: "path/to/image2.jpg",
    },
    {
        icon: "path/to/icon3.png",
        timeAgo: "6 hours ago",
        headline: "NVDA: Nvidia Big 10-for-1 Stock Split Completed. What Does It Mean for Traders?",
        image: "path/to/image3.jpg",
    },
    {
        icon: "path/to/icon4.png",
        timeAgo: "7 hours ago",
        headline: "AAPL: Apple Finally Unveils Gen AI Model 'Apple Intelligence.' Investors React.",
        image: "path/to/image4.jpg",
    },
];

const TopStoriesData: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">
            <TopStories data={sampleData} cssText="custom-css-class" height={460} />
        </div>
    );
};

export default TopStoriesData;
