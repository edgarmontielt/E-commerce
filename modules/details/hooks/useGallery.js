import { useState } from "react";

export function useGallery(images) {
  const [curentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    if (curentIndex === 0) {
      return;
    }
    setCurrentIndex(curentIndex - 1);
  };

  const nextImage = () => {
    if (curentIndex === images.length - 1) {
      return;
    }
    setCurrentIndex(curentIndex + 1);
  };

  const handleImageIndex = (imageIdx) => {
    setCurrentIndex(imageIdx);
  };

  return { curentIndex, prevImage, nextImage, handleImageIndex };
}
