import React, { FC } from "react";

import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

import { Image } from "../../Image-api";

interface ImageGalleryProps {
  images: Image[];
  setSelectedImage: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, setSelectedImage }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css.galleryitem}
          onClick={() => setSelectedImage(image)}
        >
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => setSelectedImage(image)}
            author={image.user.name}
            likes={image.likes}
            description={image.description || ""}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
