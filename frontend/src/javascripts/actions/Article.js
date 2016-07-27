import * as ArticleConstants from '../constants/Article';

export function updateArticleInfo(updateText) {
    return {
        type: ArticleConstants.UPDATE_ARTICLE_INFO,
        article_info: updateText
    }
}

export function fetchArticleInfo() {
    return function (dispatch) {
        return fetch('/ajax', {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(json => {
                dispatch(updateArticleInfo(json.title));
            });
    }
}

