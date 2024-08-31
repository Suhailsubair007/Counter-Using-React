import PropTypes from "prop-types";

function UserGreeting(props) {
  const WelcomeMessage = <h2>Welcome {props.username}</h2>;
  const LoginPrompt = <h2>Please log in to continue</h2>;

  return props.isLoggedin ? WelcomeMessage : LoginPrompt;
}

UserGreeting.propTypes = {
  isLoggedin: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedin: false,
  username: "Guest",
};

export default UserGreeting;
