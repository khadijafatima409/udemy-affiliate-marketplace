"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCard } from "@/components/ui/CustomCard";
import { CustomInput } from "@/components/ui/CustomInput";
import { CustomButton } from "@/components/ui/CustomButton";
import { User, Mail, Lock } from "lucide-react";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", { name, email });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-[#1c1d1f]">
              Profile Settings
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your account information
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <CustomCard>
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#5624d0] rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold mb-4">
                    {name.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold text-[#1c1d1f] mb-1">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">{email}</p>
                  <CustomButton variant="outline" size="sm" className="w-full">
                    Change Photo
                  </CustomButton>
                </div>
              </CustomCard>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <CustomCard>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-6">
                  Personal Information
                </h3>
                <form onSubmit={handleSave} className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1c1d1f] mb-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <CustomInput
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1c1d1f] mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <CustomInput
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <CustomButton type="submit" variant="primary" size="lg">
                    Save Changes
                  </CustomButton>
                </form>
              </CustomCard>

              <CustomCard>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-6">
                  Change Password
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1c1d1f] mb-2">
                      <Lock className="w-4 h-4" />
                      Current Password
                    </label>
                    <CustomInput
                      type="password"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1c1d1f] mb-2">
                      <Lock className="w-4 h-4" />
                      New Password
                    </label>
                    <CustomInput
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#1c1d1f] mb-2">
                      <Lock className="w-4 h-4" />
                      Confirm New Password
                    </label>
                    <CustomInput
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <CustomButton type="submit" variant="primary" size="lg">
                    Update Password
                  </CustomButton>
                </form>
              </CustomCard>

              <CustomCard>
                <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">
                  Account Actions
                </h3>
                <div className="space-y-3">
                  <CustomButton variant="outline" size="md" className="w-full">
                    Download My Data
                  </CustomButton>
                  <CustomButton
                    variant="outline"
                    size="md"
                    className="w-full text-red-600 border-red-600 hover:bg-red-50"
                  >
                    Delete Account
                  </CustomButton>
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
