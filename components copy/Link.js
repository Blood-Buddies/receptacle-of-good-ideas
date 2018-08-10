import React, { Component } from 'react';

import {
    Image,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Linking,
    View
} from 'react-native';

export default class Nav extends Component {

    render() {

        return (
           
                <ImageBackground source={require("./images/back.png")} style={styles.container} >
                    <View style={styles.scroll}>
                    <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-between'
                }}>>
                        <Image source={require("./images/tell.png")} style={{ width: 420, height: 260, margin: 1, alignSelf: 'center' }} />
                        <Text style={styles.size}>About Us</Text>
                        <Text style={styles.p}>
We wanted to create a fun and inclusive space for people to learn about reusable menstrual products. If you want more info and real user experiences with these products, feel free to peruse the links below!</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://www.allure.com/gallery/best-period-panties')} >Best Reusable Panties.</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://thewirecutter.com/reviews/best-menstrual-cup/')} >Best Menstrual Cups</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://www.xojane.com/healthy/i-tried-reusable-cloth-menstrual-pads-to-fight-the-patriarchy')} >Personal experiences on pads.</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://ecofemme.org/menstruation-much-bleed/')} >How Much Do We Bleed?!.</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://www.theatlantic.com/health/archive/2017/05/period-apps-pink/525207/')} >Period Apps Pink Much?!.</Text>
                        <Text style={styles.link} onPress={() => Linking.openURL('https://www.intimina.com/en/menstrual-waste-calculator')} >Menstrual Waste Calculator</Text>
                        
                        </ScrollView>
                    </View>

                </ImageBackground>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-evenly'
    },

    size: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000034"
    },
    p: {
        alignSelf: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff4c01',
        margin:5,
    },
    link: {
        fontSize: 18,
        margin:5,
        color: '#006994',
        textDecorationLine: 'underline'
    },
    scroll: {
        width: "90%",
        height: "100%",
        alignContent: 'center',
        backgroundColor: 'rgba(255,255,255,.7)',
        alignSelf: "center"
    },
});


