import ArticleInfo from './ArticleInfo';

const articles: ArticleInfo[] = [
    {
        id: 'post-mortem-pokemon',
        date: new Date('August 03 2021'),
        title: 'Post Mortem - Pokemon Battle Simulator',
        description: 'A reflection on lessons learned from developing the Pokemon Battle Simulator',
        tags: ['pokemon battle simulator', 'post mortem']
    }
]

export function getArticles(): ArticleInfo[] {
    return [...articles];
}

