# React-TV-Horizontal-List

Netflix based Horizontal List using ReactTV.

```bash
yarn add react-tv-horizontal-list
```

```jsx
import React from 'react'
import ReactTV from 'react-tv'
import { HorizontalList } from 'react-tv-horizontal-list'

const data = [{
  title: 'My Movie 1',
  thumbUrl: 'http://path-to-some/image.png'
}]

ReactTV.render(
  <HorizontalList data={data} title={'Movies'}/>, document.querySelector('#root')
)
```
