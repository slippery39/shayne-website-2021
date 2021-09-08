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

interface WordPressPost {
    title: { rendered: string },
    content: { rendered: string },
    date: string
}

const DefaultBlog: IBlog = {
    GetPostByName: async (name: string) => {
        //find the post info from the articles.
        console.log(name);

        console.log('testing our axios call');
        const post = await axios.get<WordPressPost[]>(`http://127.0.0.1/wp/wp-json/wp/v2/posts?slug=${name}`);

        console.log('done our axios call');
        console.log(post);

        const newPost: IPost = {
            title: post.data[0].title.rendered,
            content: post.data[0].content.rendered,
            date: new Date(post.data[0].date)
        }

        console.log(newPost)

        return newPost;
    }
}

export default DefaultBlog;

