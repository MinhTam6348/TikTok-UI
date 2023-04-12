import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import style from './image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handlerError = () => {
        setFallBack(fallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handlerError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
