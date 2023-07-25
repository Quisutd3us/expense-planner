import PropTypes from 'prop-types';

Messages.propTypes = {
  typeMsg: PropTypes.string,
  children: PropTypes.string
};

function Messages({children, typeMsg}) {
  return (
      <div className={`alert ${typeMsg}`}>{children}</div>
  );
}

export default Messages;