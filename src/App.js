import React, { Component } from 'react'
import Questions from './components/Questions'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export default class App extends Component {
  render () {
    return (
      <I18nextProvider i18n={i18n}>
        <Questions />
       </I18nextProvider>
    )
  }
}
