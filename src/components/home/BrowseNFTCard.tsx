import React, { useCallback, useEffect, useState } from "react";

interface NFTCardProps {
  count: number;
  price: number;
  img: string;
  name: string;
  avatar: string;
  author: string;
  time?: string;
  isPopular?: boolean;
  isExplore?: boolean;
}

export const BrowseNFTCard: React.FC<NFTCardProps> = ({
  count,
  price,
  img,
  name,
  author,
  avatar,
  isPopular,
  isExplore,
  time,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(true);

  // Convert string to seconds
  const parseTimeToSeconds = useCallback((timeString: string): number => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }, []);

  // Format seconds back to HH:MM:SS
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [hours, minutes, seconds]
      .map((unit) => unit.toString().padStart(2, "0"))
      .join(":");
  };

  useEffect(() => {
    // initializes the time
    setTimeLeft(parseTimeToSeconds(String(time)));
  }, [time, parseTimeToSeconds]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  return (
    <div className="relative rounded-2xl border border-gray-300">
      {isExplore && (
        <span className="absolute top-2 left-2 bg-white rounded-full py-2 px-5 font-bold text-sm">
          {formatTime(timeLeft)}
        </span>
      )}
      <span className="absolute top-2 right-2 bg-white rounded-full py-2 px-5 font-bold text-sm">
        {count}
      </span>
      <img
        src={img}
        alt={name}
        className="rounded-t-2xl h-[302px] object-cover object-center w-full"
      />
      {!isExplore && (
        <img
          src={avatar}
          alt={author}
          className="border border-white rounded-full size-[3rem] mx-auto -mt-6"
        />
      )}
      <div
        className={`${isExplore ? "text-left px-4" : "text-center"} pb-6 mt-2`}
      >
        <h3 className="text-lg font-extrabold">{name}</h3>
        {isExplore ? (
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Price</span>{" "}
              <div className="w-fit flex items-center gap-2">
                <img src="/icons/solana.svg" alt="sol" />
                <p className="font-bold text-sm">{price} sol</p>
              </div>
            </div>
            <hr className="text-gray-400" />
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Author</span>{" "}
              <div className="w-fit flex items-center gap-2">
                <img src={avatar} alt={author} />
                <p className="font-bold text-sm">{author}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500">
              by{" "}
              <span className={`${isPopular ? "text-primary" : ""}`}>
                {author}
              </span>
            </p>
            {isPopular ? (
              <p className="text-center text-gray-600 text-sm mt-4">
                Lorem ipsum odor amet, consectetuer adipiscing elit.
              </p>
            ) : (
              <div className="flex gap-2 w-fit mx-auto mt-6">
                <img src="/icons/solana.svg" alt="sol" />
                <p className="font-bold text-sm">{price} sol</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
