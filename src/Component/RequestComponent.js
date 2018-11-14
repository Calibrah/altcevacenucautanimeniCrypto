import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataAction} from "../Redux/dataActions";
import {decode, encode} from 'base-64'

import {styles} from './Styles'

class RequestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    makeCredentials = ( ) => {
        let mainform = this.state.username + ':' + this.state.password;
        console.tron.log(mainform)
        return encode(mainform );
    }

    onSubmit = ( ) => {
        let credentials = this.makeCredentials();
        console.tron.log(credentials)
        this.props.onFetchData(credentials);
    }

    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={'username'}
                        clearButtonMode={"always"}
                        style={styles.input}
                        onChangeText={(text) => this.setState({username: text})}
                        spellCheck={false}
                        autoCorrect={false}
                        autoCapitalize={"none"}
                        returnKeyType={'next'}
                        onSubmitEditing={() => {
                            this.passwordTextInput.focus()
                        }}
                        blurOnSubmit={false}
                    />
                    <TextInput
                        placeholder={'password'}
                        clearButtonMode={"always"}
                        style={styles.input}
                        onChangeText={(text) => this.setState({password: text})}
                        spellCheck={false}
                        autoCorrect={false}
                        secureTextEntry
                        ref={(input) => {
                            this.passwordTextInput = input
                        }}
                        returnKeyType={'done'}
                    />
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (!this.state.username.length || !this.state.password.length) {
                            alert("Enter your credentials")
                        }
                        else {
                            this.onSubmit();
                        }
                    }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: (credentials) => {
            dispatch(fetchDataAction(credentials));
        },
    }
}

const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(RequestComponent);
export default RequestContainer;