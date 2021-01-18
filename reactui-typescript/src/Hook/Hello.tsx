import React from 'react'

interface IHelloPros {
  message?: string;
  children?: React.ReactNode
}

const Hello: React.FC<IHelloPros> = (props) => {
  return <h2>{props.message}{props.children}</h2>
}
Hello.defaultProps = {
  message: '我是默认消息'
}
export default Hello