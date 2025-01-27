import React, { FC } from "react";

import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={css.button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
