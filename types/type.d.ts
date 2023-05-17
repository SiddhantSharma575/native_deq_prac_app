interface IArticle {
    id: number;
    title: string;
    body: string
}

type ArticleState = {
    articles : IArticle[],
    addArticle : (article : IArticle) => void
    removeArticle  : (article : IArticle) => void
}

type ArticleAction = {
    type : string,
    article: IArticle
}

type DispatchType = (args : ArticleAction) => ArticleAction