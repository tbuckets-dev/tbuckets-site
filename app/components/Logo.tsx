export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        className={className}
        fill="none"
      >
        {/* Outer Container Shape */}
        <path 
          d="M20 20 L80 20 L90 50 L50 90 L10 50 L20 20Z" 
          stroke="currentColor" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        />
        {/* Inner "V" / Core */}
        <path 
          d="M35 35 L50 70 L65 35" 
          stroke="currentColor" 
          strokeWidth="8" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-blue-500"
        />
      </svg>
    );
  }