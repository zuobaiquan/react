

useState 过多
避免在同一个组件中使用太多的 useState。

一个包含许多 useState 的组件可能会做多件事情，可以考虑是否要拆分它。

当然也存在一些复杂的场景，我们需要在组件中管理一些复杂的状态。

下面是自动输入组件的例子：

```javascript
function AutocompleteInput() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const reset = () => {
    setIsOpen(false)
    setInputValue('')
    setItems([])
    setSelectedItem(null)
    setActiveIndex(-1)
  }
  const selectItem = (item) => {
    setIsOpen(false)
    setInputValue(item.name)
    setSelectedItem(item)
  }
  ...
}
```

我们有一个 `reset` 函数，可以重置所有状态，还有一个 `selectItem` 函数，可更新一些状态。

这些函数都离不开 `useState` 定义的状态。如果功能继续迭代，那么函数就会越来越多，状态也会随之增加，数据流就会变得模糊不清。

在这种情况下，使用 `useReducer` 来代替 过多的 `useState` 是一个不错的选择。



```javascript
const initialState = {
  isOpen: false,
  inputValue: "",
  items: [],
  selectedItem: null,
  activeIndex: -1
}
function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return {
        ...initialState
      }
    case "selectItem":
      return {
        ...state,
        isOpen: false,
        inputValue: action.payload.name,
        selectedItem: action.payload
      }
    default:
      throw Error()
  }
}
function AutocompleteInput() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const reset = () => {
    dispatch({ type: 'reset' })
  }
  const selectItem = (item) => {
    dispatch({ type: 'selectItem', payload: item })
  }
  ...
}

```

通过使用 `reducer`，我们封装了管理状态的逻辑，并将复杂的逻辑移出了组件，这使得组件更容易维护。