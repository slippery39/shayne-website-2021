import ArticleInfo from './ArticleInfo';

export interface ProjectInfo {
  title: string;
  image?: string;
  description: string;
  url: string;
  github?: string;
  startDate: Date,
  endDate: Date,
  articles?: ArticleInfo[],
  techUsed: string[]
}