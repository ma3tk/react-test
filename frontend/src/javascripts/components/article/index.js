import React, {Component, PropTypes} from "react"
import {bindActionCreators} from "redux"
import { Link } from 'react-router'
import {connect} from "react-redux"
import ArticleInfo from "./info"
import * as ArticleActions from "../../actions/Article"

class Article extends Component {
    render() {
        return (
            <div>
                <Link to={"/"}>トップへ</Link>
                <ArticleInfo />
                <div>
                    <input type="text" ref="update_text" name="update_box" />
                    <button onClick={(e) => this.updateArticleInfo(e)}>Update Info</button>
                </div>
                <div>
                    <button onClick={(e) => this.fetchArticleInfo(e)}>Update Info With Ajax</button>
                </div>
                {this.props.children}
            </div>
        );
    }

    updateArticleInfo(e) {
        const { dispatch } = this.props;
        const updateText = this.refs.update_text.value;
        dispatch(ArticleActions.updateArticleInfo(updateText));
    }

    fetchArticleInfo(e) {
        const { dispatch } = this.props;
        dispatch(ArticleActions.fetchArticleInfo());
    }
}

function mapStateToProps(state) {
    const { article } = state;
    return {
        article
    }
}

export default connect(mapStateToProps)(Article)