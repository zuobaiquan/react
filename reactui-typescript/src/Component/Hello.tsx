import React from 'react'

interface IHelloPros {
  message?: string;

}

const Hello: React.FC<IHelloPros> = (props) => {
  return <h2>{props.message}</h2>
}
Hello.defaultProps = {
  message: '我是默认消息'
}
export default Hello