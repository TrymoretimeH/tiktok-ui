import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6e5a87dd45745546ec30b3abf300ec75~c5_300x300.webp?x-expires=1659110400&x-signature=2COkODQJ5Mq1zzvWouOSjGdyQPo%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoaa</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    ></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>hoaa.pinkky</span>
            </div>
        </div>
    );
}

export default AccountItem;
