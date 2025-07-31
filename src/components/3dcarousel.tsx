import { posters } from '@/app/lib/posterData';
import Image from 'next/image';

const Carousel3D = () => {
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
                loading="eager"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel3D;
