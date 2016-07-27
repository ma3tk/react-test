import * as ArticleConstants from '../constants/Article';

export function updateArticleInfo(updateText) {
    return {
        type: ArticleConstants.UPDATE_ARTICLE_INFO,
        article_info: updateText
    }
}

