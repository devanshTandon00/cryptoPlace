import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';


export default class CreateCollectiblePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='CreateCollectiblePage'>

                <Banner title='Create Collectible' />

                {/* <form className='CreateCollectiblePage' noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form> */}

                {/* <Avatar
                    style={{
                        margin: 'auto',
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'black'
                    }}
                    src='placeholder'
                /> */}
                <form>
                    <Label title='Name' />
                    <Input />
                    <div style={{ marginBottom: '25px' }} />
                    <Label title='Description' />
                    <Input />
                    <div style={{ marginBottom: '25px' }} />
                </form>
                <Button
                    onClick={() => { console.log('hi') }}
                    label={'Submit'}
                />

            </div>





        );
    }
}