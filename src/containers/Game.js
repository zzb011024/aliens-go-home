import App from "../App";
import { connect } from "react-redux";
import {moveObjects} from "../action/index";
const mapStateToProps = state => ({
    // message: state.message,
    angle:state.angle
});


const mapDispatchToProps = dipatch => ({
    moveObjects: (mousePosition) => {
        dipatch(moveObjects(mousePosition));
    },
})


const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);


export default Game;

