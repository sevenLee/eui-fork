import React, { Component, Fragment } from 'react';

import {
  EuiListGroup,
  EuiListGroupItem,
  EuiSpacer,
  EuiSwitch,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
} from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flushWidth: false,
      showBorder: false,
    };
  }

  toggleFlushWidth = () => {
    this.setState(prevState => ({ flushWidth: !prevState.flushWidth }));
  };

  toggleBorder = () => {
    this.setState(prevState => ({ showBorder: !prevState.showBorder }));
  };

  render() {
    const { flushWidth, showBorder } = this.state;
    const handleOnClick = () => {
      alert('Item was clicked');
    };

    return (
      <Fragment>
        <EuiFlexGroup alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiSwitch
              label={
                <span>
                  Show as <EuiCode>flush</EuiCode>
                </span>
              }
              checked={this.state.flushWidth}
              onChange={this.toggleFlushWidth}
            />
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiSwitch
              label={
                <span>
                  Show as <EuiCode>bordered</EuiCode>
                </span>
              }
              checked={this.state.showBorder}
              onChange={this.toggleBorder}
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="l" />

        <EuiListGroup flush={flushWidth} bordered={showBorder}>
          <EuiListGroupItem onClick={handleOnClick} label="First item" />

          <EuiListGroupItem onClick={handleOnClick} label="Second item" />

          <EuiListGroupItem
            onClick={handleOnClick}
            label="Third item"
            isActive
          />

          <EuiListGroupItem
            onClick={handleOnClick}
            label="Fourth item"
            isDisabled
          />
        </EuiListGroup>
      </Fragment>
    );
  }
}
