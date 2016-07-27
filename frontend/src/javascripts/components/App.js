import React, {Component, PropTypes} from "react"
import {connect} from "react-redux"
import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    this is base.
                </div>
                <Link to={"/article"}>記事へ</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { article } = state;
    return {
        article
    }
}

export default connect(mapStateToProps)(App)