import * as React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainNav from './navigation';
import AuthProvider from './components/AuthProvider';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };

  }

  async loadFonts() {
    return Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
    })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onFinish={() => this.setState({ isReady: true })}
        >
        </AppLoading>
      )
    }

    return (
      <AuthProvider>
        <MainNav></MainNav>
      </AuthProvider>
    )
  }
}
