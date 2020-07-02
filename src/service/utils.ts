import { IMarkdown } from "../interface/posts";

export function markdownReg (str: string): IMarkdown {
  const TitleReg: RegExpMatchArray | null = str.match(/^#.*/)
  const BriefReg: RegExpMatchArray | null = str.match(/>.*/)
  let title: string = ''
  let brief: string = ''
  if(TitleReg){
     title = TitleReg[0]
     title = title.replace(/^# /,'')
  }
  if(BriefReg){
    brief = BriefReg[0]
    brief = brief.replace(/> /,'')
  }
  console.log(brief)
  let content: string = str.replace(/^#.*/,'').trim()
  return {
    title: title,
    brief: brief,
    content: content
  } 
}