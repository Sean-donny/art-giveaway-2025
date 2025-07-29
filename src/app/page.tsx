import React from 'react';
import Image from 'next/image';
import Carousel3D from '@/components/3dcarousel';
import { AnimatedCounter } from '@/components/animatedCounter';
import { RevealWrapper } from '@/components/revealWrapper';
import { SocialCommentsCard } from '@/components/socialComments/socialCommentsCard';

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
        <RevealWrapper>
          <Image
            src="/sean_donny_2_skulls_logo.svg"
            width={150}
            height={150}
            alt="Sean Donny Logo"
            priority={true}
            loading="eager"
            className="invert"
          />
        </RevealWrapper>
      </nav>
      <div className="w-full h-screen text-4xl flex-center overflow-clip bg-linear-to-b from-black from-10% to-donblue to-98%">
        <Image
          src="/sd_art_giveaway_hero_image.png"
          alt="Sean Donny Art Giveaway graphic with Sean Donny written in magazine cut out letters, and Sean squatting over his artwork laid out in a circular fashion around him"
          width={2027 / 4}
          height={1896 / 4}
          className="subtle-pulse"
        />
      </div>
      <div className="w-full h-auto mb-5">
        <RevealWrapper animation="fadeInUp">
          <h3
            className="font-funnel font-semibold text-6xl lg:text-8xl text-slate-200 text-center text-shadow-lg px-2"
            style={{
              zIndex: 3000,
              transform: 'translateZ(1000px)', // Push text forward in 3D space
              position: 'relative', // Make sure it respects z-index
            }}
          >
            <span id="posters-number">
              <AnimatedCounter endValue={17} duration={1500} />
            </span>{' '}
            posters up for grabs
          </h3>
        </RevealWrapper>
        <div className="w-full h-[400px] flex-center overflow-x-clip">
          <RevealWrapper animation="fadeInUp">
            <Carousel3D />
          </RevealWrapper>
        </div>
      </div>
      <div className="bg-linear-to-b from-donblue from-8% to-black pb-10">
        <div className="pt-[100px] pb-[60px] md:px-[100px] max-w-5xl m-auto">
          <RevealWrapper animation="fadeInUp">
            <h3
              className="font-funnel font-semibold text-3xl lg:text-6xl text-slate-200 text-center text-shadow-lg"
              style={{
                zIndex: 3000,
                transform: 'translateZ(1000px)', // Push text forward in 3D space
                position: 'relative', // Make sure it respects z-index
              }}
            >
              <span id="comments-number">
                <AnimatedCounter endValue={141} duration={1500} />
              </span>{' '}
              comments across Instagram & Tiktok
            </h3>
          </RevealWrapper>
        </div>
        <RevealWrapper animation="fadeInUp">
          <SocialCommentsCard />
        </RevealWrapper>
      </div>
      <div className="flex-center flex-col h-auto w-full bg-black">
        <div className="h-[200px] w-[2px] bg-linear-to-t from-sky-200 via-blue-400 to-indigo-900 to-90% m-auto"></div>
        <div className="py-[30px] md:px-[100px] max-w-5xl m-auto">
          <RevealWrapper animation="fadeInUp">
            <h3
              className="font-funnel font-semibold text-3xl lg:text-6xl text-slate-200 text-center text-shadow-lg"
              style={{
                zIndex: 3000,
                transform: 'translateZ(1000px)', // Push text forward in 3D space
                position: 'relative', // Make sure it respects z-index
                backgroundColor: '#eee',
                background: '-webkit-linear-gradient(#eee, #444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <span id="entries-number">
                <AnimatedCounter endValue={68} duration={1500} />
              </span>{' '}
              entries from{' '}
              <span id="participants-number">
                <AnimatedCounter endValue={60} duration={1800} />
              </span>{' '}
              participants
            </h3>
          </RevealWrapper>
        </div>
        <div className="h-[300px] w-[2px] bg-linear-to-b from-sky-200 via-blue-400 to-indigo-900 to-90% m-auto"></div>
        <div className="py-[30px] md:px-[100px] max-w-5xl m-auto">
          <RevealWrapper animation="fadeInUp">
            <h3
              className="font-funnel font-semibold text-3xl lg:text-6xl text-slate-200 text-center text-shadow-lg"
              style={{
                zIndex: 3000,
                transform: 'translateZ(1000px)', // Push text forward in 3D space
                position: 'relative', // Make sure it respects z-index
                backgroundColor: '#eee',
                background:
                  '-webkit-linear-gradient(90deg,rgba(238, 238, 238, 1) 30%, rgba(68, 68, 68, 1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Here are the results...
            </h3>
          </RevealWrapper>
        </div>
      </div>
      <div className="h-[60px] w-full bg-linear-to-b from-black from-10% to-donblue to-88%"></div>
      <div className="font-funnel pt-10">
        <RevealWrapper animation="fadeInUp">
          <h3
            className="font-funnel font-semibold text-6xl lg:text-8xl text-slate-200 text-center text-shadow-lg px-2"
            style={{
              zIndex: 3000,
              transform: 'translateZ(1000px)', // Push text forward in 3D space
              position: 'relative', // Make sure it respects z-index
            }}
          >
            The Big{' '}
            <span id="big-three-number">
              <AnimatedCounter endValue={3} duration={500} />
            </span>
          </h3>
        </RevealWrapper>
        <RevealWrapper animation="fadeInUp">
          <p className="text-slate-200 text-base tracking-wide text-center p-10 max-w-5xl m-auto">
            A question as old as time (or at least as old as Twitter debates):
            who are the Big Three? Some say it&apos;s Drake, Travis, and
            Kendrick. If you&apos;re from the motherland, they say it&apos;s
            Wizkid, Burna Boy, and Davido—with Rema coming to take a spot. But
            in this particular battle, the people have spoken... and somehow,
            the Big Three ended up being Lil Yachty, A$AP Rocky, and Rema. Yes,
            Rema made the Big 3.
          </p>
        </RevealWrapper>
      </div>
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
