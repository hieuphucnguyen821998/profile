import styles from './content.module.scss';
import classNames from 'classnames/bind';
import About from './about';
import Experience from './experience';
import Contact from './contact';

const cx = classNames.bind(styles);

function Content(){
    return (
        <div className={cx('wrapper')}>
            <About />
            <Experience />
            <Contact />
        </div>
    )
}

export default Content;