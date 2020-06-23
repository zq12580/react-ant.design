// 高阶组件
import React from 'react'

const HigherOrder = (Component: React.FC<any>) => {
  return (
    () => {

      console.log();

      return (
        <div>
          <p>我是高阶组件中函数p</p>
          <Component sex={'男'} />
        </div>
      )
    }
  )
}
export default HigherOrder
