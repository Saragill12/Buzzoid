'use client';

import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div>
            <h3 className="font-semibold ml-1 mb-2">FAQ</h3>
          </div>
          <div>
            <h3 className="font-semibold  -ml-2 mb-2">Blog</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Our Team</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Terms of Service</h3>
            <h3 className="font-semibold mt-2">Privacy Policy</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-10">
          <div>
            <h4 className="font-semibold ml-3 mb-2">Instagram Services</h4>
            <ul className="space-y-1">
              <li><Link href="#">Buy Instagram Likes</Link></li>
              <li><Link href="#">Buy Instagram Comments</Link></li>
              <li><Link href="#">Buy Instagram Followers</Link></li>
              <li><Link href="#">Buy Instagram Views</Link></li>
              <li><Link href="#">Automatic Instagram Likes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">TikTok Services</h4>
            <ul className="space-y-1">
              <li><Link href="#">Buy TikTok Likes</Link></li>
              <li><Link href="#">Buy TikTok Followers</Link></li>
              <li><Link href="#">Buy TikTok Views</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">YouTube Services</h4>
            <ul className="space-y-1">
              <li><Link href="#">Buy YouTube Views</Link></li>
              <li><Link href="#">Buy YouTube Subscribers</Link></li>
              <li><Link href="#">Buy YouTube Likes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Tools & Resources</h4>
            <ul className="space-y-1">
              <li><Link href="#">Instagram Video Downloader</Link></li>
              <li><Link href="#">Instagram Profile Picture Viewer</Link></li>
              <li><Link href="#">Instagram Story Downloader</Link></li>
              <li><Link href="#">Instagram Followers Counter</Link></li>
              <li><Link href="#">Free Instagram Likes Trial</Link></li>
              <li><Link href="#">Free Instagram Followers Trial</Link></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-1 mt-6 md:mt-0">
              <li><Link href="#">Instagram Story Viewer</Link></li>
              <li><Link href="#">Twitter Video Downloader</Link></li>
              <li><Link href="#">Twitter GIF Downloader</Link></li>
              <li><Link href="#">TikTok Video Downloader</Link></li>
              <li><Link href="#">Facebook Video Downloader</Link></li>
              <li><Link href="#">Facebook Reels Downloader</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">My Account</h4>
            <ul className="space-y-1">
              <li><Link href="#">Log In</Link></li>
              <li><Link href="#">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>EN</span>
          </div>

          <div className="flex items-center space-x-1 text-gray-600">
            <span>© 2025 Buzzoid. All Rights Reserved.</span>
            <span>·</span>
            <span>Last Page Ltd. (HE470127), Nicosia, Cyprus.</span>
          </div>

          <div className="flex items-center space-x-1">
            <img src="https://buzzoid.com/wp-content/themes/buzz/v3/cards-C4TT5W1E.svg" alt="Apple Pay" className="h-5" />
            {/* <img src="/images/visa.png" alt="Visa" className="h-5" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-5" />
            <img src="/images/discover.png" alt="Discover" className="h-5" />
            <img src="/images/amex.png" alt="Amex" className="h-5" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
