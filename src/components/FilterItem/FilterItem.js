import React, { useState, useEffect, useContext } from 'react'
import { Store } from '../../store/index'
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.2),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.3),
      },
      marginRight: theme.spacing(2),
      marginTop: 10,
      width: '25%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const FilterItem = () => {
    const classes = useStyles();
    const [term , setTerm] = useState('')
    const { globalState, setGlobalState } = useContext(Store)

    const setInputKeyword = e => {
        e.preventDefault()

        if (document.getElementById('inputFilter').value !== ""){
            document.getElementById('inputFilter').value = ""
            if (globalState.terms.indexOf(term) === -1){
                globalState.terms.push(term)
                setGlobalState({type: 'SET_TERMS', payload: { terms: globalState.terms }})
                //console.log("FilterItem globalState.term:", globalState.term)
                //console.log("FilterItem terms:", globalState.terms)               
            }
        }
    }

    useEffect(() => {
        setTerm(globalState.term)
    // eslint-disable-next-line
    },[])

    return (
        <div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={setInputKeyword}>
                <InputBase
                    id='inputFilter'
                    placeholder="Filter…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={ e => setTerm(e.target.value)}      
                />
            </form>
          </div>            
        </div>
    )
}

export default FilterItem
