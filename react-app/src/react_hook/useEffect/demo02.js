import React,{useState,useEffect} from 'react';

function App () {
    //定义初始化数据
    const [count,setCount] = useState(0);
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    });
    //常规函数
    const onResize = ()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    }
    //1 提高了代码复用（合并多个生命周期成了一个函数）
    //2 优化了关注点分离，即不同的事件放在了不同的 useEffect 函数中
    //使用副作用在某些生命周期中执行数据的操作
    useEffect(()=>{
        document.title = count;
    })
    useEffect(()=>{
        window.addEventListener('resize',onResize,false);
        return ()=>{ //默认是组件重渲染和组件卸载的时候执行
            window.addEventListener('resize',onResize,false);
        }
    },[]);
    //上面useEffect函数的空数组的参数，其作用是用于比对。决定该 useEffect 是否执行
    // 如果第二个参数不写，则每次都会执行这个 useEffect ，如果为空数组，则只执行一次
    // 如果数组中写了数据，则比对每一个数据，只有数组中的每一项都不变的情况下，才会再次执行；
    // 如下面，变化size 不会触发下面useEffect的函数执行
    useEffect(()=>{
        console.log(count);
    },[count])
    return (
        <button onClick={()=>{ setCount(count+1)}}>count {count} size:{size.width}X{size.height}</button>
    )
}

export default App;


//总结：为了实现初始化时和数据更新时，title发生变化，同样的交互代码要在两个生命周期中执行两次，类似的 再加上 监听函数，需要在卸载生命周期中 去掉卸载函数;
// 如果使用使用 effect hooks


