import React, { Component } from 'react';

import {
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';

class Row extends Component {
    render() {
        return (

            <View>
                <Image source={this.props.image} style={{ width: 400, height: 150, margin: 1, alignSelf: 'center' }} />
                <Text style={styles.size}> {this.props.text} </Text>
            </View>
        );
    }
}

export default class Nav extends Component {
   
    render() {
       
        return (
          
                <ImageBackground source={require("./images/back.png")} style={styles.container} >
                 
                <View style={styles.scroll}>
                <ScrollView style={{marginLeft:-40,
                flexWrap: 'wrap',
                flexDirection:'row'}}>
                    <View>
                        <Image source={require("./images/logo.png")} style={{ width: 460, height: 315, margin: 1, alignSelf: 'center' }} />
                        <Text style={styles.size}>A Comfy Space To Learn About Periods.</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
                        <Row image={require("./images/Quiz.png")}
                            text="Find The Right Reusable Product For Your Lifestyle!"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Link')}>
                    <Row image={require("./images/more.png")}
                        text="Learn More About Reusable products!"
                    />
                    </TouchableOpacity>

</ScrollView>
</View>
                </ImageBackground>
         
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between'
    },

    size: {
        alignSelf: "center",
        fontSize: 14,
        fontWeight: 'bold',
        color: "#4c0000"
    },
    scroll: {
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(255,255,255,.2)',
alignSelf:"center"
    },
});

