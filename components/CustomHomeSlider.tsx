import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type SliderItemsType = {
  name: string;
  instructor: string;
  rating: number;
  newPrice: string;
  oldPrice: string;
  isActive: boolean;
  imageUrl: string;
  id: number;
};

const SliderItems: SliderItemsType[] = [
  {
    id: 1,
    name: ' Adobe illustrator training course',
    imageUrl: require('../assets/sample3.png'),
    instructor: 'Ms. Niket Nayak',
    rating: 4.0,
    oldPrice: '₹2,599',
    newPrice: '₹4,599',
    isActive: true,
  },
  {
    id: 2,
    name: 'Web developement training course',
    imageUrl: require('../assets/sample3.png'),
    instructor: 'Ms. XYZ ZTY',
    rating: 4.6,
    oldPrice: '₹3,599',
    newPrice: '₹2,599',
    isActive: false,
  },
  {
    id: 3,
    name: 'Pharmacy',
    imageUrl: require('../assets/sample3.png'),
    instructor: 'Ms. okewek kwpkeek',
    rating: 3.5,
    oldPrice: '₹5,599',
    newPrice: '₹4,599',
    isActive: false,
  },
  {
    id: 4,
    name: 'Learn Sales and Marketing',
    imageUrl: require('../assets/sample3.png'),
    instructor: 'Ms. Nachiketa Nair',
    rating: 4.2,
    oldPrice: '₹2,599',
    newPrice: '₹4,599',
    isActive: false,
  },
  {
    id: 5,
    name: ' Adobe illustrator training course advance',
    imageUrl: require('../assets/sample3.png'),
    instructor: 'Ms. Niket Nayak',
    rating: 4.0,
    oldPrice: '₹3,599',
    newPrice: '₹2,599',
    isActive: false,
  },
];

type CustomHomeSliderState = {
  slideItems: SliderItemsType[];
};
export class CustomHomeSlider extends Component<{}, CustomHomeSliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      slideItems: SliderItems,
    };
  }
  onViewableItemsChanged = ({viewableItems, changed}) => {
    // console.log('Visible items are', viewableItems);
    // console.log('Changed in this iteration', changed);
    let currId = viewableItems[0].item.id;
    const updatedArr = this.state.slideItems.map(item => {
      if (item.id === currId) {
        const newItem = {...item};
        newItem.isActive = true;
        return newItem;
      } else {
        const newItem = {...item};
        newItem.isActive = false;
        return newItem;
      }
    });

    this.setState({slideItems: updatedArr});
  };

  render() {
    return (
      <View>
        <FlatList
          onViewableItemsChanged={this.onViewableItemsChanged}
          horizontal
          data={this.state.slideItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.slider__container}>
              <Image
                resizeMode={'stretch'}
                style={styles.slider__img}
                source={require('../assets/sample3.png')}
              />
              <View style={styles.slider__top}>
                <Text style={styles.sliderText1}>{item.name}</Text>
                <Text style={styles.sliderText2}>{item.instructor}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <Image source={require('../assets/star.png')} />
                  <Text style={styles.slider_rating_text}>{item.rating}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <Text style={styles.price__text}>₹{item.newPrice}</Text>
                  <Text style={styles.price__text2}>₹{item.oldPrice}</Text>
                </View>
                <TouchableOpacity style={styles.slider_btn}>
                  <Text style={styles.slider__btn_text}>Buy Now</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.slider__bottom}>
                <View
                  style={[
                    styles.bottom__circle,
                    this.state.slideItems[0].isActive && styles.active,
                  ]}></View>
                <View
                  style={[
                    styles.bottom__circle,
                    this.state.slideItems[1].isActive && styles.active,
                  ]}></View>
                <View
                  style={[
                    styles.bottom__circle,
                    this.state.slideItems[2].isActive && styles.active,
                  ]}></View>
                <View
                  style={[
                    styles.bottom__circle,
                    this.state.slideItems[3].isActive && styles.active,
                  ]}></View>
                <View
                  style={[
                    styles.bottom__circle,
                    this.state.slideItems[4].isActive && styles.active,
                  ]}></View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default CustomHomeSlider;

const styles = StyleSheet.create({
  slider__container: {
    // width: '100%',
    height: 200,
    backgroundColor: '#000000',
  },
  slider__img: {
    // width: '100%',
    width: 360,
    height: '100%',
    opacity: 0.5,
  },
  slider__top: {
    position: 'absolute',
    top: 28,
    left: 16,
  },
  sliderText1: {
    fontWeight: '500',
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 16,
  },
  sliderText2: {
    fontSize: 12,
    lineHeight: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  slider_rating_text: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: '500',
    color: '#ffffff',
    marginLeft: 10,
  },
  price__text: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#ffffff',
  },
  price__text2: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    color: '#ffffff',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  slider_btn: {
    width: 84,
    height: 28,
    backgroundColor: '#FE5007',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  slider__btn_text: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 16,
  },
  slider__bottom: {
    position: 'absolute',
    bottom: 15,
    left: '30%',
    flexDirection: 'row',
  },
  bottom__circle: {
    width: 6,
    height: 6,
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    borderRadius: 50,
  },
  active: {
    backgroundColor: '#FE5007',
  },
});
