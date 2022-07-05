import styles from './experience.module.scss';
import classNames from 'classnames/bind';
import data from './data';

const cx = classNames.bind(styles);

function Experience() {
    return (
        <div className={cx('wrapper')} id="Experience">
            {data.map((item, index) => {
                return (
                    <div className={cx('experience')} key={index}>
                        <h4>{item.index}</h4>
                        <p>{item.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Experience;
