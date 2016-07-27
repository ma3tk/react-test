import * as ArticleConstants from '../constants/Article';

const initialState = {
    article_info: ""
};

export default function article(state = initialState, action) {
    const { article_info } = action;
    switch (action.type) {
        case ArticleConstants.UPDATE_ARTICLE_INFO:
            return Object.assign({}, state, {
                article_info: article_info
            });
        default:
            return state;
    }
}
