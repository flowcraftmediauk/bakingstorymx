import React, { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  fallbackLabel = 'Baking Story',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#EFE7DC] ${containerClassName}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
        />
      ) : (
        <div
          className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F5EFE6] via-[#EAE0D3] to-[#DFD3C3] text-[#4A3A2F]"
          role="img"
          aria-label={alt}
        >
          <div className="w-12 h-12 rounded-full border border-[#4A3A2F]/20 flex items-center justify-center mb-3">
            <UtensilsCrossed className="w-5 h-5 text-[#6E5849]" />
          </div>
          <p className="font-serif text-lg italic text-[#231B16]">{fallbackLabel}</p>
          <p className="text-xs text-[#6E5849] mt-1 max-w-xs">{alt}</p>
        </div>
      )}
    </div>
  );
};
