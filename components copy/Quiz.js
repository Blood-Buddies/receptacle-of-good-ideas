import React, { Component } from 'react';
import { ScrollView, Image, View, Alert, StyleSheet, Text, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
// import RadioGroup from 'react-native-radio-buttons-group';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './Animbutton'
const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {
    "quiz": {
        "quiz1": {
            "question1": {
              
                "options": {
                    "option1": "Active",
                    "option2": "Sedentary",
                    "option3": "Mix of both"
                },
                "question": "How would you describe your lifestyle?"
            },
            "question2": {
                
                "options": {
                    "option1": "Light",
                    "option2": "Medium",
                    "option3": "Heavy"
                },
                "question": "How would you describe your flow?"
            },
            "question3": {
           
                "options": {
                    "option1": "$5-$30",
                    "option2": "$30-$50",
                    "option3": "$50-$100"
                },
                "question": "What is your budget for reusable products?"
            },
            "question4": {
              
                "options": {
                    "option1": "Not very",
                    "option2": "Somewhat busy",
                    "option3": "Extremely busy",

                },
                "question": "How busy are you on an average day of your period?"
            }
        }
    }
}


export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.qno = 0
        const jdata = jsonData.quiz.quiz1
        arrnew = Object.keys(jdata).map(function (k) { return jdata[k] });
        this.state = {
            question: arrnew[this.qno].question,
            options: arrnew[this.qno].options,
            //   correctoption : arrnew[this.qno].correctoption,
            countCheck: 0,
            score: 1,
            clicked: false,
product:''

        }

    }

    // update state
    // onPress = data => this.setState({ data });
    prev() {
        if (this.qno > 0) {
            this.qno--
            this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options })
        }
    }
    next() {
        if (this.qno < arrnew.length - 1) {
            this.qno++

            this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options,status:true })
        }
        else {
            this._quizFinish(this.score)

        }
    }
    _answer(status, ans) {

        if (status == true) {
            const count = this.state.countCheck + 1
            this.setState({ countCheck: count, choosen: ans })
            console.log(ans)
            if (ans === "option1") {
                const track = this.state.score + 1
                this.setState({ score: track })
                console.log("the score is ", this.state.score)
            }
            else if (ans === "option2") {
                const track = this.state.score + 2
                this.setState({ score: track })
                console.log("the score is ", this.state.score)
            }
            else if (ans === "option3") {
                const track = this.state.score + 3
                this.setState({ score: track })
                console.log("the score is ", this.state.score)
            }
        }

    }

    _quizFinish(score) {
        console.log("you are done", this.state.score)
        const tally = this.state.score
        this.setState({ quizFinish: true, score: tally })
        this._scoreMessage(tally)
        // const {navigate} = this.props.navigation
        Alert.alert(
            'Quiz Completed',
            'Click OK to see results!',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.onButtonPress() },
            ],
            { cancelable: false }
          )
    }
    onButtonPress () {
const score = this.state.product
        console.log("it happened")
        this.props.navigation.replace(
          'Results',{score:score});
       
     }
    _scoreMessage(score) {
        console.log("the fun begins here", score)
        
        if (score < 5) {
            console.log("underwear")
           this.setState({
               product: 'UNDERWEAR'
           })
        } else if (score >= 5 && score < 9) {
            console.log("pads")
            this.setState({
                product: 'PADS'
            }) 
            
        } else if (score >= 9) {
            console.log("cups")
            this.setState({
                product: 'CUPS'
            })
        }
        console.log('u get',this.state.product)
    }
    render() {
        // this.state.questions[this.state.currentQuestion]
        // let pic = {
        //     uri: '/Users/mgikanga/projects/react-native/FirstApp/components/images/Blood Buddy 1.6.png'
        // };
        // let back = {
        //     uri: '/Users/mgikanga/projects/react-native/FirstApp/components/images/Blood Paper.png'
        // }
        let _this = this
        const currentOptions = this.state.options
        const options = Object.keys
            (currentOptions).map(function (k) {
                return (<View key={k} style={{ margin: 10 }}>
                    <Animbutton countCheck={_this.state.countCheck} onColor={"red"} effect={"tada"} _onPress={(status) => _this._answer(status, k)} text={currentOptions[k]}/>
                </View>

                );
            });
        return (
            <ImageBackground source={require("./images/back.png")}  style={styles.container} >
                <ScrollView style={styles.ScrollView}>
                    <View style={styles.container}>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between", alignItems: 'center', }}>

                            <View style={styles.oval} >
                                <Image source={require("./images/BBuddy.png")} style={{ alignSelf: 'flex-start' }}  style={{ width: 400, height: 320, alignSelf: 'center', marginTop: 0 }} />
                                <Text style={styles.welcome}>
                                    {this.state.question}

                                </Text>
                            </View>
                            <View >
                                {options}
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                {/*   <Button
            onPress={() => this.prev()}
            title="Prev"
            color="#841584"
          />
          <View style={{margin:15}} />*/}

                                <TouchableOpacity onPress={() => this.next()} >
                                    <View style={{ paddingTop: 5, paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius: 10, backgroundColor: "#4c0000" }}>
                                        <Icon name="md-arrow-round-forward" size={30} color="white" />
                                    </View>
                                </TouchableOpacity >

                            </View>
                            
                        </View>
                    </View>
                </ScrollView>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    oval: {
        width: width * 90 / 100,
        borderRadius: 20,

    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        margin: 15,
        color: "#4c0000"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    ScrollView: {
        width: "85%",
        height: "90%",
        backgroundColor: 'rgba(255,255,255,.7)',
        flexWrap: 'wrap',

    },
});
