import App from "../App";
import { connect } from "react-redux";
const mapStateToProps = state => ({
    message: state.message
});

const Game = connect(
    mapStateToProps,
)(App);

export default Game;
