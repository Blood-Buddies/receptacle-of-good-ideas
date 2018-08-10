import React, { Component } from 'react';
import Quiz from './Quiz'
import {
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    View
} from 'react-native';

const Results = (props) => {

    
    const score = props.navigation.getParam('score', 'NO-SCORE-BABY');
    // console.log('score', score)
// console.log('passed props', props.navigation.getParam)
// itemId: {JSON.stringify(itemId)}
        return (
            
            
                <ImageBackground source={require("./images/back.png")} style={styles.container} >
                <View style={styles.scroll}>
                <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-evenly'
                }}>
               
                        <Image source={require("./images/logo.png")} style={{ width: 390, height: 280, margin: 1, alignSelf: 'center' }} />
                    
                        <Text style={styles.p}>We recommend trying {score} </Text>
                        <Text style={styles.p}>By using {score}, you will be making a smart choice for your wallet and the world! </Text>
                
                    </ScrollView>
                    </View>
                </ImageBackground>
     
        );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    size: {
        alignSelf: "center",
        fontSize: 26,
        fontWeight: 'bold',
        color: "#4c0000"
    },
    p: {
        alignSelf: "center",
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff4c01'
    },
    scroll: {
        width: "90%",
        height: "100%",
        alignContent: 'center',
        backgroundColor: 'rgba(255,255,255,.7)',
        alignSelf: "center"
    },
});

export default Results