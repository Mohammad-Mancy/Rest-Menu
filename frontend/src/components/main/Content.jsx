import React from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function Content() {

  // Mock server
  const items=[
    {id:1,
    icon:"plattersIcon",
    name:"Platters"},
    {id:2,
      icon:"plattersIcon2",
      name:"Platters2"},
    {id:3,
      icon:"plattersIcon4",
      name:"Platters4"},
    {id:3,
      icon:"plattersIcon5",
      name:"Platters5"},
    {id:3,
      icon:"plattersIcon6",
      name:"Platters6"},
    {id:3,
      icon:"plattersIcon7",
      name:"Platters7"},
  ]
  // _______________________

  return (
    <div>

      {/* Category bar */}
      <ScrollMenu scrollContainerClassName="bottom-nav">
        {items.map(({ id,icon,name }) => (
          <div className='category'>
              <p>{icon}</p>
              <div className='cat-title'>{name}</div>
          </div>
        ))}
      </ScrollMenu>


        
    </div>
  )
}

export default Content