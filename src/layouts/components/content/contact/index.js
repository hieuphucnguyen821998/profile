import styles from './contact.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')} id="Contact">
            <div className={cx('contact-background')}>
                <div className={cx('contact-text')}>
                    <h2>MY CONTACT</h2>
                </div>
            </div>
            <br />
            <div className={cx('contact')}>
                <div className={cx('contact-header')}>
                    <h3><em>Information</em></h3>
                </div>
                <br />                
            </div>
        </div>
    );
}

export default Contact;
