import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import FetchDataReducer from '../Redux/fetchDataReducer';

import {styles} from './Styles'

class ResponseComponent extends Component {
    render(){
        return(
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
                <Text>hey</Text>
            </View>
        )
    }
}

const mapStateToProps = ( state ) => ({
    data: state.FetchDataReducer,
})

const RootContainer = connect(mapStateToProps, null)(ResponseComponent)
export default RootContainer;