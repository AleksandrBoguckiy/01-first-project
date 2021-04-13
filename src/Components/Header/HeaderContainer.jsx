import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();

    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (action) => ({
    isAuth: action.auth.isAuth,
    login: action.auth.login
});

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);