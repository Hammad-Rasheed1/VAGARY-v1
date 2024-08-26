import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {fonts, fontSizes} from '../../utls/styles';
  import LinearGradient from 'react-native-linear-gradient';
  import {useNavigation} from '@react-navigation/native';
  import {ProductData} from '../../constants/ProductData';
  
  const KrogerCard = () => {
    const navigation = useNavigation();
    const Data = [
        {
          id: 1,
          name: 'Pantene',
          category: 'Pro-V',
          card: 'Kroger',
          price: '$4.27',
          saved: 'Pantene Pro - V Daily Moisture, 27.7 oz',
          img: 'https://s3-alpha-sig.figma.com/img/e8a5/49b8/e38f5049f18b2efc5c182641b62b0dde?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eL2woKpVOMmUc4LIiKhgz-aFw-f9qkWrT6B50UtBpyQ8f1JeTZhvvrhO9egM-yn8s2AMJEBMzKqg0j9C5RxBJT3EELLbYJubKHpS2wbghGOwkPnG9OcPMquFtZo7tVNszV~x10Qv8JiHl764JuXGgPy0Pq2VJo2sZLzDpb0VkTmjn8faWQJGhmOlM-JiQCGbFkZ~0l0~pj4tyGW06kv4m8jYoJbwfNv05JmMATDmVQM12udcTpE5Vs8shtBUlkAPO3bGLE-tYJvgd4QLfn04cLWc73cXmpCyroYj6n-hj1bfOoS8cA3IBmjusdtZVjWpLRxeYX3UgED-8v0LWFv32w__',
          rating: 4,
        },
       
        {
          id: 2,
          name: 'LED',
          category: '32Inch',
          card: 'Kroger',
          price: '$4.27',
          saved: 'Pantene Pro - V Daily Moisture, 27.7 oz',
          img:'https://s3-alpha-sig.figma.com/img/a2aa/b7d8/fb7dd64071df2b8e00158dde0f83e6b7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IOh7Qh35-l3Ho3OnjvPFO-tyYCHEjSOBCwWTfadr0-nF4WFskxEVcGV4IVnq~bBPfHIMz8TJ6KfSmJ9uIrf4GgtYVcfHAOb7WeACOzOGM-DqxkO46cNYozq66QlYKAcUXgA9hbu2c6VSxy1IOvxsZ35qfw6LisxaorSg3lBgT1Us7OEfh4~cFS0I0mLsE0MjdmSiXGqaQ8jh4JuP2vmcVdFOGaqjwTpOVPUKAf90RtAFE9Nu7-TjB3ruLa3slKmlcEzAjtD4~ZRRT4pmR-vH2gDutsw3Cw1QwEujJ9e0hKREN2OsjfIEX1FIJgC-xRuPAP2CtphukjT8qBXf7tj6oA__',
          rating: 3,
        },
      ];
      
  
    const renderItem = ({item}) => {
      const stars = Array(5)
        .fill(false)
        .map((_, index) => index < item.rating);
  
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('AllProduct')}
          style={styles.parent}>
          <View style={styles.walmart}>
            <Text style={styles.txt}>{item.card}</Text>
          </View>
          <View style={styles.main}>
            <Image source={{uri: item.img}} style={styles.img} />
            <View style={{gap: 4}}>
              <Text style={styles.pantene}>
                {item.name} <Text style={styles.pro}>{item.category}</Text>
              </Text>
              <Text style={styles.price}>
                Price: <Text style={{color: '#B1B500'}}>{item.price}</Text>
              </Text>
              <Text style={styles.save}>{item.saved}</Text>
              <View style={styles.ratingContainer}>
                {stars.map((star, index) => (
                  <Image
                    key={index}
                    source={require('../../../assets/icons/star.png')}
                    style={[
                      styles.star,
                      {tintColor: star ? '#FFD700' : '#CCCCCC'},
                    ]}
                  />
                ))}
              </View>
            </View>
          </View>
          <LinearGradient
            colors={['#126702', '#B1B500']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <Image
              source={require('../../../assets/icons/cart-shopping.png')}
              style={styles.column}
            />
          </LinearGradient>
          <View style={styles.copyLink}>
            <Text style={styles.txt}>Copy Link</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };
  
  export default KrogerCard;
  
  const styles = StyleSheet.create({
    parent: {
      paddingHorizontal: 13,
      paddingVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#F6F6F6',
      borderRadius: 10,
      marginVertical: 15,
    },
    img: {
      width: 70,
      height: 70,
      borderRadius: 50,
    },
    pantene: {
      color: '#000000',
      fontFamily: fonts.Medium,
      fontSize: fontSizes.medium,
    },
    pro: {
      fontSize: fontSizes.xSmall,
      fontFamily: fonts.Regular,
    },
    save: {
      color: '#454545',
      fontSize: fontSizes.mSmall,
      fontFamily: fonts.Medium,
    },
    price: {
      color: '#000000',
      fontFamily: fonts.Medium,
      fontSize: fontSizes.small,
    },
    gradient: {
      width: 34,
      height: 34,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    column: {
      width: 24,
      height: 24,
    },
    main: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 10,
    },
    walmart: {
      width: 52,
      height: 15,
      backgroundColor: '#126702',
      position: 'absolute',
      top: 0,
      right: 0,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    txt: {
      color: '#FFFFFF',
      fontSize: 9,
      fontFamily: fonts.Medium,
    },
    copyLink: {
      width: 52,
      height: 15,
      backgroundColor: '#B1B500',
      position: 'absolute',
      right: 0,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4,
    },
    star: {
      width: 15,
      height: 15,
      marginRight: 2,
    },
  });
  