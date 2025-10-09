import {
  DollarSign,
  MousePointer,
  ShoppingCart,
  Link as LinkIcon,
} from "lucide-react";
import { CustomCard } from "../ui/CustomCard";
import { DashboardStats as Stats } from "../../type/courses";

interface DashboardStatsProps {
  stats: Stats;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    {
      title: "Total Earnings",
      value: `$${stats.totalEarnings.toFixed(2)}`,
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Total Clicks",
      value: stats.totalClicks.toLocaleString(),
      icon: MousePointer,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Conversions",
      value: stats.totalConversions.toLocaleString(),
      icon: ShoppingCart,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Active Links",
      value: stats.activeLinks.toLocaleString(),
      icon: LinkIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <CustomCard key={index} hover>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-[#1c1d1f]">{stat.value}</p>
            </div>
            <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        </CustomCard>
      ))}
    </div>
  );
}
