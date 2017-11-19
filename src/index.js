import React from 'react'
import ReactTV from 'react-tv'
import { animes, movies } from './data'

class HorizontalList extends React.Component {
  render() {
    return (
      <div class="contain">
        <h1>Animes</h1>
        <div class="row">
          <div class="row__inner">
            {List(animes)}
          </div>
        </div>
        <h1>Movies</h1>
        <div class="row">
          <div class="row__inner">
            {List(movies)}
          </div>
        </div>
      </div>
    )
  }
}

function List(source) {
  let list = []
  source.forEach((item) => {
    const tile = (
      <div class="tile" tabindex="0">
        <div class="tile__media">
          {
            (item.thumbUrl)
            ? <img class="tile__img" src={item.thumbUrl}/>
            : null
          }
        </div>
        <div class="tile__details"/>
        <div class="tile__title">
          {
            (item.title)
            ? item.title
            : null
          }
        </div>
      </div>
    )

    list.push(tile)
  })

  return list
}

export default HorizontalList

ReactTV.render(<HorizontalList/>, document.querySelector('#root'))
