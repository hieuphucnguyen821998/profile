import styles from './defaultLayout.module.scss';
import classNames from 'classnames/bind';
import { Heading, Content, Footer } from '../components';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return <div className={cx('wrapper')}>
        <Heading />
        <Content />
        <Footer />
    </div>;
}

export default DefaultLayout;
