import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomHeader from '../../components/header/CustomHeader';
import {fonts} from '../../utls/styles';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlePress = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const faqData = [
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur',
      answer:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 2,
      question: 'Lorem ipsum dolor sit amet, consectetur',
      answer:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 3,
      question: 'Lorem ipsum dolor sit amet, consectetur',
      answer:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
    {
      id: 4,
      question: 'Lorem ipsum dolor sit amet, consectetur',
      answer:
        'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
    },
  ];

  return (
    <SafeAreaView style={styles.safeAria}>
      <CustomHeader title={'FAQs'} />
      <ScrollView>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          {faqData.map((item, index) => (
            <View key={item.id}>
              <Pressable style={styles.main} onPress={() => handlePress(index)}>
                <Text style={styles.question}>{item.question}</Text>
                <Image
                  source={
                    expandedIndex === index
                      ? require('../../../assets/icons/minus.png')
                      : require('../../../assets/icons/plus.png')
                  }
                  style={styles.icon}
                />
              </Pressable>
              {expandedIndex === index && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
              <View style={styles.line} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  safeAria: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  question: {
    color: '#686868',
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
  answer: {
    color: '#686868',
    fontSize: 14,
    fontFamily: fonts.Regular,
    marginTop: 10,
  },
  line: {
    borderWidth: 1,
    borderColor: '#E7E7E7',
    marginTop: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#131A29',
  },
});
