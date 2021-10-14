import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import './ManageAccountPage.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';


export default class CreateCollectiblePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='CreateCollectiblePage'>

                <Banner title='Create Collectible' />



                <div className='manage-account-content'>

                    <Avatar
                        style={{
                            margin: 'auto',
                            width: '100px',
                            height: '100px',
                            backgroundColor: 'black'
                        }}
                        src='placeholder'
                    />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            style={{
                                color: '#bababa',
                                fontFamily: 'DM Sans, sans-serif',
                                alignItems: 'center',
                                marginTop: '2px',
                                backgroundColor: 'white',
                                border: 'none'
                            }}
                            onClick={() => console.log("hi")}
                        >
                            Edit
                        </button>
                    </div>

                    <form>
                        <Label title='Name' />

                        <Input />
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Description' />
                        <div textbox>
                            <TextareaAutosize
                                minRows={5}
                            />
                        </div>
                        <div style={{ marginBottom: '25px' }} />
                    </form>

                    <Button
                        onClick={() => { console.log('hi') }}
                        label={'Submit'}
                    />

                </div>
            </div>
        );
    }
}