// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react'; 
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'; 
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Welcome to React Native Mu'izzuddin!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class App extends Component {  
 
  constructor(){ 
    super();  
      this.state = { 
      wordInput: "",
      wordSplit: [],
      countVowel: 0,
      countConsonant: 0,
      countChar: 0 
      // name: ' Mohammad Muizzuddin bin Mohammad Ali',
      // address: 'Setiawangsa, Kuala Lumpur'
    }  
  } 

  analyzeWord = () => {
    this.setState({countChar: this.state.wordInput.length});
    this.setState({wordSplit: this.state.wordInput.toUpperCase().split('')},
    () => {
      let vow = 0;
      let con = 0;
      for (let i=0; i < this.state.countChar; i++) {
        let ch = this.state.wordSplit[i];
        if (ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
          vow += 1;
        } else if (ch == ' '){
            continue;
        } else 
          con += 1;
      }
      this.setState({countVowel: vow});
      this.setState({countConsonant: con});
    });
  }
  // updateCount(){ 
  //   this.setState(prevState => {
  //     return {count: prevState.count + 1}}); //prevstate is cool :)
  // }

  // resetCount(){ 
  //   this.setState({count: 0});
  // } 
 
  render() { 
    return ( 
      <View style={styles.container}> 
      <Text style={styles.header}>Word Analyzer</Text>
          <TextInput style={styles.contents} onChangeText={(wordInput) =>
            this.setState({wordInput})} placeholder='Insert word here'/>
      
        <Button onPress={() => this.analyzeWord()} title="Analyze"/>
        <Text style={styles.contents}>Word: {this.state.wordSplit}</Text>
        <Text style={styles.contents}>No of Consonants: {this.state.countConsonant}</Text>
        <Text style={styles.contents}>No of Vowels: {this.state.countVowel}</Text>
        <Text style={styles.contents}>No of Characters: {this.state.countChar}</Text>
      </View> 
    );  
  } 
} 
   
const styles = StyleSheet.create({  
  container: { 
    flex: 1, 
    justifyContent: 'center', //i like center
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',
  },  
     
  header: { 
    marginTop: 60, 
    fontSize: 30,  
    textAlign: 'center',  
    margin: 20, 
  }, 
     
  contents: { 
    fontSize: 20, 
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5, 
  },

  bignumber: {
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5, 
    fontSize: 50,
  }
})