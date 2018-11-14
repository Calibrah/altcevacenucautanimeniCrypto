import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Animated,
    TouchableOpacity, Alert, FlatList, Image, StatusBar, Platform, ScrollView, Linking
} from 'react-native';
import RequestContainer from "./RequestComponent";
import ResponseContainer from './ResponseComponent'

export default class MainRootComponent extends Component {

    render() {
        return(
            <View style={{justifyContent: 'center'}}>
                <RequestContainer />
                <ResponseContainer />
            </View>
        )
    }
}