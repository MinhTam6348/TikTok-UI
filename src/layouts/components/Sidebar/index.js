import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeIconActive,
    UserGroupIcon,
    UserGroupIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icon';

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={HomeIconActive} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={UserGroupIconActive}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={LiveIconActive} />
            </Menu>
        </aside>
    );
}

export default Slidebar;
