import React from 'react'
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,Button
} from 'react-native';

import GifScroller from './components/GifScroller';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      showGif: false,
    };
  }
  renderGif = () => {
    if(this.state.showGif){
      return (
        <GifScroller
          inputText={this.state.text}
        />)
    }else{return}
  }
  render(){
    return(
      <View style={{flex: 0}}>
        <Text>App</Text>

        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

          {this.renderGif()}
          <TextInput
            onChangeText={(text) => {this.setState( { text })}}
            value={this.state.text}
            style={styles.input}/>
            <Button
              title={'Show Gif Scroller'}
              onPress={() => {
                this.setState({ showGif: !this.state.showGif } )
              }}
            />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-end'
  },
  input:{
    height: 40
  }
});

export default App;
