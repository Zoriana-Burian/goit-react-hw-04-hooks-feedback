import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return (
        <div>
            <p className={s.message}>{message}</p>
        </div>  
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;