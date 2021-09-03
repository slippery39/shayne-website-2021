import ArticleInfo from './ArticleInfo';

const articles: ArticleInfo[] = [
    {
        id: 'post-mortem-pokemon',
        date: new Date('August 03 2021'),
        title: 'Post Mortem - Pokemon Battle Simulator',
        description: 'A reflection on lessons learned from developing the Pokemon Battle Simulator',
        tags: ['pokemon battle simulator', 'post mortem']
    },
    {
        id: 'lumines-clone',
        date: new Date('September 03 2021'),
        title: 'The development of a Lumines Clone – Month 1',
        description: 'A development diary of building a clone of the game Lumines',
        tags: ['lumines clone', 'dev-diary']
    }
]

export function getArticles(): ArticleInfo[] {
    return [...articles];
}

