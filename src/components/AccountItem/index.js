import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
                alt="Minh Tam"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Minh Tam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Minh Tam</span>
            </div>
        </div>
    );
}

export default AccountItem;
