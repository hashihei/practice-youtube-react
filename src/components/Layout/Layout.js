import React from 'react'
import Header from '../Header/Header'
import { fade, makeStyles } from '@material-ui/core/styles';
import FilterItem from '../FilterItem/FilterItem'
import FilterItemTags from '../FilterItemTags/FilterItemTags'

const useStyles = makeStyles((theme) => ({
    base: {
        backgroundImage: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
        height: '100vh',          
    },
    wrapper: {
        height: '100vh',
    },
    main: {
        marginLeft: 30,
    },

  }));

const Layout = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.base}>
            <div className={classes.wrapper}>
                <Header />
                <div className={classes.main}>
                    <FilterItem />
                    <FilterItemTags />
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout