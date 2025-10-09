"use client";

interface PriceFilterProps {
  selectedPrice: string;
  onPriceChange: (price: string) => void;
}

export function PriceFilter({
  selectedPrice,
  onPriceChange,
}: PriceFilterProps) {
  const priceRanges = [
    { label: "All Prices", value: "" },
    { label: "Free", value: "free" },
    { label: "Under $25", value: "0-25" },
    { label: "$25 - $50", value: "25-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "Over $100", value: "100+" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#1c1d1f] mb-3">Price</h3>
      <div className="space-y-2">
        {priceRanges.map((range) => (
          <label
            key={range.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="price"
              value={range.value}
              checked={selectedPrice === range.value}
              onChange={(e) => onPriceChange(e.target.value)}
              className="w-4 h-4 text-[#5624d0] focus:ring-[#5624d0]"
            />
            <span className="text-sm text-[#1c1d1f]">{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
