import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar navbar-ligth bg-ligth">
            <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
                <Typography variant='h4'>
                    NFTs Market Store
                </Typography>
                <Link to="/">
                    <Button color="primary">Home</Button>
                </Link>
                <Link to="/contato">
                    <Button color="primary">Contato</Button>
                </Link>
                <Cart />              
            </Grid>
            </nav>
        </>
    )
}

export default Header;
