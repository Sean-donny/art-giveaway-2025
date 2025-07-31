'use client';
import React from 'react';
import Image from 'next/image';
import Carousel3D from '@/components/3dcarousel';
import { AnimatedCounter } from '@/components/animatedCounter';
import { RevealWrapper } from '@/components/revealWrapper';
import { SocialCommentsCard } from '@/components/socialComments/socialCommentsCard';
import { posters } from './lib/posterData';
import { motion } from 'framer-motion';
import PosterResultsTable from '@/components/resultsTable';

const page = () => {
  const gradientTextStyle: React.CSSProperties = {
    zIndex: 3000,
    transform: 'translateZ(1000px)', // Push text forward in 3D space
    position: 'relative', // Make sure it respects z-index
    backgroundColor: '#eee',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const bigThreeSpeech = [
    'A question as old as time',
    '(or at least as old as Twitter debates):',
    'who are the Big Three?',
    'Some say it’s Drake, Travis, and Kendrick.',
    'If you’re from the motherland,',
    'they say it’s Wizkid, Burna Boy, and Davido — with Rema moving up to take a spot.',
    'But in this particular battle,',
    'the people have spoken...',
    'The most popular posters were:',
    'Lil Yachty,',
    'A$AP Rocky,',
    'and Rema.',
    'Yes, Rema made the Big 3.',
  ];

  return (
    <div className="bg-donblue">
      <nav className="h-auto w-full flex-center py-3 fixed top-0">
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
          loading="eager"
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
        <div className="h-[300px] w-[2px] bg-linear-to-t from-sky-200 via-blue-400 to-indigo-900 to-90% m-auto"></div>
        <div className="py-[30px] md:px-[100px] max-w-5xl m-auto">
          <RevealWrapper animation="fadeInUp">
            <h3
              className="font-funnel font-semibold text-3xl lg:text-6xl text-slate-200 text-center text-shadow-lg"
              style={{
                background: '-webkit-linear-gradient(#eee, #444)',
                ...gradientTextStyle,
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
                background:
                  '-webkit-linear-gradient(90deg,rgba(238, 238, 238, 1) 30%, rgba(68, 68, 68, 1) 100%)',
                ...gradientTextStyle,
              }}
            >
              Here are the results...
            </h3>
          </RevealWrapper>
        </div>
      </div>
      <div className="font-funnel pt-10 bg-linear-to-b from-black from-10% to-donblue to-88%">
        <div className="flex-center overflow-x-clip w-full h-auto pt-20">
          <div className="relative w-[480px] h-[260px]">
            <RevealWrapper animation="rotateIn">
              <Image
                src={posters[10].src}
                alt={posters[10].alt}
                width={posters[10].width * 0.6}
                height={posters[10].height * 0.6}
                className="absolute top-0 left-0 -rotate-12 drop-shadow-lg"
              />
            </RevealWrapper>
            <RevealWrapper animation="rotateIn" delay={100}>
              <Image
                src={posters[8].src}
                alt={posters[8].alt}
                width={posters[8].width * 0.6}
                height={posters[8].height * 0.6}
                className="absolute top-0 left-[28.12%] rotate-3 drop-shadow-lg"
              />
            </RevealWrapper>
            <RevealWrapper animation="rotateIn" delay={200}>
              <Image
                src={posters[0].src}
                alt={posters[0].alt}
                width={posters[0].width * 0.6}
                height={posters[0].height * 0.6}
                className="absolute top-0 left-[59.37%] rotate-12 drop-shadow-lg"
              />
            </RevealWrapper>
          </div>
        </div>
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
          <p className="text-slate-200 text-base tracking-wide text-center p-10 max-w-5xl m-auto leading-relaxed pb-20">
            {bigThreeSpeech.map((t, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: i * 0.12 }}
                className="inline whitespace-pre-wrap"
              >
                {t + ' '}
              </motion.span>
            ))}
          </p>
        </RevealWrapper>
      </div>
      <div className="bg-black py-20">
        <RevealWrapper animation="fadeInUp">
          <PosterResultsTable />
        </RevealWrapper>
      </div>
      <div className="h-screen w-full flex-center bg-black">
        <RevealWrapper animation="fadeInUp">
          <p
            className="max-w-5xl text-center text-slate-200 font-outfit text-3xl w-3/4 m-auto"
            style={{
              background: '-webkit-linear-gradient(#eee, #777)',
              ...gradientTextStyle,
            }}
          >
            Thank you to everyone who wished me a happy birthday, and to those
            who entered the giveaway!
          </p>
        </RevealWrapper>
      </div>
      <div className="h-10 bg-black flex-center">
        <p className="text-center text-base font-semibold font-funnel text-[#222]">
          &#169;2025 • Sean Donny
        </p>
      </div>
    </div>
  );
};

export default page;
