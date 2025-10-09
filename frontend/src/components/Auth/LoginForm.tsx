"use client";

import { useState } from "react";
import { CustomInput } from "../ui/CustomInput";
import { CustomButton } from "../ui/CustomButton";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#5624d0] focus:ring-[#5624d0]"
          />
          <span className="text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-[#5624d0] hover:underline">
          Forgot password?
        </a>
      </div>

      <CustomButton
        type="submit"
        variant="primary"
        className="w-full"
        size="lg"
      >
        Log in
      </CustomButton>

      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-[#5624d0] font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
