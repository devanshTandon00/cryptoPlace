import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default class CreateCollectiblePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div
                className='CreateCollectiblePage'>

                <form className='CreateCollectiblePage' noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>

                {/* <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <input type="submit" value="Submit" />
            </form> */}

            </div>

        );
    }
}