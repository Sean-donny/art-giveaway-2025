type Poster = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Posters = Poster[];

import Image from 'next/image';

const Carousel3D = () => {
  const posters: Posters = [
    { src: '/16x20_rema.jpg', width: 320, height: 400, alt: 'giveaway poster' },
    {
      src: '/16x20_frank.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_goldenboy.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_igormaniac.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_hoodie_gurl.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_cench_black.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    { src: '/16x20_doom.jpg', width: 320, height: 400, alt: 'giveaway poster' },
    {
      src: '/16x20_boat_boy.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    { src: '/a2_rrrocky.jpg', width: 282, height: 400, alt: 'giveaway poster' },
    { src: '/a2_ashley.jpg', width: 282, height: 400, alt: 'giveaway poster' },
    {
      src: '/16x20_spideryachty.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_subaru_boy.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_tyler.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    { src: '/a4_tyla.jpg', width: 283, height: 400, alt: 'giveaway poster' },
    {
      src: '/16x20_teenx.jpg',
      width: 320,
      height: 400,
      alt: 'giveaway poster',
    },
    {
      src: '/16x20_fashion_roadman.jpg',
      width: 500 * 1.2,
      height: 400 * 1.2,
      alt: 'giveaway poster',
    },
    {
      src: '/20x10_azaman.jpg',
      width: 800 * 1.2,
      height: 400 * 1.2,
      alt: 'giveaway poster',
    },
  ];
  const totalImages = posters.length;
  const anglePerImage = 360 / totalImages;
  const radius = 700;

  return (
    <div className="scene">
      <div
        className="carousel"
        style={
          {
            '--duration': '30s',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties
        }
      >
        {posters.map((poster, index) => {
          const rotationY = anglePerImage * index;
          const isLandscape = poster.width > poster.height;
          const scaleFactor = isLandscape ? 0.7 : 1;
          const adjustedRadius = isLandscape ? radius + 50 : radius;

          return (
            <div
              key={index}
              className="carouselItem"
              style={
                {
                  '--poster-width': `${poster.width * scaleFactor}px`,
                  '--poster-height': `${poster.height * scaleFactor}px`,
                  transform: `
          translate(-50%, -50%) 
          rotateY(${rotationY}deg) 
          translateZ(${adjustedRadius}px)
          scale(${scaleFactor})
        `,
                } as React.CSSProperties
              }
            >
              <Image
                src={poster.src}
                width={poster.width}
                height={poster.height}
                alt={poster.alt}
                className="carouselImage"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel3D;
