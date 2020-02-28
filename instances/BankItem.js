import React, { Component } from 'react';
import { View, Text } from "native-base";
import styles from './styles';
import themes from '../themes';
import { Icon } from 'react-native-elements'
var numeral = require('numeral');
var moment = require('moment');
require('moment/locale/id');

export default class BankItem extends Component {

    constructor(props) {
        super(props);  
    }

    convertDate(date){
        return moment(date).format('Do MMMM YYYY');
    }

    convertAmount(amount){
        return numeral(amount).format('0,00');
    }

    convertStatus(statusText){
        let returnText = "";
        if(statusText == "SUCCESS" )
        {
            returnText = "Berhasil"
        } else if (statusText == "PENDING")
        {
            returnText = "Ditunda"
        }else{
            returnText = "Undefined"
        }

        return returnText;
    }

    render() {
        const {data} = this.props;

        return (          
            <View style={styles.item}>  
                <View style={styles.item2}>  
                    <View style={styles.contentData}>
                        <View style={styles.bankRow}>
                        <Text style={themes.bold}>{data.sender_bank.toUpperCase()} </Text>
                            <Icon
                                name='arrow-forward' />
                        <Text style={themes.bold}>
                         {data.beneficiary_bank.toUpperCase()}</Text>                               
                        </View>
                        <Text>{data.beneficiary_name.toUpperCase()}</Text>    
                        <View style={styles.bankRow}>
                        <Text>Rp{this.convertAmount(data.amount)} </Text>
                            <Icon
                                name='add-circle' size={18} />
                        <Text>{this.convertDate(data.completed_at)}</Text>                
                        </View>
                    </View>                    
                    <View style={styles.smallWindow}>
                        <Text style={themes.white}>{this.convertStatus(data.status)}</Text>    
                    </View>
                </View>            
            </View>
        );
    }

}