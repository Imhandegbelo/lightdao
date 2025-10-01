import React from "react";

interface CollectionCardProps {
  name: string;
  img: string;
  change: number;
  volume: number;
  count: number;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  name,
  img,
  change,
  volume,
  count,
}) => {
  return (
    <div className="flex gap-4 items-center py-4 border-b border-gray-300">
      <p className="font-bold">{count}</p>
      <img src={img} alt={name} className="size-[3.375rem] rounded-full" />
      <div className="w-8/10">
        <h3 className="font-bold">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 w-full">
            <img src="/icons/solana.svg" alt="sol" className="size-5" />
            <p className="text-sm">{volume}</p>
          </div>
          <p className="text-green-400 whitespace-nowrap">
            +{change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};
