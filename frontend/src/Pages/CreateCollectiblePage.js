import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';
import Banner from '../Components/Banner';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Label from '../Components/Label';
import './ManageAccountPage.css';
// import TextareaAutosize from '@mui/material/TextareaAutosize';


export default class CreateCollectiblePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            description: '',
            selectedFile: ''
        };
    }

    uploadValues = event => {

        console.log("hi")

        // Do storage stuff somehow
        // Do storage stuff somehow
        // Do storage stuff somehow

    }

    changeName = event => {
        this.setState({ name: event.target.value })
        console.log("changed name from ", this.state.name, "to ", event.target.value)
    }

    changePrice = event => {
        this.setState({ price: event.target.value })
        console.log("changed price from ", this.state.price, "to ", event.target.value)
    }

    changeDescription = event => {
        this.setState({ description: event.target.value })
        console.log("changed description from ", this.state.description, "to ", event.target.value)
    }

    changeImage = event => {
        this.setState({ selectedFile: event.target.value })
        console.log("changed image from ", this.state.selectedFile, "to ", event.target.value)
    }

    isFilled = () => {
        return this.state.name !== '' && this.state.price !== '' && this.state.description !== '' && this.state.selectedFile !== '';
    };

    doNothing = () => {
        console.log("Not Filled Out")
    };

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
                        <Input type='text' id="nameInput" value={this.state.name} onChange={this.changeName} />
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Price' />
                        <Input type='number' id="priceInput" value={this.state.price} onChange={this.changePrice} />
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Description' />
                        <Input type="textarea" id="nameInput" value={this.state.description} onChange={this.changeDescription} />
                        {/* <div textbox>
                            <TextareaAutosize
                                minRows={5}
                                id="descriptionInput"
                            />
                        </div> */}
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Image' />
                        <Input type='file' value={this.state.image} onChange={this.changeImage} />
                        <div style={{ marginBottom: '25px' }} />
                    </form>

                    <Button
                        onClick={() => {
                            if (!this.isFilled()) {
                                this.doNothing()
                            }
                            else {
                                this.uploadValues()
                            }
                        }}
                        label={'Submit'}
                    />

                </div>
            </div>
        );
    }
}
