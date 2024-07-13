import { FC } from "react";

import css from "./ImageModal.module.css";

import Modal from "react-modal";

import { Image } from "../../Image-api";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image: { description, urls, user, likes, alt_description },
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modal}
    overlayClassName={css.overlay}
  >
    <div className={css.modalcontent}>
      <img
        className={css.img}
        src={urls.regular}
        alt={description || "Image"}
      />
      <div className={css.modalinfo}>
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <p>Description: {alt_description}</p>
      </div>
    </div>
  </Modal>
);

export default ImageModal;
