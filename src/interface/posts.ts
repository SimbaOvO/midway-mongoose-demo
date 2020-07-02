export interface IPosts{
  _id: string,
  title: string,
  content: string,
  count: number,
  time: Date,
  brief: string,
  isDelete: number
}

export interface IPostOptions{
  title: string,
  brief: string,
  content: string,
  count: number,
  isDelete: number
}

export interface IMarkdown{
  title: string,
  brief: string,
  content: string
} 

export interface IPostService{
  getPosts(): Promise<IPosts[]>,
  getPostsById(id: string): Promise<IPosts[]>
  addCount(id: string): Promise<Boolean>
  insert(markdown: string): Promise<IPosts>
}

export interface IPostUpdate{
  ok: Boolean
}