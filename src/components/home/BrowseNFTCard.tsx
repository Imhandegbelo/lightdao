import React from "react";

interface NFTCardProps {
  count: number;
  price: number;
  img: string;
  name: string;
  avatar: string;
  author: string;
  isPopular?: boolean;
}

export const BrowseNFTCard: React.FC<NFTCardProps> = ({
  count,
  price,
  img,
  name,
  author,
  avatar,
  isPopular,
}) => {
  return (
    <div className="relative rounded-2xl border border-gray-300">
      <span className="absolute top-2 right-2 bg-white rounded-full py-2 px-5 font-bold text-sm">
        {count}
      </span>
      <img
        src={img}
        alt={name}
        className="rounded-t-2xl h-[302px] object-cover object-center w-full"
      />
      <img
        src={avatar}
        alt={author}
        className="border border-white rounded-full size-[3rem] mx-auto -mt-6"
      />
      <div className="text-center pb-6 mt-2">
        <h3 className="text-lg font-extrabold">{name}</h3>
        <p className="text-sm text-gray-500">
          by{" "}
          <span className={`${isPopular ? "text-primary" : ""}`}>{author}</span>
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
      </div>
    </div>
  );
};
