import React from 'react';
import Image from 'next/image';
import Carousel3D from '@/components/3dcarousel';

const page = () => {
  const extractedData = `
  Number of Posters: 17
Number of Participants: 60
Number of entries: 68
Participants per poster: {
  Raver: 8,
  Frank: 2,
  Goldenboy: 3,
  Igormaniac: 1,
  'Hoodie Gurl': 1,
  Cench: 1,
  DOOM: 5,
  'Boat Boy': 4,
  Rrrocky: 9,
  Ashley: 3,
  Spideryachty: 11,
  'Subaru Boy': 3,
  Tyler: 3,
  Tyla: 1,
  Teenx: 2,
  'Fashion Roadman': 6,
  AZAMAN: 5
}
Largest entry count: { poster: 'Spideryachty', count: 11 }
Posters with smallest entries: { posters: [ 'Igormaniac', 'Hoodie Gurl', 'Cench', 'Tyla' ], count: 1 }
Top 3 most popular posters: [
  { poster: 'Spideryachty', count: 11 },
  { poster: 'Rrrocky', count: 9 },
  { poster: 'Raver', count: 8 }
]
    `;
  return (
    <div className="bg-donblue">
      <nav className="h-auto w-full flex-center py-3 fixed top-0">
        {/* Header, add icon and anchor to the top of site, intended to be a single
        page presentation */}
        <Image
          src="/sean_donny_2_skulls_logo.svg"
          width={150}
          height={150}
          alt="Sean Donny Logo"
          priority={true}
          loading="eager"
          className="invert"
        />
      </nav>
      <div className="w-full h-screen bg-donblue text-4xl flex-center overflow-clip">
        <Image
          src="/sd_art_giveaway_hero_image.png"
          alt="Sean Donny Art Giveaway graphic with Sean Donny written in magazine cut out letters, and Sean squatting over his artwork laid out in a circular fashion around him"
          width={2027 / 4}
          height={1896 / 4}
          className="subtle-pulse"
        />
      </div>
      <div className="w-full h-screen">
        <div className="w-full h-[400px] flex-center overflow-clip">
          <Carousel3D />
        </div>

        <p className="font-funnel font-semibold text-4xl text-slate-200">
          17 posters up for grabs
        </p>
      </div>
      <div>141 comments across Instagram & Tiktok</div>
      <div>66 Birthday wishes, thank you</div>
      <div>68 entries from 60 participants</div>
      <div>Here are the results..</div>
      <div>Top 3 audience faves</div>
      <div>These ones were with unique admirers</div>
      <div>The highest in the room, this one was an audience favourite</div>
      <div>Graph of Contestant participation</div>
      <div>Raver winners</div>
      <div>Frank winners</div>
      <div>Goldenboy winners</div>
      <div>Igormaniac winners</div>
      <div>Hoodie Gurl winners</div>
      <div>Cench winners</div>
      <div>DOOM winners</div>
      <div>Boat Boy winners</div>
      <div>Rrrocky winners</div>
      <div>Ashley winners</div>
      <div>Spideryachty winners</div>
      <div>Subaru Boy winners</div>
      <div>Tyler winners</div>
      <div>Tyla winners</div>
      <div>Teenx winners</div>
      <div>Fashion Roadman winners</div>
      <div>AZAMAN winners</div>
      <div>Thank you to everyone who participated</div>
      <div>Reach out so I can ship your order to you!</div>
      <div>Development Process</div>
      <div>
        Scraping Comments, had to use Chrome extension as python approach kept
        proving difficult
      </div>
      <div>
        Parsed txt and csv data, transformed data using LLM (Claude), extracted
        key info from data
      </div>
      <div>Built site with Next.js, styled with Tailwind</div>
    </div>
  );
};

export default page;
