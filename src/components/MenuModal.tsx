import React, { useEffect } from 'react';
import { X, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { MenuItem, BUSINESS_INFO } from '../data/bakingStoryData';
import { ResilientImage } from './ResilientImage';

interface MenuModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onScrollToVisit: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  item,
  onClose,
  onScrollToVisit,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#231B16]/60 backdrop-blur-xs transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-[28px] bg-[#FAF6F0] text-[#231B16] shadow-2xl overflow-hidden border border-[#231B16]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close item details"
          className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-[#FAF6F0]/90 text-[#231B16] hover:bg-[#3D2B22] hover:text-[#FAF6F0] flex items-center justify-center transition-colors duration-200 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2B22]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6 aspect-4/3 md:aspect-auto md:h-full">
            <ResilientImage
              src={item.image}
              alt={item.imageAlt}
              containerClassName="w-full h-full min-h-[260px]"
              fallbackLabel={item.name}
            />
          </div>

          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Unboxed clean metadata per Zero-Pill rule */}
              <div className="flex items-center gap-2 text-xs text-[#6E5849] mb-2">
                <span>{item.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>{item.availabilityText}</span>
              </div>

              <h3
                id="modal-product-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#231B16] leading-tight"
              >
                {item.name}
              </h3>

              <p className="mt-3 text-sm sm:text-[15px] text-[#4E4037] leading-relaxed">
                {item.shortDescription}
              </p>

              <div className="mt-4 pt-4 border-t border-[#231B16]/10 space-y-2 text-xs sm:text-[13px] text-[#5C4B40] leading-relaxed">
                <p>{item.detailedNote}</p>
                {item.pairingSuggestion && (
                  <p className="italic text-[#6E5849]">{item.pairingSuggestion}</p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#231B16]/10 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onScrollToVisit();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-xs sm:text-[13px] font-medium hover:bg-[#2A1D17] transition-colors whitespace-nowrap min-h-[44px]"
              >
                <MapPin className="w-4 h-4" />
                <span>Visit Us at Praga 58, Juárez</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[#231B16]/20 text-[#231B16] text-xs font-medium hover:bg-[#EFE7DC] transition-colors whitespace-nowrap min-h-[42px]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Store</span>
                </a>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[#231B16]/20 text-[#231B16] text-xs font-medium hover:bg-[#EFE7DC] transition-colors whitespace-nowrap min-h-[42px]"
                >
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
