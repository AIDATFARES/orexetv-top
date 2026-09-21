export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  content: string;
}

import { post5 } from "./posts/post-5-apple-tv";
import { post6 } from "./posts/post-6-internet-speed";
import { post7 } from "./posts/post-7-firestick";
import { post8 } from "./posts/post-8-sports-setup";
import { post9 } from "./posts/post-9-black-screen";

export const blogPosts: BlogPost[] = [
  post8,
  post7,
  post5,
  post6,
  post9,
];
