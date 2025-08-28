export default function TechIcons() {
  const icons = Array.from({ length: 25 }, (_, i) => `${i}.svg`);

  return (
   <div className="relative w-full overflow-hidden py-12">
  {/* Radial background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[20%] h-[20%] bg-indigo-900/20 blur-3xl rounded-full"></div>
  </div>

  {/* Marquee section */}
  <div className="relative">
    <div className="flex gap-6 animate-marquee">
      {[...icons, ...icons].map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-20 h-20 bg-gray-800/70 border border-gray-600 rounded-xl shadow-md"
        >
          <img
            src={`/tech_icons/${icon}`}
            alt={`tech-icon-${index}`}
            className="w-12 h-12 object-contain"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Gradient edges */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-900 to-transparent"></div>
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-900 to-transparent"></div>
</div>

  );
}
