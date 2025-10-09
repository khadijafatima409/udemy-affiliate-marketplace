import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default async function Home() {
  // const courses = await getCourses();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-to-r from-[#5624d0] to-[#7c3aed] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Start, switch, or advance your career with thousands of courses
              from industry experts.
            </p>
            <div className="max-w-2xl">
              {/* <SearchBar placeholder="What do you want to learn?" /> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
