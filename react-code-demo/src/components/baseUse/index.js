import React from 'react'
import JSXBaseDemo from './JSXBaseDemo.js'

class BaseUseDemo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
             <JSXBaseDemo/> 
        </div>
    }
}

export default BaseUseDemo

// React 组件生命周期图示
// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
