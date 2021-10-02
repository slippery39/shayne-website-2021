/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'axios';
import axios from 'axios';

interface IBlog {
    GetPostByName: (name: string) => Promise<IPost>;
    GetRecentPosts: () => Promise<IPost[]>;
}

export interface IPost {
    title: string,
    date: Date,
    content: string,
    shortContent: string,
    slug: string
}

export interface WordPressPost {
    title: { rendered: string },
    content: { rendered: string },
    excerpt: { rendered: string },
    slug: string,
    date: string
}

const WordPressPostToOurPost = (original: WordPressPost) => {
    const newPost: IPost = {
        title: original.title.rendered,
        content: original.content.rendered,
        date: new Date(original.date),
        shortContent: original.excerpt.rendered,
        slug: original.slug
    }
    return newPost;
}

const GetWordpressPostByName = async (name: string, url: string): Promise<IPost> => {
    //Having issues with the browser and or the api cache not updating the post, so 
    //I have added a cachebreaker variable temporarily to make sure it doesn't happen so much.
    //while I figure out a fix
    const apiUrl = `${url}posts?slug=${name}&cacheBreaker=${Math.random() * Date.now()}`;

    const post = await axios.get<WordPressPost[]>(apiUrl);

    return WordPressPostToOurPost(post.data[0]);
}

const GetRecentWordpressBlogPosts = async (url: string): Promise<IPost[]> => {

    const apiUrl = `${url}posts?cacheBreaker=${Math.random() * Date.now()}`;

    const posts = await axios.get<WordPressPost[]>(apiUrl);

    const newPosts: IPost[] = posts.data.map(wpPost => {
        return WordPressPostToOurPost(wpPost);
    });

    return newPosts;
}

const CreateBlog = (url: string): IBlog => {
    const blog: IBlog = {
        GetPostByName: async function (name: string): Promise<IPost> {
            const post = await GetWordpressPostByName(name, url);
            return post;
        },
        GetRecentPosts: async function (): Promise<IPost[]> {
            const posts = await GetRecentWordpressBlogPosts(url)
            return posts;
        }
    }
    return blog;
}

//Use the local blog if you want to test a post locally for whatever reason.
//const LocalBlog = CreateBlog('http://127.0.0.1/wp/wp-json/wp/v2/');
const RemoteBlog = CreateBlog('https://blog.shayne-quinton.com/wp-json/wp/v2/');



export default RemoteBlog;

