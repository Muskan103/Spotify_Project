import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5">
        <div className="text-xl font-semibold">Spotify <span className="font-light">for</span> Creators</div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a className="hover:text-white">Features</a>
          <a className="hover:text-white">Resources</a>
          <a className="hover:text-white">Video</a>
          <a className="hover:text-white">Podcast</a>
          <a className="hover:text-white">Switch</a>
          <a className="hover:text-white">Help</a>
        </nav>
        <div className="flex gap-3">
          <Button variant="ghost" className="text-white">Login</Button>
          <Button className="rounded-full">Sign up</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-6 md:mx-10 rounded-3xl overflow-hidden">
        <img
          src="./66e844e46ac8124ff52418c6_Learn-Header_1920x1080-p-500.jpg"
          alt="hero"
          className="h-[420px] w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
  <h1 className="text-[140px] font-bold mb-4">
    Resources
  </h1>

  <p className="text-[20px] text-gray-200 mb-8">
    Discover insights, expert interviews, creator case studies, and much more.
  </p>

  <div className="relative w-full max-w-xl">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white-400" />
    <Input
  placeholder="Search"
  className="pl-12 h-19 rounded-full bg-transparent border-white/30 text-white text-[20px] placeholder:text-[20px]"
/>

  </div>
</div>

      </section>

      {/* Categories */}
      <section className="mt-10 px-6 md:px-10">
  <div className="flex flex-wrap justify-center gap-4">
    {['Grow', 'Create', 'How to', 'Case Studies', 'Masterclass'].map((item) => (
      <Button
        key={item}
        variant={item === 'Grow' ?  'secondary' :'default' }
        className="rounded-full px-8 py-8"
      >
        {item}
      </Button>
    ))}
  </div>
</section>


      {/* Resource Cards */}
      <section className="mt-16 px-6 md:px-10">
  <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[380px]">

    {/* Card 1 – Tall */}
    <div className="row-span-2 rounded-2xl overflow-hidden bg-neutral-900 flex flex-col">
      <div className="h-[85%]">
        <img
          src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/690cba0223d251b9c2f77295_Header_Optimization%20Playbook.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold mb-2 line-clamp-2">
          Unlock your show’s full potential on Spotify: download the optimization playbook
        </p>
        <p className="text-xs text-gray-400">November 5, 2025</p>
      </div>
    </div>

    {/* Card 2 – Tall */}
    <div className="row-span-2 rounded-2xl overflow-hidden bg-neutral-900 flex flex-col">
      <div className="h-[85%]">
        <img
          src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/68cc140eea334392c4a8fdf7_MotionSociety-1920x1080.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold mb-2 line-clamp-2">
          How to optimize your video on Spotify — Motion Society’s top tips
        </p>
        <p className="text-xs text-gray-400">September 18, 2025</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="rounded-2xl overflow-hidden bg-neutral-900 flex flex-col">
      <img
        src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/68bb3c3b62fc6515d3a84a2e_Header_GrowthTools_1920x1080.jpg"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm font-semibold mb-2 line-clamp-2">
          Amplifying your show on Spotify with automatic transcripts, chapters, and more
        </p>
        <p className="text-xs text-gray-400">September 9, 2025</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="rounded-2xl overflow-hidden bg-neutral-900 flex flex-col">
      <img
        src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/688cca5432dded2f44c45942_Header-VideoTrend-1920x1080.jpg"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm font-semibold mb-2 line-clamp-2">
          What is a video podcast? A complete guide for creators
        </p>
        <p className="text-xs text-gray-400">August 1, 2025</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="rounded-2xl overflow-hidden bg-neutral-900 flex flex-col">
      <img
        src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/6846f7efcdb380d172e1e678_Header_FeatureFocus_02_1920x1080.jpg"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm font-semibold mb-2 line-clamp-2">
          Feature Focus: More ways to grow and stand out on Spotify
        </p>
        <p className="text-xs text-gray-400">June 10, 2025</p>
      </div>
    </div>

  </div>
</section>


      {/* Featured Section */}
      <section
  id="featured"
  className="bg-[#9b9bff] py-20 px-6 md:px-10"
>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <h2 className="text-5xl font-bold text-center text-black mb-16">
      Featured
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[240px]">

      {/* BIG CARD */}
      <article className="lg:col-span-2 lg:row-span-2 bg-white rounded-[20px] overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/693d97e3b661bfc9972339b8_Header-LukePete-1920x1080_optimized_250.jpg"
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-base font-semibold leading-snug text-black line-clamp-3">
            How ‘Luke and Pete Talking Sheet’ doubled its revenue and grew consumption by 150% with video on Spotify
          </h3>
          <p className="text-xs text-gray-500 mt-3">
            December 15, 2025
          </p>
        </div>
      </article>

      {/* SMALL CARDS */}
      {[
        {
          img: "692deb0b529f93531a062dc1_Header-BasementYard-1920x1080-250kb.jpg",
          title: "From basement to Madison Square Garden: ‘The Basement Yard’s’ rise on Spotify",
          date: "December 2, 2025",
        },
        {
          img: "68d6e7209e5e1112ed7f19b4_Header-Matt%26Abby-1920x1080.jpg",
          title: "How “The Unplanned Podcast” achieved a 35% increase in revenue",
          date: "September 29, 2025",
        },
        {
          img: "690cba0223d251b9c2f77295_Header_Optimization%20Playbook.jpg",
          title: "Unlock your show’s full potential on Spotify",
          date: "November 5, 2025",
        },
        {
          img: "68cc140eea334392c4a8fdf7_MotionSociety-1920x1080.jpg",
          title: "How to optimize your video on Spotify — Motion Society’s tips",
          date: "September 18, 2025",
        },
        {
          img: "68bb3c3b62fc6515d3a84a2e_Header_GrowthTools_1920x1080.jpg",
          title: "Amplifying your show on Spotify with transcripts and chapters",
          date: "September 9, 2025",
        },
      ].map((item, i) => (
        <article
          key={i}
          className="bg-white rounded-[20px] overflow-hidden"
        >
          <img
            src={`https://cdn.prod.website-files.com/66e844e46ac8124ff5241362/${item.img}`}
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold leading-snug text-black line-clamp-3">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 mt-2">
              {item.date}
            </p>
          </div>
        </article>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center gap-3 mt-14">
      <div className="h-9 w-9 rounded-full bg-white text-black flex items-center justify-center text-sm font-medium">
        1
      </div>
      <div className="h-9 w-9 rounded-full border border-white/60 text-white flex items-center justify-center text-sm">
        2
      </div>
    </div>
  </div>
</section>


      {/* Grow Section */}
      <section className="bg-[#4a5f12] py-24 px-6 md:px-10">
  {/* Header */}
  <div className="mb-20 flex items-start justify-between">
    <h2 className="text-[96px] font-bold text-white leading-none">
      Grow
    </h2>

    <p className="text-white text-lg font-semibold leading-relaxed max-w-md text-right">
      Get tips on growing your audience,<br />
      engaging fans, monetizing your<br />
      content, and marketing your show.
    </p>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* FEATURED CARD */}
    <a className="md:col-span-2 bg-white rounded-3xl overflow-hidden">
      <img
        src="https://picsum.photos/1200/600?grow1"
        className="w-full h-[280px] object-cover"
        alt=""
      />
      <div className="p-8">
        <h3 className="text-lg font-semibold text-black leading-snug">
          Unlock your show’s full potential on Spotify:
          download the optimization playbook
        </h3>
        <p className="text-xs text-gray-500 mt-3">
          NOVEMBER 5, 2025
        </p>
      </div>
    </a>

    {/* RIGHT TOP CARD */}
    <a className="bg-white rounded-3xl overflow-hidden">
      <img
        src="https://picsum.photos/600/400?grow2"
        className="w-full h-[300px] object-cover"
        alt=""
      />
      <div className="p-6">
        <h3 className="text-sm font-semibold text-black leading-snug">
          How to optimize your video on Spotify —
          Motion Society’s top tips
        </h3>
        <p className="text-xs text-gray-500 mt-3">
          SEPTEMBER 18, 2025
        </p>
      </div>
    </a>

    {/* BOTTOM ROW */}
    {[1, 2, 3].map((i) => (
      <a
        key={i}
        className="bg-white rounded-3xl overflow-hidden"
      >
        <img
          src={`https://picsum.photos/600/400?grow${i + 2}`}
          className="w-full h-[220px] object-cover"
          alt=""
        />
        <div className="p-6">
          <h3 className="text-sm font-semibold text-black leading-snug">
            Feature Focus: More ways to grow and stand out
          </h3>
          <p className="text-xs text-gray-500 mt-3">
            JUNE 10, 2025
          </p>
        </div>
      </a>
      
    ))}
      {/* FEATURED CARD */}
      <a className="md:col-span-2 bg-white rounded-3xl overflow-hidden">
      <img
        src="https://picsum.photos/1200/600?grow1"
        className="w-full h-[280px] object-cover"
        alt=""
      />
      <div className="p-8">
        <h3 className="text-lg font-semibold text-black leading-snug">
          Unlock your show’s full potential on Spotify:
          download the optimization playbook
        </h3>
        <p className="text-xs text-gray-500 mt-3">
          NOVEMBER 5, 2025
        </p>
      </div>
    </a>

    {/* RIGHT TOP CARD */}
    <a className="bg-white rounded-3xl overflow-hidden">
      <img
        src="https://picsum.photos/600/400?grow2"
        className="w-full h-[300px] object-cover"
        alt=""
      />
      <div className="p-6">
        <h3 className="text-sm font-semibold text-black leading-snug">
          How to optimize your video on Spotify —
          Motion Society’s top tips
        </h3>
        <p className="text-xs text-gray-500 mt-3">
          SEPTEMBER 18, 2025
        </p>
      </div>
    </a>
  </div>

  {/* Pagination */}
  <div className="flex justify-center items-center gap-3 mt-20">
    {[1, 2, 3, 4, 5].map((n) => (
      <span
        key={n}
        className={`h-9 w-9 flex items-center justify-center rounded-full text-sm font-medium ${
          n === 1
            ? "bg-white text-black"
            : "border border-white/40 text-white"
        }`}
      >
        {n}
      </span>
    ))}
    <span className="ml-3 text-sm text-white opacity-80">
      Last
    </span>
  </div>
</section>


{/* Case Studies Section */}
<section className="bg-[#2b0a8d] py-24 px-6 md:px-10">
  <div className="flex justify-between items-start mb-12">
    <h2 className="text-6xl font-bold leading-none">
      Case<br />Studies
    </h2>
    <p className="max-w-xs text-sm text-gray-200">
      Hear directly from creators about how they've found success on Spotify.
    </p>
  </div>

  <div className="relative rounded-3xl overflow-hidden bg-black">
    <img
      src="https://picsum.photos/1600/700?case1"
      className="h-[420px] w-full object-cover opacity-80"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

    <div className="absolute bottom-8 left-8">
      <span className="text-xs uppercase tracking-widest text-gray-300">
        Creator Case Studies
      </span>
      <h3 className="text-2xl font-semibold mt-2">
        Science VS — Building a Spotify Original
      </h3>
    </div>

    {/* Arrows */}
    <button className="absolute left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
      ‹
    </button>
    <button className="absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
      ›
    </button>


  </div>
</section>

{/* News Section */}
<section className="bg-[#f6f4ef] py-24 px-6 md:px-10">
  <h2 className="text-6xl font-bold text-center text-black mb-16">
    News
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[260px]">
    {/* Large Featured */}
    <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white">
      <img
        src="https://picsum.photos/1200/600?news1"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg text-black">
          Wrapped for Creators 2025: How creators and fans built a year of culture on Spotify
        </h3>
        <p className="text-xs text-gray-500 mt-2">DECEMBER 3, 2025</p>
      </div>
    </div>

    {/* Stat Card */}
    <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
      <div className="text-white text-center space-y-3">
        <div className="text-xl font-semibold">1M</div>
        <div className="text-xl font-semibold">50K</div>
        <div className="text-xl font-semibold">100K</div>
        <p className="text-xs opacity-80 mt-2">Introducing plays on Spotify</p>
      </div>
    </div>

    {/* News Cards */}
    {[1,2,3,4].map((i) => (
      <div key={i} className="rounded-3xl overflow-hidden bg-white">
        <img
          src={`https://picsum.photos/600/400?news${i}`}
          className="h-40 w-full object-cover"
        />
        <div className="p-5">
          <h3 className="font-semibold text-sm text-black">
            Spotify for Creators product update
          </h3>
          <p className="text-xs text-gray-500 mt-2">OCTOBER 2025</p>
        </div>
      </div>
    ))}

    {/* Bottom Large Card */}
    <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white">
      <img
        src="https://picsum.photos/1200/600?news-last"
        className="h-64 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold text-lg text-black">
          Helping global creators earn more with Spotify Partner Program
        </h3>
        <p className="text-xs text-gray-500 mt-2">MARCH 6, 2025</p>
      </div>
    </div>

    {/* Small Final Card */}
    <div className="rounded-3xl overflow-hidden bg-white">
      <img
        src="https://picsum.photos/600/400?news-final"
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-sm text-black">
          Introducing new tools for listener comments
        </h3>
        <p className="text-xs text-gray-500 mt-2">OCTOBER 2, 2025</p>
      </div>
    </div>
  </div>
</section>







{/* NEW CREATE PAGE (AFTER SCROLL) */}
<section className="bg-[#9b9bff] py-20 px-6 md:px-10">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-12">
      <h1 className="text-5xl font-bold text-black">Create</h1>
      <p className="max-w-sm text-sm text-black/80 mt-4 md:mt-0">
        Find guidance on every step of the creation process—from
        concept and planning to workflow, production, and editing.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
      {/* Large Left */}
      <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white">
        <img
          src="https://picsum.photos/1200/500?purple1"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Card */}
      <div className="rounded-3xl overflow-hidden bg-white">
        <img
          src="https://picsum.photos/600/400?purple2"
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-black">
            A new home for video creators
          </h3>
          <p className="text-xs text-gray-500 mt-1">FEBRUARY 2025</p>
        </div>
      </div>

      {/* Middle Cards */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-3xl overflow-hidden bg-white">
          <img
            src={`https://picsum.photos/600/400?purple-mid${i}`}
            className="h-36 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-sm font-semibold text-black">
              Creating with Riverside on Spotify for Creators
            </h3>
            <p className="text-xs text-gray-500 mt-1">APRIL 2025</p>
          </div>
        </div>
      ))}

      {/* Bottom Wide */}
      <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white">
        <img
          src="https://picsum.photos/1200/500?purple3"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom Right */}
      <div className="rounded-3xl overflow-hidden bg-white">
        <img
          src="https://picsum.photos/600/400?purple4"
          className="h-36 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold text-black">
            How creators are elevating their podcasting process
          </h3>
          <p className="text-xs text-gray-500 mt-1">SEPTEMBER 2024</p>
        </div>
      </div>
    </div>

    {/* Pagination (Centered & Close) */}
    <div className="flex justify-center items-center gap-4 mt-6 text-black">
      <button className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
        1
      </button>

      {[2, 3, 4, 5].map((n) => (
        <button
          key={n}
          className="text-sm font-medium hover:underline"
        >
          {n}
        </button>
      ))}

      <button className="text-sm font-medium hover:underline">
        Last
      </button>
    </div>
  </div>
</section>







<section className="bg-[#2a008a] py-20 relative overflow-hidden">
  {/* Header */}
  <div className="px-6 md:px-10 flex justify-between items-start mb-10">
    <h2 className="text-5xl font-bold text-white">Masterclass</h2>
    <p className="max-w-sm text-sm text-white/80">
      Go deeper with creator-focused lessons designed to help you
      build your show and audience.
    </p>
  </div>

  {/* LEFT ARROW */}
  <a
    href="#slide-1"
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20
      h-12 w-12 rounded-full bg-white text-black
      flex items-center justify-center text-2xl
      hover:scale-105 transition"
  >
    ‹
  </a>

  {/* RIGHT ARROW */}
  <a
    href="#slide-2"
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20
      h-12 w-12 rounded-full bg-white text-black
      flex items-center justify-center text-2xl
      hover:scale-105 transition"
  >
    ›
  </a>

  {/* Horizontal Pages */}
  <div className="flex snap-x snap-mandatory scroll-smooth overflow-x-hidden">
    {/* SLIDE 1 */}
    <div
      id="slide-1"
      className="snap-start min-w-full px-6 md:px-10"
    >
      <div className="rounded-3xl overflow-hidden relative">
        <img
          src="https://picsum.photos/1600/900?master1"
          className="h-[440px] w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-xs uppercase tracking-widest opacity-80">
            Masterclass
          </span>
          <h3 className="text-4xl font-semibold mt-3">
            Leveraging Video on Spotify
          </h3>
        </div>
      </div>
    </div>

    {/* SLIDE 2 */}
    <div
      id="slide-2"
      className="snap-start min-w-full px-6 md:px-10"
    >
      <div className="rounded-3xl overflow-hidden relative">
        <img
          src="https://picsum.photos/1600/900?master2"
          className="h-[440px] w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-xs uppercase tracking-widest opacity-80">
            Masterclass
          </span>
          <h3 className="text-4xl font-semibold mt-3">
            Growing and Engaging Your Audience
          </h3>
        </div>
      </div>
    </div>

    {/* SLIDE 3 */}
    <div
      id="slide-3"
      className="snap-start min-w-full px-6 md:px-10"
    >
      <div className="rounded-3xl overflow-hidden relative">
        <img
          src="https://picsum.photos/1600/900?master3"
          className="h-[440px] w-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <span className="text-xs uppercase tracking-widest opacity-80">
            Masterclass
          </span>
          <h3 className="text-4xl font-semibold mt-3">
            Monetizing Your Content on Spotify
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="bg-[#2a008a] py-20 relative overflow-hidden">
  {/* Header */}
  <div className="px-6 md:px-10 flex justify-between items-start mb-10">
    <h2 className="text-5xl font-bold text-white">Masterclass</h2>
    <p className="max-w-sm text-sm text-white/80">
      Go deeper with creator-focused lessons designed to help you
      build your show and audience.
    </p>
  </div>

  {/* LEFT ARROW (visual only) */}
  <div
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20
      h-12 w-12 rounded-full bg-white text-black
      flex items-center justify-center text-2xl"
  >
    ‹
  </div>

  {/* RIGHT ARROW (visual only) */}
  <div
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20
      h-12 w-12 rounded-full bg-white text-black
      flex items-center justify-center text-2xl"
  >
    ›
  </div>

  {/* CONTENT */}
  <div className="flex gap-8 px-6 md:px-10">
    {/* MAIN FULL IMAGE */}
    <div className="w-[85%] rounded-3xl overflow-hidden relative">
      <img
        src="https://picsum.photos/1600/900?master1"
        className="h-[440px] w-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-10 left-10 text-white">
        <span className="text-xs uppercase tracking-widest opacity-80">
          Masterclass
        </span>
        <h3 className="text-4xl font-semibold mt-3">
          Leveraging Video on Spotify
        </h3>
      </div>
    </div>

    {/* PARTIALLY VISIBLE NEXT IMAGE */}
    <div className="w-[40%] rounded-3xl overflow-hidden relative opacity-90">
      <img
        src="https://picsum.photos/1600/900?master2"
        className="h-[440px] w-full object-cover"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-10 left-8 text-white">
        <span className="text-xs uppercase tracking-widest opacity-80">
          Masterclass
        </span>
        <h3 className="text-2xl font-semibold mt-2">
          Growing and Engaging Your Audience
        </h3>
      </div>
    </div>
  </div>
</section>
















<section className="bg-[#ff7a66] py-20">
  {/* HEADER */}
  <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start mb-10">
    <h2 className="text-5xl font-bold text-black">
      How to
    </h2>

    <p className="max-w-xs text-xs text-black/80 mt-5 md:mt-0">
      Explore practical, easy-to-follow advice for every stage
      of your podcasting journey.
    </p>
  </div>

  {/* CARDS */}
  <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
    
    {/* CARD 1 */}
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img
        src="https://picsum.photos/400/300?how1"
        alt=""
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-black leading-snug">
          How to optimize your Spotify show page to grow your show
        </h3>
        <p className="text-[10px] text-black/60 mt-1">
          MARCH 1, 2023
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img
        src="https://picsum.photos/400/300?how2"
        alt=""
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-black leading-snug">
          How to make a great trailer for your show
        </h3>
        <p className="text-[10px] text-black/60 mt-1">
          NOVEMBER 8, 2019
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img
        src="https://picsum.photos/400/300?how3"
        alt=""
        className="w-full h-[150px] object-cover"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold text-black leading-snug">
          How to start a podcast: The creator’s step-by-step guide
        </h3>
        <p className="text-[10px] text-black/60 mt-1">
          NOVEMBER 13, 2024
        </p>
      </div>
    </div>

  </div>
</section>




<section className="bg-black py-20">
  <div className="max-w-6xl ml-40 mr-40 mx-auto px-6">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row justify-between items-start mb-14">
      <h2 className="text-5xl font-bold text-white">
        Fan Study
      </h2>

      <p className="max-w-sm text-sm text-white/70 mt-6 md:mt-0">
        Unlock exclusive insights on Spotify listener habits and creator
        practices to help you refine your creative process, connect with
        fans, and grow your show.
      </p>
    </div>

    {/* MAIN CARD */}
    <div className="rounded-2xl overflow-hidden mb-10">
      <div className="relative bg-gradient-to-r from-[#1c2409] to-[#394d12] p-10">
        <h3 className="text-4xl font-bold text-white">
          FAN STUDY
        </h3>
        <p className="text-sm tracking-widest text-white/80 mt-2">
          2024 PODCAST EDITION
        </p>

        {/* PIXEL BLOCK */}
        <div className="absolute right-10 top-10 grid grid-cols-4 gap-1">
          <span className="w-6 h-6 bg-lime-400"></span>
          <span className="w-6 h-6 bg-lime-400"></span>
          <span className="w-6 h-6 bg-lime-300"></span>
          <span className="w-6 h-6 bg-lime-200"></span>
        </div>
      </div>

      <div className="bg-white px-6 py-4">
        <p className="text-xs font-semibold">
          Fan Study: 2024 Podcast Edition
        </p>
        <p className="text-[10px] text-black/60 mt-1">
          PUBLISHED OCTOBER 2024
        </p>
      </div>
    </div>

    {/* LOWER CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* 2023 */}
      <div className="rounded-2xl overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#1b0f4a] to-[#2c1f7d] p-8">
          <h3 className="text-2xl font-bold text-white">
            FAN STUDY
          </h3>
          <p className="text-xs tracking-widest text-white/80 mt-1">
            2023 PODCAST EDITION
          </p>

          <div className="absolute right-6 top-6 grid grid-cols-3 gap-1">
            <span className="w-4 h-4 bg-indigo-400"></span>
            <span className="w-4 h-4 bg-indigo-300"></span>
            <span className="w-4 h-4 bg-indigo-200"></span>
          </div>
        </div>

        <div className=" h-100% bg-white px-5 py-4">
          <p className="text-xs font-semibold">
            Fan Study: 2023 Podcast Edition
          </p>
          <p className="text-[10px] text-black/60 mt-1">
            PUBLISHED SEPTEMBER 2023
          </p>
        </div>
      </div>

      {/* 2022 */}
      <div className="rounded-2xl overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#3b2a13] to-[#6a4f1f] p-8">
          <h3 className="text-2xl font-bold text-white">
            FAN STUDY
          </h3>
          <p className="text-xs tracking-widest text-white/80 mt-1">
            2022 PODCAST EDITION
          </p>

          <div className="absolute right-6 top-6 grid grid-cols-3 gap-1">
            <span className="w-4 h-4 bg-yellow-400"></span>
            <span className="w-4 h-4 bg-yellow-300"></span>
            <span className="w-4 h-4 bg-yellow-200"></span>
          </div>
        </div>

        <div className="bg-white px-5 py-4">
          <p className="text-xs font-semibold">
            Fan Study: 2022 Podcast Edition
          </p>
          <p className="text-[10px] text-black/60 mt-1">
            PUBLISHED SEPTEMBER 2022
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="bg-[#f7f6f2] py-32 overflow-hidden">
  <div className="relative">

    {/* MOVING TEXT */}
    <div className="whitespace-nowrap flex overflow-hidden">
      <div className="flex animate-marquee">
        <h2 className="text-[9vw] font-extrabold text-black px-10">
          Ready to start?
        </h2>
        <h2 className="text-[9vw] font-extrabold text-black px-10">
          Ready to start?
        </h2>
        <h2 className="text-[9vw] font-extrabold text-black px-10">
          Ready to start?
        </h2>
        <h2 className="text-[9vw] font-extrabold text-black px-10">
          Ready to start?
        </h2>
      </div>
    </div>

    {/* BUTTON */}
    <div className="flex justify-center mt-20">
      <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300">
        Create a podcast
      </button>
    </div>

  </div>
</section>















<footer className="bg-black text-white h-[30vh] min-h-[260px]">
  <div className="max-w-7xl mx-auto h-full px-10 py-10 flex flex-col justify-between">

    <div className="grid grid-cols-1 md:grid-cols-6 gap-10">

      {/* LOGO + COPYRIGHT */}
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl font-semibold">Spotify</span>
          <span className="text-xl font-light">for Creators</span>
        </div>
        <p className="text-xs text-white/60">
          © 2026 Spotify
        </p>
      </div>

      {/* COMPANY */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Press & Media</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* FINE PRINT */}
      <div>
        <h4 className="font-semibold mb-4">Fine Print</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li className="hover:text-white cursor-pointer">Legal</li>
          <li className="hover:text-white cursor-pointer">Privacy Center</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Cookies</li>
        </ul>
      </div>

      {/* CREATOR TOOLS */}
      <div>
        <h4 className="font-semibold mb-4">Creator Tools</h4>
        <ul className="space-y-2 text-sm text-white/70">
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Megaphone</li>
          <li className="hover:text-white cursor-pointer">Spotify for Artists</li>
          <li className="hover:text-white cursor-pointer">Spotify for Authors</li>
        </ul>
      </div>

      {/* FOLLOW US */}
      <div>
        <h4 className="font-semibold mb-4">Follow us</h4>
        <div className="flex gap-4">
          <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:border-white cursor-pointer">
            Inst
          </div>
          <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:border-white cursor-pointer">
            X
          </div>
        </div>
      </div>

      {/* GET THE APP */}
      <div>
        <h4 className="font-semibold mb-4">Get the app</h4>
        <div className="space-y-3">
          <div className="border border-white/40 rounded-lg px-4 py-2 text-xs hover:border-white cursor-pointer">
            Download on the App Store
          </div>
          <div className="border border-white/40 rounded-lg px-4 py-2 text-xs hover:border-white cursor-pointer">
            Get it on Google Play
          </div>
        </div>
      </div>

    </div>
  </div>
</footer>


      
    </div>
  );
}
