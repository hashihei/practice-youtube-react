import React, { useEffect, useContext } from 'react'
import { Store } from '../../store/index'
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      marginRight: theme.spacing(2),
      marginTop: 10,
    },
    item: {
        backgroundColor: fade(theme.palette.common.white, 0.3),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.3),
        },
    },
    group: {
        fontSize: 22,
        marginTop: 20,
        marginBottom: 10,
    },
  }));

const FilterItemTags = () => {
    const classes = useStyles();
    const { globalState, setGlobalState } = useContext(Store)

    function deleteTag(deleteFilterItem) {
        const newFilterItemTag = globalState.terms.filter((item) => item !== deleteFilterItem)
        setGlobalState({type: 'SET_TERMS', payload: {terms: newFilterItemTag }})
        //console.log("deleteTag deleteFilterItem:", deleteFilterItem)
        //console.log("deleteTag newFilterItemTag:", newFilterItemTag)
        //console.log("deleteTag globalState.terms:", globalState.terms)
    }

    useEffect(() => {
        //setTerms(globalState.terms)
    // eslint-disable-next-line
    },[])

    return (
        <div className={classes.root}>
            <h2 className={classes.group}>filter</h2>
            {
                globalState.terms && globalState.terms.map((filterItem) => {
                    return (
                        <Tooltip key={filterItem} className={classes.item} title="delete">
                            <Button onClick={() => deleteTag(filterItem)}>{filterItem}</Button>
                        </Tooltip>
                    )
                })
            }
        </div>
    )
}

export default FilterItemTags
