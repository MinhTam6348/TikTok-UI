import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    disable,
    className,
    leftIcon,
    RightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disable,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {RightIcon && <span className={cx('icon')}>{RightIcon}</span>}
        </Comp>
    );
}

export default Button;
