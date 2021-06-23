import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import db from '../config'

export default class DonorScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            donors: []
        }
    }

    componentDidMount = () => {
        db.collection('Gods').onSnapshot((snapshot) => {
            var donors = [];
            snapshot.docs.map((document) => {
                var details = document.data();
                donors.push(details)
            });
            this.setState({
                donors: donors,
            })
        })
    }

    render() {
        return (
            <View style={{backgroundColor:'black'}}>
                <Text style={{color:'white'}} >
                    Donors
                </Text>
                <FlatList 
                keyExtractor={(item,index)=>{index.toString()}} 
                data={this.state.donors} 
                renderItem={({item})=>(<View><Text>{item.Email}:{item.Note}</Text></View>)}
                style={{borderWidth:2, borderColor:'red', backgroundColor:'#74d6d3',}} 
                />
                <Text style={{color:'white'}} >Joey</Text>
                <Text style={{color:'white'}} >MAch</Text>
                <Text style={{color:'white'}} >Bobby</Text>
            </View>
        );
    }

}