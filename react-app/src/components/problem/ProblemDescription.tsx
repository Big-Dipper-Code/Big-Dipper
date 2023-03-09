import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const ProblemDescription = ({ children }: Props) => {
  return (
    <div>
      안녕하세요.2222
      <br />
      스마트폰으로 간단하게 코드를2223333
      <br />
      작성 하여, 알고리즘을 풀어보세요.
      {children}
    </div>
  )
}

export default ProblemDescription
