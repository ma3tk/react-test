import React, {Component, PropTypes} from "react"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class ArticleInfo extends Component {
    render() {
        const { article } = this.props;
        const { article_info } = article;
        return (
            <div>
                記事の情報: {article_info}
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

export default connect(mapStateToProps)(ArticleInfo)