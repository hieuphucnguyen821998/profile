import styles from './defaultLayout.module.scss';
import classNames from 'classnames/bind';
import { Heading, Content } from '../components';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return <div>
        <Heading />
        <Content />
    </div>;
}

export default DefaultLayout;
