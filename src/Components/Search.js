import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));


const Search = (props) => {
    const [searchT, setSearchT] = useState('');

    const handleChange = (event) => {
        //  console.log("From Search Bar=>",event.target.value);
        setSearchT(event.target.value);
        console.log("Searchh=>", searchT);
    }

    const onSubmitClick=()=>{
        console.log("Props=>",props);
       props.callBacks(searchT);
    }
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search" onChange={(e) => handleChange(e)} />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                    onClick={onSubmitClick}
                >Search</Button>
            </form>
        </div>



    )
}

export default Search;