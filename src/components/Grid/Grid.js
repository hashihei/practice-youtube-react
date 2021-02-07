import React from 'react'
import Box from '@material-ui/core/Box'


const Grid = ({children}) => {

    return (
        <div style={{width: '100%'}}>
            <Box
             display="flex"
             flexWrap="wrap"
             css={{ maxWidth: 1200}}
            >
                {children}
            </Box>
        </div>
    )
}

export default Grid
