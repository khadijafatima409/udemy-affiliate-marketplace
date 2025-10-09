"use client";

import { useState } from "react";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import Link from "next/link";

export function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CustomInput
        type="text"
        label="Full Name"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <CustomInput
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <CustomInput
        type="password"
        label="Password"
        placeholder="Create a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          className="w-4 h-4 mt-1 text-[#5624d0] focus:ring-[#5624d0]"
          required
        />
        <span className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-[#5624d0] hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#5624d0] hover:underline">
            Privacy Policy
          </a>
        </span>
      </div>

      <CustomButton
        type="submit"
        variant="primary"
        className="w-full"
        size="lg"
      >
        Sign up
      </CustomButton>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#5624d0] font-semibold hover:underline"
        >
          Log in
        </Link>
      </p>
    </form>
  );
}
