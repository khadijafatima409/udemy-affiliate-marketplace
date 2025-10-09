import { LoginForm } from "@/components/Auth/LoginForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CustomCard } from "@/components/ui/CustomCard";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1c1d1f] mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Log in to your account to continue learning
            </p>
          </div>

          <CustomCard>
            <LoginForm />
          </CustomCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
