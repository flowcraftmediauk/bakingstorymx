/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Check,
  Copy,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ResilientImage } from './components/ResilientImage';
import { MenuModal } from './components/MenuModal';
import {
  BUSINESS_INFO,
  OPENING_HOURS,
  FEATURE_HIGHLIGHTS,
  SIGNATURE_FAVORITES,
  MENU_ITEMS,
  IMAGES,
  MenuItem,
} from './data/bakingStoryData';

type MenuCategoryFilter = 'All' | 'Bakery' | 'Desserts' | 'Bingsu' | 'Coffee' | 'Drinks';

const MENU_TABS: MenuCategoryFilter[] = [
  'All',
  'Bakery',
  'Desserts',
  'Bingsu',
  'Coffee',
  'Drinks',
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryFilter>('All');
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [bingsuPreviewFlavor, setBingsuPreviewFlavor] = useState<'fruit' | 'cocoa'>('fruit');
  const [copiedAddress, setCopiedAddress] = useState(false);

  const currentDayIndex = useMemo(() => new Date().getDay(), []);

  const filteredMenuItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryAndScroll = (category: MenuCategoryFilter) => {
    setActiveCategory(category);
    scrollToSection('#menu');
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.fullAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E2D8CB] md:py-6 lg:py-10 md:px-4 lg:px-8">
      {/* Centered Rounded Editorial Website Container */}
      <div className="max-w-[1360px] mx-auto bg-[#FAF6F0] text-[#231B16] md:rounded-[36px] overflow-hidden shadow-[0_24px_70px_rgba(35,27,22,0.08)] border border-[#231B16]/6">
        {/* Header / Sticky Navigation */}
        <Navbar
          onNavigateCategory={(cat) => {
            setActiveCategory(cat);
          }}
        />

        <main>
          {/* 1. HERO SECTION */}
          <section
            id="home"
            className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 px-5 sm:px-8 lg:px-14"
          >
            <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Editorial Headline & CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariant}
                className="lg:col-span-6 space-y-6"
              >
                {/* Quiet unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#6E5849] tracking-wide">
                  <span>Juárez, Ciudad de México</span>
                  <span aria-hidden="true">·</span>
                  <span>Praga 58</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-medium tracking-tight text-[#231B16] leading-[1.04]">
                  Sweet Moments,
                  <br />
                  <span className="italic font-normal text-[#4A372B]">Made Beautiful.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#4E4037] leading-relaxed max-w-xl">
                  Discover Korean-inspired bakery treats, desserts, coffee and refreshing bingsu
                  in the heart of Mexico City.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => scrollToSection('#menu')}
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-sm font-medium hover:bg-[#281B15] transition-colors duration-200 whitespace-nowrap min-h-[46px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2B22]"
                  >
                    <span>Explore Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollToSection('#visit')}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#231B16]/25 text-[#231B16] text-sm font-medium hover:bg-[#EFE7DC] transition-colors duration-200 whitespace-nowrap min-h-[46px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2B22]"
                  >
                    Visit Us
                  </button>
                </div>

                {/* Unboxed Offerings Summary */}
                <div className="pt-6 border-t border-[#231B16]/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-[13px] text-[#6E5849]">
                  <span>Korean Bakery</span>
                  <span aria-hidden="true">·</span>
                  <span>Desserts &amp; Cakes</span>
                  <span aria-hidden="true">·</span>
                  <span>Shaved Ice Bingsu</span>
                  <span aria-hidden="true">·</span>
                  <span>Café</span>
                </div>
              </motion.div>

              {/* Right Column: Large Cinematic Food Photograph */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-6"
              >
                <div
                  onClick={() => {
                    const heroItem = MENU_ITEMS.find((i) => i.id === 'dessert-cream-cake');
                    if (heroItem) setSelectedMenuItem(heroItem);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const heroItem = MENU_ITEMS.find((i) => i.id === 'dessert-cream-cake');
                      if (heroItem) setSelectedMenuItem(heroItem);
                    }
                  }}
                  aria-label="View details for Fresh Cream & Fruit Cake"
                  className="group relative rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_20px_50px_rgba(35,27,22,0.1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
                >
                  <div className="aspect-4/3 w-full">
                    <ResilientImage
                      src={IMAGES.heroCake}
                      alt="Korean-style fresh cream cake topped with ripe strawberries on a warm ceramic plate at Baking Story"
                      priority={true}
                      containerClassName="w-full h-full"
                      className="group-hover:scale-[1.03]"
                      fallbackLabel="Fresh Cream & Fruit Cake"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1612]/75 via-[#1E1612]/30 to-transparent p-5 sm:p-7 flex items-end justify-between text-[#FAF6F0]">
                    <div>
                      <p className="text-xs text-[#E8DDD1]">Featured Creation · Desserts</p>
                      <p className="font-serif text-xl sm:text-2xl font-medium mt-0.5">
                        Fresh Cream &amp; Fruit Cake
                      </p>
                    </div>
                    <span className="text-xs font-medium underline underline-offset-4 whitespace-nowrap">
                      View Details →
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. INTRODUCTION SECTION & FEATURE HIGHLIGHTS */}
          <section className="px-4 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto bg-[#F3ECE1] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Text */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-6 space-y-5"
                >
                  <p className="text-xs tracking-[0.14em] text-[#6E5849] font-medium">
                    Baking Story
                  </p>
                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.1]">
                    Sweet moments, made for sharing.
                  </h2>
                  <p className="text-[15px] sm:text-base text-[#4E4037] leading-relaxed">
                    Situated in Mexico City’s Juárez neighborhood, Baking Story is a bakery and
                    café offering Korean-style bakery breads, desserts, coffee and refreshing
                    bingsu. Whether you are stopping by for a morning pastry and coffee or sharing
                    a bowl of shaved ice in the afternoon, every visit is designed for unhurried
                    enjoyment.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => scrollToSection('#about')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-xs sm:text-[13px] font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[42px]"
                    >
                      <span>Discover Baking Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>

                {/* Right Rounded Image */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-6"
                >
                  <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_14px_34px_rgba(35,27,22,0.07)] aspect-4/3">
                    <ResilientImage
                      src={IMAGES.introSpread}
                      alt="Korean-style bakery breads, pastries and coffee served on a warm table at Baking Story"
                      containerClassName="w-full h-full"
                      fallbackLabel="Baking Story Café Table"
                    />
                  </div>
                </motion.div>
              </div>

              {/* 3. FEATURE HIGHLIGHTS */}
              <div className="mt-12 pt-10 border-t border-[#231B16]/10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {FEATURE_HIGHLIGHTS.map((feature) => (
                  <div
                    key={feature.index}
                    className="flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-[#7A6354] tabular-nums">
                        {feature.index}. {feature.title}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-[#231B16]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#4E4037] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => scrollToSection(feature.targetSection)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3D2B22] hover:underline underline-offset-4 py-1 whitespace-nowrap"
                      >
                        <span>Explore {feature.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. SIGNATURE MENU SECTION ("Signature Favorites") */}
          <section className="px-5 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <p className="text-xs text-[#6E5849] mb-2">Curated Highlights</p>
                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16]">
                    Signature Favorites
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#4E4037] max-w-md">
                  Discover some of the treats that make Baking Story special.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {SIGNATURE_FAVORITES.map((card) => (
                  <motion.article
                    key={card.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={fadeUpVariant}
                    onClick={() => handleSelectCategoryAndScroll(card.targetCategory)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectCategoryAndScroll(card.targetCategory);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Explore ${card.title} in the menu`}
                    className="group rounded-[26px] bg-[#F3ECE1] overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 shadow-[0_10px_30px_rgba(35,27,22,0.05)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
                  >
                    <div>
                      <div className="aspect-4/3 w-full overflow-hidden">
                        <ResilientImage
                          src={card.image}
                          alt={card.imageAlt}
                          containerClassName="w-full h-full"
                          className="group-hover:scale-[1.04]"
                          fallbackLabel={card.title}
                        />
                      </div>
                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-2 text-xs text-[#6E5849] mb-2">
                          <span>{card.subtitle}</span>
                          <span aria-hidden="true">·</span>
                          <span>Ver en tienda</span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-[#231B16] leading-snug">
                          {card.title}
                        </h3>
                        <p className="mt-2.5 text-sm text-[#4E4037] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between border-t border-[#231B16]/8 text-xs font-medium text-[#231B16]">
                      <span>View in Menu</span>
                      <span className="w-8 h-8 rounded-full border border-[#231B16]/20 flex items-center justify-center group-hover:bg-[#3D2B22] group-hover:text-[#FAF6F0] group-hover:border-[#3D2B22] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* 5. MENU / PRODUCTS SECTION */}
          <section
            id="menu"
            className="px-5 sm:px-8 lg:px-14 py-16 sm:py-24 bg-[#F5EFE6] border-y border-[#231B16]/8"
          >
            <div className="max-w-[1220px] mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#6E5849] mb-2">
                    <span>House Selection</span>
                    <span aria-hidden="true">·</span>
                    <span>Juárez, CDMX</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16]">
                    Our Café &amp; Bakery Menu
                  </h2>
                  <p className="mt-2.5 text-sm sm:text-base text-[#4E4037] max-w-xl">
                    Explore our Korean-style breads, desserts, shaved ice bingsu and café drinks.
                    Daily selections vary in store at Praga 58.
                  </p>
                </div>

                {/* Interactive Filter Controls (Segmented Tabs) */}
                <div
                  role="tablist"
                  aria-label="Menu Categories"
                  className="flex items-center gap-1 p-1.5 bg-[#EAE0D3] rounded-full overflow-x-auto max-w-full"
                >
                  {MENU_TABS.map((tab) => {
                    const isActive = activeCategory === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveCategory(tab)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-colors duration-200 whitespace-nowrap shrink-0 min-h-[38px] ${
                          isActive
                            ? 'bg-[#3D2B22] text-[#FAF6F0] shadow-xs'
                            : 'text-[#4E4037] hover:text-[#231B16]'
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Editorial Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredMenuItems.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => setSelectedMenuItem(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedMenuItem(item);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${item.name} — ${item.availabilityText}`}
                    className="group rounded-[24px] bg-[#FAF6F0] overflow-hidden flex flex-col justify-between border border-[#231B16]/8 transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3D2B22]"
                  >
                    <div>
                      <div className="aspect-4/3 w-full overflow-hidden">
                        <ResilientImage
                          src={item.image}
                          alt={item.imageAlt}
                          containerClassName="w-full h-full"
                          className="group-hover:scale-[1.03]"
                          fallbackLabel={item.name}
                        />
                      </div>

                      <div className="p-6">
                        {/* Unboxed static metadata per Zero-Pill rule */}
                        <div className="flex items-center gap-2 text-xs text-[#6E5849] mb-2">
                          <span>{item.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.availabilityText}</span>
                        </div>

                        <h3 className="font-serif text-2xl font-medium text-[#231B16] leading-snug">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-[#4E4037] leading-relaxed">
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-5 pt-3 border-t border-[#231B16]/8 flex items-center justify-between text-xs text-[#3D2B22] font-medium">
                      <span>View item details</span>
                      <span
                        aria-hidden="true"
                        className="group-hover:translate-x-0.5 transition-transform"
                      >
                        →
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-[#231B16]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-[#5C4B40]">
                <p>
                  All items are subject to daily preparation and in-store availability at our
                  Juárez café.
                </p>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-1.5 font-medium text-[#231B16] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Ask about today’s selection: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </section>

          {/* 6. BINGSU FEATURE SECTION ("Bingsu Moments") */}
          <section id="bingsu" className="px-5 sm:px-8 lg:px-14 py-16 sm:py-24">
            <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left: Large Cinematic Bingsu Image with Flavor Switcher */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUpVariant}
                className="lg:col-span-7 space-y-4"
              >
                <div className="rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_18px_45px_rgba(35,27,22,0.08)] aspect-4/3">
                  <ResilientImage
                    src={
                      bingsuPreviewFlavor === 'fruit'
                        ? IMAGES.bingsuMangoStrawberry
                        : IMAGES.bingsuChocolateCoffee
                    }
                    alt={
                      bingsuPreviewFlavor === 'fruit'
                        ? 'Mango and strawberry Korean bingsu shaved ice dessert in a matte ceramic bowl'
                        : 'Chocolate and coffee Korean bingsu shaved ice dessert topped with cocoa and cream'
                    }
                    containerClassName="w-full h-full"
                    fallbackLabel="Korean Bingsu"
                  />
                </div>

                {/* Interactive Flavor Preview Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                  <p className="text-xs text-[#6E5849]">
                    Shown above:{' '}
                    <span className="text-[#231B16] font-medium">
                      {bingsuPreviewFlavor === 'fruit'
                        ? 'Mango & Strawberry Bingsu'
                        : 'Chocolate & Coffee Bingsu'}
                    </span>
                  </p>
                  <div className="flex items-center gap-1.5 p-1 bg-[#EFE7DC] rounded-full">
                    <button
                      type="button"
                      onClick={() => setBingsuPreviewFlavor('fruit')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                        bingsuPreviewFlavor === 'fruit'
                          ? 'bg-[#3D2B22] text-[#FAF6F0]'
                          : 'text-[#4E4037] hover:text-[#231B16]'
                      }`}
                    >
                      Mango &amp; Strawberry
                    </button>
                    <button
                      type="button"
                      onClick={() => setBingsuPreviewFlavor('cocoa')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                        bingsuPreviewFlavor === 'cocoa'
                          ? 'bg-[#3D2B22] text-[#FAF6F0]'
                          : 'text-[#4E4037] hover:text-[#231B16]'
                      }`}
                    >
                      Chocolate &amp; Coffee
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Right: Bingsu Editorial Copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUpVariant}
                className="lg:col-span-5 space-y-6"
              >
                <div className="flex items-center gap-2 text-xs text-[#6E5849]">
                  <span>Korean Shaved Ice</span>
                  <span aria-hidden="true">·</span>
                  <span>Signature Dessert</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.08]">
                  Bingsu Moments
                </h2>

                <p className="text-base sm:text-lg text-[#4E4037] leading-relaxed">
                  A refreshing Korean-inspired dessert experience.
                </p>

                <p className="text-sm sm:text-[15px] text-[#5C4B40] leading-relaxed">
                  Prepared with delicate, fluffy shaved ice and creamy toppings, our bingsu brings
                  together bright fruit and rich café flavors. Enjoy varieties including mango,
                  strawberry, chocolate and coffee in our Juárez café.
                </p>

                {/* Clean unboxed flavor list */}
                <div className="py-4 border-y border-[#231B16]/10">
                  <p className="text-xs text-[#6E5849] mb-2">Featured Flavor Profiles</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-serif text-xl text-[#231B16]">
                    <span>Mango</span>
                    <span aria-hidden="true" className="text-[#8C7667]">
                      ·
                    </span>
                    <span>Strawberry</span>
                    <span aria-hidden="true" className="text-[#8C7667]">
                      ·
                    </span>
                    <span>Chocolate</span>
                    <span aria-hidden="true" className="text-[#8C7667]">
                      ·
                    </span>
                    <span>Coffee</span>
                  </div>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleSelectCategoryAndScroll('Bingsu')}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-sm font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[46px]"
                  >
                    <span>Discover Bingsu</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 7. BAKERY SECTION ("Fresh from the Bakery") */}
          <section id="bakery" className="px-5 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto bg-[#F3ECE1] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-5 space-y-5 order-2 lg:order-1"
                >
                  <div className="flex items-center gap-2 text-xs text-[#6E5849]">
                    <span>Korean-Style Breads</span>
                    <span aria-hidden="true">·</span>
                    <span>Pan Dulce &amp; Savory Rolls</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.08]">
                    Fresh from the Bakery
                  </h2>

                  <p className="text-sm sm:text-base text-[#4E4037] leading-relaxed">
                    Baking Story offers a curated selection of Korean-style bakery products known
                    for their soft texture and balanced, lighter sweetness. From fluffy buns to
                    savory-sweet favorites like cheese and corn bread, our counter brings a warm
                    Korean bakery atmosphere to Mexico City.
                  </p>

                  <div className="pt-2 space-y-3 border-t border-[#231B16]/10 text-sm text-[#4E4037]">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-lg text-[#231B16]">
                        Cheese &amp; Corn Bread
                      </span>
                      <span className="text-xs text-[#6E5849]">Consultar disponibilidad</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-lg text-[#231B16]">
                        Soft Bakery Buns &amp; Pan Dulce
                      </span>
                      <span className="text-xs text-[#6E5849]">Ver en tienda</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleSelectCategoryAndScroll('Bakery')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-xs sm:text-[13px] font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[44px]"
                    >
                      <span>View Bakery Selection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-7 order-1 lg:order-2"
                >
                  <div className="rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0_16px_40px_rgba(35,27,22,0.08)] aspect-4/3">
                    <ResilientImage
                      src={IMAGES.bakeryBreads}
                      alt="Curated selection of Korean-style breads including cheese and corn bread on a ceramic platter"
                      containerClassName="w-full h-full"
                      fallbackLabel="Fresh from the Bakery"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 8. DESSERT EDITORIAL SECTION ("Sweet Collection") */}
          <section id="desserts" className="px-4 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto bg-[#F4EAE4] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left: Large Dessert Photograph */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-6"
                >
                  <div className="rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-[0_16px_40px_rgba(35,27,22,0.08)] aspect-4/3">
                    <ResilientImage
                      src={IMAGES.dessertPastry}
                      alt="Layered cake slice and cream-filled pastry served on a blush-cream plate"
                      containerClassName="w-full h-full"
                      fallbackLabel="Sweet Collection"
                    />
                  </div>
                </motion.div>

                {/* Right: Editorial Copy */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUpVariant}
                  className="lg:col-span-6 space-y-5"
                >
                  <p className="text-xs tracking-[0.14em] text-[#6E5849] font-medium">
                    Sweet Collection
                  </p>

                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.08]">
                    A little sweetness goes a long way.
                  </h2>

                  <p className="text-base sm:text-lg text-[#4E4037] leading-relaxed">
                    Take a slow moment with something sweet.
                  </p>

                  <p className="text-sm sm:text-[15px] text-[#5C4B40] leading-relaxed">
                    From delicate cream cakes to individual pastries and baked treats, our dessert
                    showcase is made for quiet afternoon breaks, thoughtful gifts and shared
                    celebrations in the heart of Juárez.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleSelectCategoryAndScroll('Desserts')}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-sm font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[46px]"
                    >
                      <span>Explore Desserts</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 9. COFFEE SECTION ("Coffee & Something Sweet") */}
          <section id="coffee" className="px-5 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUpVariant}
                className="lg:col-span-5 space-y-5"
              >
                <div className="flex items-center gap-2 text-xs text-[#6E5849]">
                  <span>Café Experience</span>
                  <span aria-hidden="true">·</span>
                  <span>Hot &amp; Iced Beverages</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.08]">
                  Coffee &amp; Something Sweet
                </h2>

                <p className="text-sm sm:text-base text-[#4E4037] leading-relaxed">
                  Pair your favorite bakery roll or cake slice with a freshly prepared cup of
                  coffee. Our café menu accompanies Baking Story’s breads and desserts for a calm,
                  inviting pause in Ciudad de México.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleSelectCategoryAndScroll('Coffee')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#231B16]/25 text-[#231B16] text-xs sm:text-[13px] font-medium hover:bg-[#3D2B22] hover:text-[#FAF6F0] hover:border-[#3D2B22] transition-colors whitespace-nowrap min-h-[44px]"
                  >
                    <span>Explore Coffee &amp; Drinks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUpVariant}
                className="lg:col-span-7"
              >
                <div className="rounded-[28px] sm:rounded-[34px] overflow-hidden shadow-[0_16px_42px_rgba(35,27,22,0.08)] aspect-4/3">
                  <ResilientImage
                    src={IMAGES.coffeePairing}
                    alt="Coffee in a warm cream ceramic cup alongside a golden pastry on a wooden table"
                    containerClassName="w-full h-full"
                    fallbackLabel="Coffee & Something Sweet"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* 10. ABOUT BAKING STORY */}
          <section
            id="about"
            className="px-5 sm:px-8 lg:px-14 py-16 sm:py-20 bg-[#F3ECE1] border-y border-[#231B16]/8"
          >
            <div className="max-w-[920px] mx-auto text-center space-y-5">
              <div className="flex items-center justify-center gap-2 text-xs text-[#6E5849]">
                <span>Juárez, Cuauhtémoc</span>
                <span aria-hidden="true">·</span>
                <span>Ciudad de México</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16]">
                About Baking Story
              </h2>

              <p className="text-base sm:text-lg text-[#4E4037] leading-relaxed">
                Baking Story is a bakery and café in Mexico City’s Juárez neighborhood offering
                Korean-style bakery products, desserts, coffee and refreshing bingsu. Located at
                Praga 58, the café provides a welcoming setting to enjoy soft breads, sweet treats
                and café drinks throughout the week.
              </p>
            </div>
          </section>

          {/* 11. LOCATION & OPENING HOURS SECTION */}
          <section id="visit" className="px-5 sm:px-8 lg:px-14 py-16 sm:py-24">
            <div className="max-w-[1220px] mx-auto">
              <div className="mb-10">
                <p className="text-xs text-[#6E5849] mb-2">Plan Your Visit</p>
                <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16]">
                  Visit Baking Story
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Address & Contact Card */}
                <div className="lg:col-span-6 rounded-[28px] bg-[#F3ECE1] p-7 sm:p-10 flex flex-col justify-between border border-[#231B16]/8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-xs text-[#6E5849]">
                      <MapPin className="w-4 h-4 text-[#3D2B22]" />
                      <span>Location · Ciudad de México</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#231B16]">
                        {BUSINESS_INFO.name}
                      </h3>
                      <address className="not-italic text-base text-[#4E4037] leading-relaxed pt-2">
                        {BUSINESS_INFO.streetAddress}
                        <br />
                        {BUSINESS_INFO.neighborhood}
                        <br />
                        {BUSINESS_INFO.postalAndCity}
                        <br />
                        {BUSINESS_INFO.country}
                      </address>
                    </div>

                    <div className="pt-4 border-t border-[#231B16]/10 space-y-1">
                      <p className="text-xs text-[#6E5849]">Phone</p>
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="inline-block font-sans text-lg font-medium text-[#231B16] hover:underline underline-offset-4 tabular-nums"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-[#231B16]/10 flex flex-wrap items-center gap-3">
                    <a
                      href={BUSINESS_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-xs sm:text-[13px] font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[44px]"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#231B16]/25 text-[#231B16] text-xs sm:text-[13px] font-medium hover:bg-[#EFE7DC] transition-colors whitespace-nowrap min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Us</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-[#5C4B40] hover:text-[#231B16] hover:bg-[#EFE7DC] transition-colors whitespace-nowrap min-h-[44px]"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3D2B22]" />
                          <span>Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Opening Hours Card */}
                <div className="lg:col-span-6 rounded-[28px] bg-[#F3ECE1] p-7 sm:p-10 flex flex-col justify-between border border-[#231B16]/8">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#6E5849] mb-4">
                      <Clock className="w-4 h-4 text-[#3D2B22]" />
                      <span>Weekly Schedule</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#231B16] mb-6">
                      Opening Hours
                    </h3>

                    <dl className="divide-y divide-[#231B16]/10">
                      {OPENING_HOURS.map((entry) => {
                        const isToday = entry.dayIndex === currentDayIndex;
                        return (
                          <div
                            key={entry.day}
                            className={`py-3 flex items-center justify-between text-sm sm:text-[15px] ${
                              isToday ? 'font-semibold text-[#231B16]' : 'text-[#4E4037]'
                            }`}
                          >
                            <dt className="flex items-center gap-2">
                              <span>{entry.day}</span>
                              {isToday && (
                                <span className="text-xs font-normal text-[#6E5849]">
                                  · Today
                                </span>
                              )}
                            </dt>
                            <dd className="tabular-nums">{entry.hours}</dd>
                          </div>
                        );
                      })}
                    </dl>
                  </div>

                  <p className="mt-6 pt-4 border-t border-[#231B16]/10 text-xs text-[#6E5849]">
                    Holiday hours or special schedules may vary. Feel free to call us at{' '}
                    <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span> before your
                    visit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 12. INSTAGRAM CTA SECTION ("Follow the story.") */}
          <section className="px-5 sm:px-8 lg:px-14 pb-16 sm:pb-20">
            <div className="max-w-[1220px] mx-auto rounded-[28px] bg-[#F5EFE6] border border-[#231B16]/8 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs text-[#6E5849]">Instagram</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#231B16]">
                  Follow the story.
                </h2>
                <p className="text-sm sm:text-base text-[#4E4037]">
                  Discover more treats, desserts and moments from Baking Story.
                </p>
              </div>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-sm font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[46px] shrink-0"
              >
                <span>{BUSINESS_INFO.instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* 13. FINAL CTA SECTION */}
          <section className="px-4 sm:px-8 lg:px-14 pb-16 sm:pb-24">
            <div className="max-w-[1220px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#EFE3DA] overflow-hidden border border-[#231B16]/8">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 p-7 sm:p-12 lg:p-14 space-y-6">
                  <p className="text-xs text-[#6E5849]">Juárez · Ciudad de México</p>
                  <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#231B16] leading-[1.08]">
                    Your next sweet moment is waiting.
                  </h2>
                  <p className="text-base sm:text-lg text-[#4E4037] leading-relaxed max-w-lg">
                    Visit Baking Story in Juárez and discover something delicious.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => scrollToSection('#visit')}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3D2B22] text-[#FAF6F0] text-sm font-medium hover:bg-[#281B15] transition-colors whitespace-nowrap min-h-[46px]"
                    >
                      <span>Visit Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#menu')}
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#231B16]/25 text-[#231B16] text-sm font-medium hover:bg-[#FAF6F0]/70 transition-colors whitespace-nowrap min-h-[46px]"
                    >
                      Explore Menu
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 h-full">
                  <div className="aspect-16/9 lg:aspect-4/3 w-full h-full">
                    <ResilientImage
                      src={IMAGES.ctaFloralSweet}
                      alt="Delicate Korean bakery cookies and pastel floral arrangement on a warm cream surface"
                      containerClassName="w-full h-full"
                      fallbackLabel="Baking Story"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 14. MINIMAL LUXURY FOOTER */}
        <footer className="bg-[#F3ECE1] border-t border-[#231B16]/10 px-5 sm:px-8 lg:px-14 py-12 sm:py-16">
          <div className="max-w-[1220px] mx-auto space-y-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left: Brand */}
              <div>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#home');
                  }}
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#231B16] tracking-tight"
                >
                  {BUSINESS_INFO.name}
                </a>
              </div>

              {/* Center: Navigation Links */}
              <nav
                aria-label="Footer Navigation"
                className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#4E4037]"
              >
                {[
                  { label: 'Home', target: '#home' },
                  { label: 'Menu', target: '#menu' },
                  { label: 'Bakery', target: '#bakery' },
                  { label: 'Desserts', target: '#desserts' },
                  { label: 'Bingsu', target: '#bingsu' },
                  { label: 'Coffee', target: '#coffee' },
                  { label: 'Contact', target: '#visit' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.target}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.target);
                    }}
                    className="hover:text-[#231B16] underline-offset-4 hover:underline transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Right: Instagram */}
              <div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#231B16] hover:underline underline-offset-4 whitespace-nowrap"
                >
                  <span>Instagram {BUSINESS_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Row: Address, Phone & Copyright */}
            <div className="pt-8 border-t border-[#231B16]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-[13px] text-[#5C4B40]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>
                  {BUSINESS_INFO.streetAddress}, {BUSINESS_INFO.neighborhood},{' '}
                  {BUSINESS_INFO.postalAndCity}
                </span>
                <span aria-hidden="true">·</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-[#231B16] underline-offset-4 hover:underline tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <p>© 2026 Baking Story. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Interactive Item Detail Modal */}
      <MenuModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onScrollToVisit={() => scrollToSection('#visit')}
      />
    </div>
  );
}
