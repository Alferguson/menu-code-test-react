import React from 'react'
import PropTypes from 'prop-types'

const MenuItem = ({ section, onClick }) => {
  const otherClick = ()
  return (
    <div>
      {section.map( ({ name, price}) => {
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <input type="checkbox" onClick={() => onClick("diner1")}  />
          <input type="checkbox" onClick={() => onClick("diner2")}  />
          <input type="checkbox" onClick={(e) => onClick("diner2")}  />
        </div>
      })}
    </div>
  )
}

MenuItem.propTypes = {

}

export default MenuItem
