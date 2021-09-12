/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'axios';
import axios from 'axios';

interface IBlog {
    GetPostByName: (name: string) => Promise<IPost>;
}

interface IPost {
    title: string,
    date: Date,
    content: string
}

export interface WordPressPost {
    title: { rendered: string },
    content: { rendered: string },
    date: string
}

const GetWordpressPostByName = async (name: string, url: string): Promise<IPost> => {
    //Having issues with the browser and or the api cache not updating the post, so 
    //I have added a cachebreaker variable temporarily to make sure it doesn't happen so much.
    //while I figure out a fix
    const apiUrl = `${url}posts?slug=${name}&cacheBreak=${Math.random()}`;

    const post = await axios.get<WordPressPost[]>(apiUrl);

    const newPost: IPost = {
        title: post.data[0].title.rendered,
        content: post.data[0].content.rendered,
        date: new Date(post.data[0].date)
    }
    return newPost;
}

const CreateBlog = (url: string): IBlog => {
    const blog: IBlog = {
        GetPostByName: async function (name: string): Promise<IPost> {
            const post = await GetWordpressPostByName(name, url);
            return post;
        }
    }
    return blog;
}

//Use the local blog if you want to test a post locally for whatever reason.
//const LocalBlog = CreateBlog('http://127.0.0.1/wp/wp-json/wp/v2/');
const RemoteBlog = CreateBlog('https://blog.shayne-quinton.com/wp-json/wp/v2/');



export default RemoteBlog;

