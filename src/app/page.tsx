"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const appName = "Money Mate";
const appDescription =
  "Manage lending, borrowing, and daily expenses effortlessly with Money Mate—your all-in-one offline finance companion! ";

const googlePlayLink =
  "https://play.google.com/store/apps/details?id=com.standardsyntax.moneymate";

const appStoreLink =
  "https://apps.apple.com/us/app/money-mate-smart-budgeting/id6744124986";

export default function Home() {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  return (
    <main className="min-h-screen flex flex-col items-center px-6 pt-16 pb-4 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white text-center">
      {showBanner && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm sm:text-base font-medium px-4 py-2 rounded-xl shadow-md mb-6 flex items-center justify-center gap-3"
        >
          🎉 The app is officially live — grab it on your favorite store!
          <button
            onClick={() => setShowBanner(false)}
            className=" right-3 top-2 text-white/70 hover:text-white transition"
            aria-label="Dismiss"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-10 backdrop-blur-md shadow-xl mb-8 rounded-3xl"
      >
        <Image
          src="/icon.png"
          alt={`${appName} Logo`}
          width={160}
          height={160}
          priority
          className="rounded-3xl"
        />
      </motion.div>

      {/* App Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg"
      >
        {appName}
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl text-lg sm:text-xl font-medium mb-10 text-white/90"
      >
        {appDescription}
      </motion.p>

      {/* Store Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex flex-wrap gap-6 justify-center items-center"
      >
        <a
          href={googlePlayLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            width={160}
            height={50}
            className="h-14"
          />
        </a>
        <a
          href={appStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-105"
        >
          <Image
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            width={160}
            height={50}
            className="h-14"
          />
        </a>
      </motion.div>
      <footer className="w-full mt-12 text-white p text-center text-sm">
        <p>
          © {new Date().getFullYear()} {appName}. All rights reserved. Developed
          by{" "}
          <a
            href="https://ersuman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-300 transition"
          >
            Suman Bhattarai
          </a>
        </p>
      </footer>
    </main>
  );
}
