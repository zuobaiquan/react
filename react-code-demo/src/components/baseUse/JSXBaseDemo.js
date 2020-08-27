import React from 'react'
import './style.css'

class JSXBaseDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '双越',
            imgUrl: 'https://img1.mukewang.com/5a9fc8070001a82402060220-140-140.jpg',
            flag: true
        }
    }
    render() {
      const rawHtml = '<span>富文本内容<i>斜体</i><b>加粗</b></span>'
      const rawHtmlData = {
          __html: rawHtml // 注意，必须是这种格式
      }
      const rawHtmlElem = <div>
          <p dangerouslySetInnerHTML={rawHtmlData}></p>
          <p>{rawHtml}</p>
      </div>
      return rawHtmlElem
    }
}

export default JSXBaseDemo
