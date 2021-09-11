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

    console.log('getting wordpress post');
    const apiUrl = `${url}posts?slug=${name}`;
    console.log(apiUrl);
    const post = await axios.get<WordPressPost[]>(apiUrl);

    console.log(post);
    console.log(post.data[0]);

    const newPost: IPost = {
        title: post.data[0].title.rendered,
        content: post.data[0].content.rendered,
        date: new Date(post.data[0].date)
    }
    console.log('done getting wordpress post');
    return newPost;
}

const CreateBlog = (url: string): IBlog => {

    const blog: IBlog = {

        GetPostByName: async function (name: string): Promise<IPost> {
            console.log('getting post');
            const post = await GetWordpressPostByName(name, url);
            console.log('done getting post');

            return post;
        }
    }
    return blog;
}

//const LocalBlog = CreateBlog('http://127.0.0.1/wp/wp-json/wp/v2/');
const RemoteBlog = CreateBlog('http://blog.shayne-quinton.com/wp-json/wp/v2/');



export default RemoteBlog;

