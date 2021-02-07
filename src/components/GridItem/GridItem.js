import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root:{
        minWidth: 300,
        maxWidth: 300,
        minHeight: 250,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: fade(theme.palette.common.white, 0.2),
    },
    title: {
        marginTop: 6,
        marginBottom: 6,
    },
    detail: {
        marginTop: 6,
    },
}));


const GridItem = ({id, planname, detail, cost, tax}) => {
    const classes = useStyles();
    
    return (
        <Box>
            <Card id={id} className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h6">
                        {planname}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                        price: {cost} (tax {tax})
                    </Typography>
                    <Typography className={classes.detail} variant="body2">
                        {detail}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">More</Button>
                    <Button size="small">Compare</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default GridItem
