import React, { Component } from 'react';
import { View, Text } from "native-base";

export default class LoadingScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Loading Data</Text>
            </View>
        );
    }

}