import React from 'react';
import { Platform, ScrollView, View, Image, Dimensions, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Swiper extends React.Component {
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0
  };

  state = this.initState(this.props);

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0;
    const index = total > 1 ? Math.min(props.index, total - 1) : 0;
    const offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height
    };
    this.internals = {
      isScrolling: false,
      offset
    };

    return state;
  }

  onScrollBegin = () => {
    this.internals.isScrolling = true;
  };

  onScrollEnd = e => {
    this.internals.isScrolling = false;

    this.updateIndex(
      e.nativeEvent.contentOffset ? e.nativeEvent.contentOffset.x : e.nativeEvent.position * this.state.width
    );
  };

  onScrollEndDrag = e => {
    const {
      contentOffset: { x: newOffset }
    } = e.nativeEvent;
    const { children } = this.props;
    const { index } = this.state;
    const { offset } = this.internals;

    if (offset === newOffset && (index === 0 || index === children.length - 1)) {
      this.internals.isScrolling = false;
    }
  };

  updateIndex = offset => {
    const state = this.state;
    const diff = offset - this.internals.offset;
    const step = state.width;
    let index = state.index;

    if (!diff) {
      return;
    }

    index = parseInt(index + Math.round(diff / step), 10);

    this.internals.offset = offset;
    this.setState({
      index
    });
  };

  swipe = () => {
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    const state = this.state;
    const diff = this.state.index + 1;
    const x = diff * state.width;
    const y = 0;

    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });
    this.internals.isScrolling = true;

    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  };

  renderScrollView = pages => (
    <ScrollView
      ref={component => {
        this.scrollView = component;
      }}
      {...this.props}
      contentContainerStyle={[styles.wrapper, this.props.style]}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}
    >
      {pages.map((page, i) => (
        <View style={[styles.containerStyle,styles.fullScreen]} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  );

  renderPagination = () => {
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <Image style={styles.activeDot} source={require('../../../assets/icon/actDot.png')} />;
    const Dot = <View style={styles.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
      dots.push(
        key === this.state.index
          ? // Active dot
            React.cloneElement(ActiveDot, { key })
          : // Other dots
            React.cloneElement(Dot, { key })
      );
    }

    return (
      <View pointerEvents="none" style={{flex: 3,justifyContent:'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>{dots}</View>
      </View>
    );
  };

  renderButton = () => {
    const { onPress } = this.props;
    const lastScreen = this.state.index === this.state.total - 1;
    return (
      <View onPress={onPress} pointerEvents="box-none" style={[styles.buttonWrapper]}>
        {lastScreen ? (
          <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', backgroundColor: '#11E69F', width: 160, height: 60, borderRadius: 40}} onPress={onPress}>
          <Text style={{color: 'white', fontWeight: '300',fontSize:16}}>Get Started</Text>
          </TouchableOpacity>
        ) : (
            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', backgroundColor: '#11E69F', width: 120, height: 60, borderRadius: 40}} onPress={()=>this.swipe()}>
            <Text style={{color: 'white', fontWeight: '300',fontSize:16}}>Next</Text>
            </TouchableOpacity>
        )}
      </View>
    );
  };

  render = ({ children } = this.props) => (
    <View style={[styles.container, styles.fullScreen]}>
        {this.renderScrollView(children)}
        <View style={{ padding: 32,flexDirection: 'row',backgroundColor:'white',justifyContent:'space-between'}}>
            {this.renderPagination()}
            {this.renderButton()}
        </View>
    </View>
  );
}

React.Component.propTypes = {
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  fullScreen: {
    width: Dimensions.get('window').width=360,
    height: "100%"
  },
  containerStyle : {
    flex: 1,
    width: 360,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 32

    },
    container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  slide: {
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: '#E5E5E5',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },

  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    resizeMode: 'contain'
  },

  buttonWrapper: {
    justifyContent: 'center',
    flex: 3,
    alignItems: 'flex-end'
  }
});

