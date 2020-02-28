import React, { Component } from 'react';
import { Container, View, Content } from "native-base";
import SearchBar from '../components/SearchBar';
import styles from './styles';
import ItemLists from '../components/ItemList';
import Block from '../components/Block';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    componentDidMount(){
        
    }

    onUpdateText = (e)=>{
        this.setState({
            searchText: e
        })
    }

    render() {
        const {data} = this.props; 
        const {searchText} = this.state;       

        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={{ flexGrow: 1 }}>  
                    <View style={styles.greyBg}>    
                        <Block blockStyle={styles.colorOrange}/>                
                        <SearchBar onUpdate={this.onUpdateText} />                    
                        <ItemLists data={data} searchText={searchText} />                            
                    </View>  
                </Content>         
            </Container>
        );
    }

}