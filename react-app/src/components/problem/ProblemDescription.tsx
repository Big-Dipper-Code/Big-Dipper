import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
interface Props {
    children?: ReactNode
    // any props that come into the component
}

const ProblemDescription = ({ children }: Props) => {
    const markdown = `
# 별찍기-1 

## 문제 설명 
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 
## 예시 
### 입력 
\`\`\`text 
5
\`\`\` 
### 출력 
\`\`\`text 
* 
** 
*** 
**** 
***** 
\`\`\`
`
    return (
        <div>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}

export default ProblemDescription
