import React from 'react';
import { View, Text, LayoutAnimation, TouchableOpacity } from 'react-native';
import { isObject } from 'lodash';
import { connect } from 'react-redux';

import { actions as toastActions } from '../../redux/ToastRedux';
import { Constants } from '../../common';
import { EventEmitter, Timer } from '../../Omni';
import styles from './styles';

class MyToast extends React.Component {
  constructor(props) {
    super(props);
    this.nextToastId = 0;
  }

  componentDidMount() {
    this.toastListener = EventEmitter.addListener(
      Constants.EmitCode.Toast,
      this.doToast.bind(this)
    );
  }

  componentWillUnmount() {
    this.toastListener.remove();
  }

  shouldComponentUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return true;
  }

  renderToast = (msg, index) => {
    if ((msg && !msg.msg) || (msg && isObject(msg.msg))) return null;

    const { removeToast } = this.props;
    const onPress = () => removeToast(msg.key);
    return (
      <TouchableOpacity key={index} style={styles.textWrap} onPress={onPress}>
        <Text style={styles.text}>{msg.msg}</Text>
      </TouchableOpacity>
    );
  }

  doToast(msg, duration = 3000) {
    const { addToast, removeToast } = this.props;
    const key = this.nextToastId++; // unique message key
    addToast(msg, key);
    Timer.setTimeout(() => removeToast(key), duration);
  }

  render() {
    const { toast } = this.props;
    return <View style={styles.container}>{toast.list.map(this.renderToast)}</View>;
  }
}

const mapStateToProps = state => {
  return {
    toast: state.toast,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToast: (msg, key) => dispatch(toastActions.addToast(msg, key)),
    removeToast: msg => dispatch(toastActions.removeToast(msg)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyToast);
