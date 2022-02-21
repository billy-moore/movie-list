import React from 'react'
import { Button, TextField, Menu } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'; 
import ClearIcon from '@material-ui/icons/Clear';
const SearchDrawer = ( props ) => {
  return (
    <Menu
      open={ Boolean(props.anchorEl) }
      anchorEl={ props.anchorEl }
    >
        <TextField />
          <Button>
              <SearchIcon />
          </Button>
          <Button>
              <ClearIcon onClick={ props.close }/>
          </Button>
        
    </Menu>
  )
}

export default SearchDrawer