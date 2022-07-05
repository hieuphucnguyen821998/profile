import styles from './heading.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menuItems from './data';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Heading() {
    const [menuChange, setMenu] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    const handleScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    };

    return (
        <header className={cx('header')} id="Home">
            <div className={cx({menu: menuChange, menuScroll: !menuChange})}>
                <div className={cx('submenu-left')}>
                    {menuItems.map((item, index) => {
                        return (
                            <a href={`#${item.destination}`} className={cx('menu-button')} key={index}>
                                <FontAwesomeIcon icon={item.icon}/> {item.name}
                            </a>
                        );
                    })}
                </div>
                <div className={cx('submenu-right')}>Nguyễn Phúc Hiếu</div>
            </div>
            <div className={cx('header-logo')}>My Logo</div>
        </header>
    );
}

export default Heading;
