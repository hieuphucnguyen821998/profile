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
                <div className={cx('contact-body')}>
                    <div className={cx('contact-map')}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.873792647895!2d105.82755031533232!3d21.037735292846776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba0afe50d0f%3A0xb9bdb3d576dcc4c5!2zMTU4IFAuIE5n4buNYyBIw6AsIE5n4buNYyBI4buTLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1656928010973!5m2!1sen!2s" width={600} height={450} style={{border: '0'}} allowFullScreen={""} loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
                    </div>
                    <div className={cx('contact-information')}>
                        <h3><FontAwesomeIcon icon={faMapMarker} /> 158/21A Ngoc Ha, Ba Dinh, Ha Noi</h3>
                        <h3><FontAwesomeIcon icon={faPhone} /> My Phone: 0969109983</h3>
                        <h3><FontAwesomeIcon icon={faEnvelope} /> My Email: hieuphucnguyen821998@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
