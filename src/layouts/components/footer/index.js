import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <div className={cx('wrapper')}>
        <button className={cx('footer-button')} onClick={() => scrollToTop()}>
            <FontAwesomeIcon icon={faArrowUp}/> To the top
        </button>
    </div>;
}

export default Footer;