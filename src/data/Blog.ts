/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'axios';
import axios from 'axios';

interface IBlog {
    GetPostByName: (name: string) => Promise<IPost>;
    GetRecentPosts: () => Promise<IPost[]>;
    GetPostsByTagType: (tagType: string) => Promise<IPost[]>;
}

export interface IPost {
    title: string,
    date: Date,
    content: string,
    shortContent: string,
    slug: string,
    tags: number[]
}

export interface WordPressPost {
    title: { rendered: string },
    content: { rendered: string },
    excerpt: { rendered: string },
    slug: string,
    date: string,
    tags: number[]
}

export interface ITag {
    id: number,
    name: string, //name is being buggy for some reason.
    slug: string
}

const WordPressPostToOurPost = (original: WordPressPost) => {
    const newPost: IPost = {
        title: original.title.rendered,
        content: original.content.rendered,
        date: new Date(original.date),
        shortContent: original.excerpt.rendered,
        slug: original.slug,
        tags: original.tags
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

    console.log('API URL', apiUrl);

    const posts = await axios.get<WordPressPost[]>(apiUrl);

    console.log('POSTS', posts);

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
        },
        GetPostsByTagType: async function (tagType: string): Promise<IPost[]> {
            const posts = await GetRecentWordpressBlogPosts(url);

            const tagInfo = await GetTagInfo(url);

            //so we need to get the tag code

            const tagCode = tagInfo.filter(tag => tag.slug == tagType)[0].id;

            if (tagCode == undefined) {
                console.error(`Could not find tag - ${tagType}`);
                throw new Error(`Could not find tag - ${tagType}`);
            }


            console.log(`Filtering Posts By Tag Type ${tagType}`);
            const filteredPosts = posts.filter(post => post.tags.includes(tagCode));
            console.log(filteredPosts);
            return filteredPosts;
        }
    }
    return blog;
}

const GetTagInfo = async (url: string): Promise<ITag[]> => {
    const apiUrl = `${url}tags?cacheBreaker=${Math.random() * Date.now()}`;

    console.log('API URL - Get Tags', apiUrl);

    const tags = await axios.get<ITag[]>(apiUrl);

    console.log('tags', tags);

    return tags.data;
};


//Use the local blog if you want to test a post locally for whatever reason.
//const LocalBlog = CreateBlog('http://127.0.0.1/wp/wp-json/wp/v2/');

const blogUrl = 'https://blog.shayne-quinton.com/wp-json/wp/v2/';
const RemoteBlog = CreateBlog(blogUrl);



export default RemoteBlog;

