import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout'
import Grid from '../components/Grid/Grid'
import GridItem from '../components/GridItem/GridItem'
import { fetchPlansData } from '../apis/index'
import { Store } from '../store/index'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    group: {
        fontSize: 22,
        marginTop: 40,
        marginBottom: 0,
    },
  }));

const Top = () => {
    const classes = useStyles();
    const { globalState, setGlobalState } = useContext(Store)

    useEffect(() => {
        fetchPlansData().then((res) => {
            console.log('data',res)
            setGlobalState({type: 'SET_PLANS', payload: {plans: res.data.plans}})
        })
     // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <h2 className={classes.group}>plans</h2>
            <Grid>
                {
                    globalState.plans && globalState.plans.map((data) => {
                        return(
                            <GridItem
                                id={data.id}
                                key={data.id}
                                cost={data.plan.cost_year}
                                tax={data.plan.tax}
                                planname={data.plan.name}
                                detail={data.plan.comment}
                            />
                        )
                    })
                }
            </Grid>
        </Layout>
    )
}

export default Top
