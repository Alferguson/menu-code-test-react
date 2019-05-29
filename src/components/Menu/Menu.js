import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '../MenuItem';

const Menu = ({ menu }) => {
  return (
    <div>
      <MenuItem title="starters" section={menu.starters} />
      <MenuItem title="mains" section={menu.mains} />
      <MenuItem title="desserts" section={menu.desserts} />
    </div>
  )
}

Menu.propTypes = {

}

export default Menu