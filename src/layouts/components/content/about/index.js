import styles from './about.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSuitcase, faBottleWater } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx('wrapper')} id="About">
            <div className={cx('intro')}>
                <h1>About me</h1>
            </div>
            <div className={cx('body')}>
                <div className={cx('first-body')}>
                    <p>
                        Welcome to my website. My name is Nguyen Phuc Hieu. I have graduated from Academy of
                        Cryptography Techniques in 2021. My goal is to be a expert DevOps programmer in the future and I
                        always find a chance to make it possible.
                    </p>
                </div>
                <div className={cx('second-body')}>
                    <div className={cx('first-col')}>
                        <h4>
                            <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                            Nguyễn Phúc Hiếu
                        </h4>
                        <br />
                        <img
                            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80"
                            alt=""
                        />
                    </div>
                    <div className={cx('second-col')}>
                        <div className={cx('work-experience')}>
                            <div className={cx('exp')}>
                                <h3>
                                    <FontAwesomeIcon icon={faSuitcase} /> My Hard Skills
                                </h3>
                                <p>
                                    - Programming C/C++, HTML, CSS, Bootstrap 5, JavaScript, jQuery, ReactJS, PHP (using
                                    Laravel Framework) and Python (using Odoo) <br /> - Understanding of SQL Injection,
                                    CSRF, XSS. <br /> - Experience for Linux OS, Windows OS and MySQL <br /> - Using Git
                                    and Github platform
                                    <hr />
                                </p>
                            </div>
                            <div className={cx('exp')}>
                                <h3>
                                    <FontAwesomeIcon icon={faBottleWater} /> My Soft Skills
                                </h3>
                                <p>- Fluent English communication <br /> - Basic Japanese communication <br /> - Teamwork <br /> - Time management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
