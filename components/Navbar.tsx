import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-10 py-4 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="font-bold text-lg">forCreators</h1>

        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Resources</li>
          <li className="hover:text-white cursor-pointer">Video</li>
          <li className="hover:text-white cursor-pointer">Podcast</li>
          <li className="hover:text-white cursor-pointer">Switch</li>
          <li className="hover:text-white cursor-pointer">Help</li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <Button className="rounded-full bg-white text-black hover:bg-gray-200">
          Login
        </Button>
        <Button className="rounded-full bg-white text-black hover:bg-gray-200">
          Sign up
        </Button>
      </div>
    </nav>
  );
}
