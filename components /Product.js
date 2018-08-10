import React, { Component } from 'react';
import Animbutton  from './Animbutton';
import quiz from '/Users/mgikanga/projects/react-native/FirstApp/components/quiz.json'
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  listItems,
  Text
} from 'react-native';
import { stat } from 'fs';


export default class Product extends Component {
  constructor(props) {
      super(props);
    console.log(quiz) 
    const mylist = quiz.map((d) => <li key={d.Qn} choices={d.options}>{d.Qn}</li>); 
  //   const choices = quiz.map((d) => <li key={d.options}>{d.options}</li>);
    console.log("watch for keys",mylist[0].key)
    console.log("watch for options",mylist[0].props.choices)
  //   console.log(this.state.qno)
  //   console.log("watch for keys",choices)
  
    this.state = {
      list:quiz,
        clicked:[],
        points:0,
        qno:0,
        question:mylist[0].key,
        options:mylist[0].props.choices,
        
    };
  }

  next () {
    let nextNumber = this.state.qno;
    nextNumber++;
    this.setState({
      qno: nextNumber,
      question: mylist[nextNumber].key,
      options: mylist[nextNumber].props.choices,
    });
  }

  render() {
      console.log('props',this.state.question)
    return (
        <View>
    <Text>this is veiw</Text>
      
      </View>
    );
  }
}
