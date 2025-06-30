export default function LogoMarquee() {
  const logos = [
    { name: "Hubspot", src: "https://buzzoid.com/wp-content/themes/buzz/v3/hubspot-CXrKktfM.svg" },
    { name: "Deccan Herald", src: "https://buzzoid.com/wp-content/themes/buzz/v3/deccan-herald-BdlFI2_j.svg" },
    { name: "Seattle Met", src: "https://buzzoid.com/wp-content/themes/buzz/v3/seattlemet-LDQLoaog.svg" },
    { name: "Buffzone", src: "https://buzzoid.com/wp-content/themes/buzz/v3/buffzone-Dq4e7n30.svg" },
    { name: "Radar Online", src: "https://buzzoid.com/wp-content/themes/buzz/v3/radar-online-BEx8KTa3.svg" },
        { name: "Hubspot", src: "https://buzzoid.com/wp-content/themes/buzz/v3/hubspot-CXrKktfM.svg" },
  { name: "Deccan Herald", src: "https://buzzoid.com/wp-content/themes/buzz/v3/deccan-herald-BdlFI2_j.svg" },
    { name: "Seattle Met", src: "https://buzzoid.com/wp-content/themes/buzz/v3/seattlemet-LDQLoaog.svg" },
    // { name: "Buffzone", src: "https://buzzoid.com/wp-content/themes/buzz/v3/buffzone-Dq4e7n30.svg" },
    // { name: "Radar Online", src: "https://buzzoid.com/wp-content/themes/buzz/v3/radar-online-BEx8KTa3.svg" },

  ]

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white relative pt-10 pb-4 md:pt-12 md:pb-6">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <svg width="32" height="39" viewBox="0 0 32 39" fill="none">
          <g filter="url(#filter0_dddd_6_4716)">
            <path
              d="M15.5639 1.78599C15.8733 1.60736 16.2545 1.60736 16.5639 1.78599L27.5682 8.13931C27.8776 8.31794 28.0682 8.64807 28.0682 9.00534V21.712C28.0682 22.0692 27.8776 22.3994 27.5682 22.578L16.5639 28.9313C16.2545 29.11 15.8733 29.11 15.5639 28.9313L4.55964 22.578C4.25024 22.3994 4.05964 22.0692 4.05964 21.712V9.00534C4.05964 8.64807 4.25024 8.31794 4.55964 8.13931L15.5639 1.78599Z"
              fill="#FCFBFD"
            />
            <path
              d="M15.5639 1.78599C15.8733 1.60736 16.2545 1.60736 16.5639 1.78599L27.5682 8.13931C27.8776 8.31794 28.0682 8.64807 28.0682 9.00534V21.712C28.0682 22.0692 27.8776 22.3994 27.5682 22.578L16.5639 28.9313C16.2545 29.11 15.8733 29.11 15.5639 28.9313L4.55964 22.578C4.25024 22.3994 4.05964 22.0692 4.05964 21.712V9.00534C4.05964 8.64807 4.25024 8.31794 4.55964 8.13931L15.5639 1.78599Z"
              stroke="#E7EAF0"
              strokeOpacity="0.62"
              strokeWidth="0.504328"
            />
          </g>
          <defs>
            <filter
              id="filter0_dddd_6_4716"
              x="0.781529"
              y="0.391247"
              width="30.5648"
              height="38.0042"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.504328" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.278431 0 0 0 0 0.333333 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_4716" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <p className="text-center text-gray-500 text-lg">Buzzoid is seen on...</p>
      </div>

      <div className="w-full flex gap-12 items-center relative overflow-hidden py-2">
        <div className="flex gap-12 min-w-full animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src || "/placeholder.svg"}
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
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
