import Image from "next/image";
import { useGallery } from "modules/details/hooks/";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageSlider = ({ images }) => {
  const { curentIndex, prevImage, nextImage, handleImageIndex } =
    useGallery(images);

  return (
    <section className="gap-4 select-none p-8 relative">
      <figure className="aspect-square w-full relative">
        <Image
          className="aspect-square object-cover"
          src={images[curentIndex]}
          alt="product"
          fill
          priority
        />
      </figure>
      <div className="grid grid-cols-6 gap-8 h-auto w-full">
        {images.map((img, index) => (
          <figure
            key={img}
            className={`aspect-square relative hover:opacity-70 hover:scale-105 cursor-pointer ${
              index === curentIndex ? "opacity-60 scale-90" : ""
            }`}
            onClick={() => handleImageIndex(index)}
          >
            <Image src={img} fill alt="Image product" />
          </figure>
        ))}
      </div>
      <BiChevronLeft
        size={35}
        className={`absolute left-0 top-0 bottom-0 my-auto z-20 ${
          curentIndex === 0
            ? "opacity-25"
            : "cursor-pointer hover:scale-105 hover:opacity-50"
        }`}
        onClick={prevImage}
      />
      <BiChevronRight
        size={35}
        className={`absolute right-0 top-0 bottom-0 my-auto z-20 ${
          curentIndex === images.length - 1
            ? "opacity-25"
            : "cursor-pointer hover:scale-105 hover:opacity-50"
        }`}
        onClick={nextImage}
      />
    </section>
  );
};

export default ImageSlider;
