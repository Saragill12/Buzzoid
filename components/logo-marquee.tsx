export default function LogoMarquee() {
  const logos = [
    { name: 'Hubspot', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/hubspot-CXrKktfM.svg' },
    { name: 'Deccan Herald', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/deccan-herald-BdlFI2_j.svg' },
    { name: 'Seattle Met', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/seattlemet-LDQLoaog.svg' },
    { name: 'Buffzone', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/buffzone-Dq4e7n30.svg' },
    { name: 'Radar Online', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/radar-online-BEx8KTa3.svg' },
    { name: 'Hubspot', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/hubspot-CXrKktfM.svg' },
    { name: 'Deccan Herald', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/deccan-herald-BdlFI2_j.svg' },
    // { name: 'Seattle Met', src: 'https://buzzoid.com/wp-content/themes/buzz/v3/seattlemet-LDQLoaog.svg' },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white relative pt-10 pb-4 md:pt-12 md:pb-6">
      {/* Top Center Hexagon Icon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="42" height="35" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#hex-shadow)">
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              fill="white"
            />
            <path
              d="M16 7L24 12V20L16 25L8 20V12L16 7Z"
              fill="#E4E4E7"  // light gray inner fill
            />
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              stroke="#E7EAF0"
              strokeOpacity="0.62"
              strokeWidth="0.5"
            />
          </g>
          <defs>
            <filter id="hex-shadow" x="0" y="0" width="32" height="36" filterUnits="userSpaceOnUse">
              <feOffset dy="0" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.2 0 0 0 0 0.3 0 0 0 0 0.4 0 0 0 0.1 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* Heading */}
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <p className="text-center text-gray-500 text-lg">Buzzoid is seen on...</p>
      </div>

      {/* Logo Marquee */}
      <div className="w-full flex gap-12 items-center relative overflow-hidden py-2">
        <div className="flex gap-12 min-w-full animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src || '/placeholder.svg'}
                alt={logo.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-12 min-w-full animate-scroll">
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <img
                src={logo.src || '/placeholder.svg'}
                alt={logo.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
