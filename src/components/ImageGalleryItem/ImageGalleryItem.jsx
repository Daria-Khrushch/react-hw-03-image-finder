import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ url, id, tags }) {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={url}
        data-id={id}
        alt={tags}
        className={s['ImageGalleryItem-image']}
      />
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
};
