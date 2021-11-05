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
import { getCollectibles, addCollectible, deleteCollectible, editcollectible } from '../APIFunctions/Collectible';


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



    updateName = event => {
        this.setState({ name: event })
        // console.log("changed name from ", this.state.name, "to ", event.target.value)
    }

    updatePrice = event => {
        this.setState({ price: event })
        // console.log("changed price from ", this.state.price, "to ", event.target.value)
    }

    updateDescription = event => {
        this.setState({ description: event })
        // console.log("changed description from ", this.state.description, "to ", event.target.value)
    }

    updateImage = event => {
        this.setState({ selectedFile: event })
        // console.log("changed image from ", this.state.selectedFile, "to ", event.target.value)
    }

    isFilled = () => {
        return this.state.name !== '' && this.state.price !== '' && this.state.description !== '' && this.state.selectedFile !== '';
    };

    doNothing = () => {
        console.log("Not Filled Out")
    };

    resetInputs = () => {
        this.setState({
            name: '',
            price: '',
            description: '',
            selectedFile: ''
        });
    };

    uploadValues = async (event) => {

        console.log("hi")
        event.preventDefault();
        const collectible = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            selectedFile: this.state.selectedFile
        }
        const res = await addCollectible(collectible);
        console.log('res', res);
        this.resetInputs();
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
                        <Input
                            type='text'
                            id="nameInput"
                            value={this.state.name}
                            onChange={event => {
                                this.updateName(event.target.value);
                            }}
                        // onChange={this.updateName} 
                        />
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Price' />
                        <Input
                            type='number'
                            id="priceInput"
                            value={this.state.price}
                            onChange={event => {
                                this.updatePrice(event.target.value);
                            }}
                        // onChange={this.updatePrice} 
                        />
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Description' />
                        <Input
                            type="text"
                            id="nameInput"
                            value={this.state.description}
                            onChange={event => {
                                this.updateDescription(event.target.value);
                            }}
                        // onChange={this.updateDescription} 
                        />
                        {/* <div textbox>
                            <TextareaAutosize
                                minRows={5}
                                id="descriptionInput"
                            />
                        </div> */}
                        <div style={{ marginBottom: '25px' }} />

                        <Label title='Image - Copy Paste a Google Link Here' />
                        <Input
                            type='text'
                            id="fileInput"
                            value={this.state.image}
                            onChange={event => {
                                this.updateImage(event.target.value);
                            }}
                        // onChange={this.updateImage} 
                        />
                        <div style={{ marginBottom: '25px' }} />
                    </form>

                    <Button
                        // onClick={() => {
                        //     if (!this.isFilled()) {
                        //         this.doNothing()
                        //     }
                        //     else {
                        //         this.uploadValues
                        //     }
                        // }}
                        onClick={this.uploadValues}
                        label={'Submit'}
                    />

                </div>
            </div>
        );
    }
}
