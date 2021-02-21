参考链接：

官方文档：https://zh-hans.reactjs.org/docs/hooks-intro.html

https://zh-hans.reactjs.org/docs/hooks-reference.html

https://www.cnblogs.com/xiaozhumaopao/p/10958788.html

react-hook https://zh-hans.reactjs.org/docs/hooks-state.html
http://www.ruanyifeng.com/blog/2019/09/react-hooks.html

React中useEffect使用 https://www.jianshu.com/p/6e525c3686ab

比较好的文章：https://juejin.cn/post/6844903985338400782

useEffect 没有返回值， 执行的是副作用，一定是在渲染之后完成的；

useMemo 是有返回值的，返回值可以直接参与渲染，是在渲染期间完成的；

useMemo 函数和 useEffect 函数均有第二个参数，决定是否执行该函数。

memo 是针对一段函数逻辑是否重复执行，类似于PureCompoent 作用是优化组件性能，防止组件触发重渲染；

useMemo(()=>{fn}) 等价于 useCallback(fn)


一般hooks 都是由 use 为前缀的，一定要遵循：

1. 把hook 放在最顶层，不要放在条件语句中，因为它依赖顺序；

2. 仅在组件和自定义hooks组件中调用，不要在其他普通函数中调用，因为普通函数说不清在哪里会被调用，导致hooks的顺序变化。例如

`javascript

function useLogin (){
    //自定义hooks，在其他地方调用也会是在顶层 有顺序的
    const [login.setLogin] = useState();
    useEffect(()=>{

    })
}

function fetchNews(){
    //而普通函数，说不清在哪里被调用，有肯能导致顺序不一样
    const [pageNo,setPageNo] = useState();
}

`
