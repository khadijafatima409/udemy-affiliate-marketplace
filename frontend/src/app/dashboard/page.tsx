import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DashboardStats } from "@/components/Dashboard/DashboardStats";
import { CustomCard } from "@/components/ui/CustomCard";
import { getMockDashboardStats, getMockAffiliateLinks } from "@/utils/api";
import { TrendingUp, TrendingDown } from "lucide-react";

export default async function DashboardPage() {
  const stats = getMockDashboardStats();
  const affiliateLinks = getMockAffiliateLinks();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-[#1c1d1f]">
              Affiliate Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Track your performance and earnings
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <DashboardStats stats={stats} />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <CustomCard>
                <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">
                  Active Affiliate Links
                </h2>
                <div className="space-y-4">
                  {affiliateLinks.map((link) => (
                    <div
                      key={link.id}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-[#1c1d1f] mb-1">
                            {link.courseTitle}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Created: {link.createdAt}
                          </p>
                        </div>
                        <span className="text-lg font-bold text-green-600">
                          ${link.earnings.toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg mb-3">
                        <input
                          type="text"
                          value={link.link}
                          readOnly
                          className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-[#1c1d1f]">
                            {link.clicks}
                          </p>
                          <p className="text-xs text-gray-600">Clicks</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#1c1d1f]">
                            {link.conversions}
                          </p>
                          <p className="text-xs text-gray-600">Conversions</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#1c1d1f]">
                            {((link.conversions / link.clicks) * 100).toFixed(
                              1
                            )}
                            %
                          </p>
                          <p className="text-xs text-gray-600">
                            Conversion Rate
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CustomCard>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <CustomCard>
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-4">
                  Performance This Month
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Earnings</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+24%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Clicks</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-semibold">+18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Conversions</span>
                    <div className="flex items-center gap-1 text-red-600">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-semibold">-5%</span>
                    </div>
                  </div>
                </div>
              </CustomCard>

              <CustomCard>
                <h3 className="text-lg font-bold text-[#1c1d1f] mb-4">
                  Top Performing Course
                </h3>
                <p className="text-sm font-semibold text-[#1c1d1f] mb-2">
                  React for Beginners
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  18 conversions this month
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#5624d0] h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </CustomCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
