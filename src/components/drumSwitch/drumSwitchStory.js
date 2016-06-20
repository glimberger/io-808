import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DrumSwitch from './drumSwitch';

import { grey } from '../../theme/variables';

class SwitchWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchPosition: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      switchPosition: value
    });
  }

  render() {

    return (
      <DrumSwitch
        onChange={this.handleChange}
        position={this.state.switchPosition} />
    );
  }
}

storiesOf('DrumSwitch', module)
  .add('default', () => (
    <SwitchWrapper />
  ));