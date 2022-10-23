import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './ImageModal.module.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export interface ImageModalProps {
  src: string;
  alt: string;
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.ImgContainer}>
      <img
        className={styles.img}
        onClick={handleOpen}
        src={src}
        alt={alt}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-image"
      >
        <Box className={styles.imgBox}>
          <button
            className={styles.imgBoxClose}
            onClick={handleClose}
          >
            <CloseOutlinedIcon fontSize="large" />
          </button>
          <img
            className={styles.imgBoxImage}
            onClick={handleOpen}
            src={src}
            alt={alt}
          />
        </Box>
      </Modal>
    </div>
  );
}
