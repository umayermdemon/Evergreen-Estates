import { Carousel } from "@material-tailwind/react";


const Banner = () => {
  return (
    <div>
       <Carousel
       transition={{ duration: 1.5 }} 
      
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-blue-900" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://i.ibb.co/H2VJynz/a054ac26.jpg"
        alt="image 1"
        className=" w-full h-[200px] lg:h-[835px] object-cover"
      />
      <img
        src="https://i.ibb.co/2PqCKC9/seaside-villas.jpg"
        alt="image 2"
        className=" w-full h-[200px] lg:h-[835px] object-cover"
      />
      <img
        src="https://i.ibb.co/KF6G3Tx/mountaine-Chalet.jpg"
        alt="image 3"
        className="  w-full h-[200px] lg:h-[835px] object-cover"
      />
      <img
        src="https://i.ibb.co/cJZQNmC/urban-boutique-hotel.jpg"
        alt="image 3"
        className="  w-full h-[200px] lg:h-[835px] object-cover"
      />
    </Carousel>
    </div>
  );
};

export default Banner;