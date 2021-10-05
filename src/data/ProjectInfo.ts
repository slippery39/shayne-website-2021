export interface ProjectInfo {
  title: string;
  image?: string;
  description: string;
  url?: string;
  github?: string;
  startDate: Date,
  endDate?: Date,
  articleQuery?: string;
  articles?: string[],
  techUsed: string[]
}