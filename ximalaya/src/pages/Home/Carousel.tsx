import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import SnapCarousel, { ParallaxImage, AdditionalParallaxProps, Pagination } from 'react-native-snap-carousel';
import { wp, hp, viewportWidth } from '../../utils/index'
const sliderWidth = viewportWidth
const sideWidth = wp(90)
const sideHeight = hp(26)
const itemWidth = sideWidth + wp(2) * 2

import { getCarouselList } from '../../api/home'

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [
        'https://aecpm.alicdn.com/imgextra/i4/3193139402/O1CN01ISNepm2JKARwSTotj_!!3193139402-0-alimamazszw.jpg',
        'https://img.alicdn.com/tfs/TB1wOidVWL7gK0jSZFBXXXZZpXa-520-280.jpg',
        'https://img.alicdn.com/imgextra/i3/6000000001010/O1CN01e9keZJ1JKcgLRRlx7_!!6000000001010-2-octopus.png',
      ],
      activeSlide: 0
    }
  }

  componentDidMount() {
    getCarouselList().then(res => {
      console.log('res', res);
    })
  }

  _renderItem = (
    { item }: { item: string },
    parallaxProps?: AdditionalParallaxProps
  ) => {
    return <ParallaxImage
      source={{ uri: item }}
      style={styles.images}
      containerStyle={styles.imageContainer}
      parallaxFactor={0.2}
      showSpinner
      spinnerColor="rgba(0,0,0,.25)"
      {...parallaxProps}
    />
  }

  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index
    })
  }

  get pagination() {
    const { activeSlide, bannerList } = this.state
    return (
      <View style={styles.paginationWarp}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={bannerList.length}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          activeDotIndex={activeSlide}

        />
      </View>
    )
  }


  render() {
    const { bannerList } = this.state
    return (
      <View>
        <SnapCarousel
          data={bannerList}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          loop
          autoplay
          onSnapToItem={this.onSnapToItem}
        />
        {this.pagination}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    width: itemWidth,
    height: sideHeight,
    borderRadius: 8
  },
  images: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  },
  paginationWarp: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0,0,0,.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,.92)',
  }
})