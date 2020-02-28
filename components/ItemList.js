import React, { Component } from 'react';
import { View } from "native-base";
import BankItem from '../instances/BankItem';
import { SafeAreaView, FlatList } from 'react-native';
import themes from '../themes';

export default class ItemLists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataItem : {}
        }
    }

    componentDidMount(){
        this.setState({dataItem:this.props.data})
    }

    // componentDidUpdate(prevProps, prevState) {

    // }

    displayData() {        
        const {dataItem} = this.state;

        let dataObj = dataItem;

        let dataArray = Object.keys(dataObj).map(key => {
            let obj = dataObj[key];
            obj.keyName = key;
            return obj;
        })

          let arr = [];
        if (this.props.searchText != "" )
        {            
            for (var x = 0; x < dataArray.length; x++) {
                if (dataArray[x].beneficiary_name.toLowerCase().includes(this.props.searchText.toLowerCase())) {
                    arr.push(dataArray[x])
                }
            }
            return arr;  
        }else{
            return dataArray;
        }

        
    };

    render() {
        return (
            <View>
                <SafeAreaView style={themes.fl1}>
                    <FlatList
                        data={this.displayData()}
                        renderItem={({ item }) => <BankItem data={item} />}
                        keyExtractor={item => item.keyName}
                    />
                </SafeAreaView>                                        
            </View>
        );
    }

}