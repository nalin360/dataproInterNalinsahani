import React from 'react'
const itemlist = [
    'item 1',
    'item 2 ',
    'item 3',
    'item 4',
    'item 5'
]
 function Renderlist(prop) {

const listitems = itemlist.map((item,i) => {
    return <li key={i}>{prop.content} {item}</li>
});
    return (
    <div>
        <h1>Render list</h1>
        <ul> {listitems}</ul>
    </div>
  )
}

export default Renderlist;