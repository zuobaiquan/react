### 复杂的 useEffect

避免在 `useEffect` 中做太多事情，它们使代码易于出错，并且难以推理。

下面的例子中 犯了一个很大的错误：

```javascript
function Post({ id, unlisted }) {
  ...
  useEffect(() => {
    fetch(`/posts/${id}`).then(/* do something */)
    setVisibility(unlisted)
  }, [id, unlisted])
  ...
}
```

当 `unlisted` 改变时，即使 `id` 没有变，也会调用 `fetch`。

正确的写法应该是 将多个依赖分离：

```javascript
function Post({ id, unlisted }) {
  ...
  useEffect(() => { // when id changes fetch the post
    fetch(`/posts/${id}`).then(/* ... */)
  }, [id])
  useEffect(() => { // when unlisted changes update visibility
    setVisibility(unlisted)
  }, [unlisted])
  ...
}
```

