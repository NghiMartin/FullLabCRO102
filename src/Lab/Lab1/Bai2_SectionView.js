import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Button } from 'react-native';

const eventInfo = [
  {
    title: 'Lịch trình',
    events: [
      { title: 'Giờ điểm', content: 'Hồ Tràm, Vũng Tàu' },
      { title: 'Thời gian', content: '09:00 AM - 12:00 AM, 12/12/2024' },
      { title: 'Phương tiện di chuyển', content: 'Xe bus' },
      { title: 'Thời gian di chuyển', content: '21:00 - 22:00' },
    ],
  },
  {
    title: 'Khách sạn',
    events: [
      { title: 'Tên khách sạn', content: 'Hồng Quỳnh' },
      { title: 'Giờ nhận phòng', content: '06:00 AM - 12:00 AM' },
      { title: 'Địa điểm', content: '234 Quang Trung, Hồ Chí Minh' },
    ],
  },
];


const renderChild = ({ title, content }, index) => {
  return (
    <View key={index.toString()} style={styles.childContainer}>
      <Text style={styles.childTitle}>{title}</Text>
      <Text style={styles.childContent}>{content}</Text>
    </View>
  );
};


const renderSection = ({ title, events }, index) => {
  return (
    <View key={index.toString()} style={styles.section}>
    {title === 'Lịch trình' ? (
         <View>
             <Text style={styles.sectionTitle}>{title}</Text>
          <View style={styles.sectionBody}>
            {events.map((event, index) => renderChild(event, index))}
          </View>
          <Image 
          style ={{height: 200, width: '100%'}}
          source={{uri: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
          />
          </View>
    ) : (
        <View>
             <Text style={styles.sectionTitle}>{title}</Text>
          <View style={styles.sectionBody}>
            {events.map((event, index) => renderChild(event, index))}
          </View>
          <Button title='Chi tiết' />
          </View>
    )}
    </View>
  );
};

export default function Bai2_SectionView (){
  return (
    <ScrollView style={styles.container}>
      {eventInfo.map((section, index) => renderSection(section, index))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  section: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
     shadowColor: '#000',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionBody: {
    marginLeft: 10,
  },
  childContainer: {
    marginBottom: 5,
  },
  childTitle: {
    fontWeight: 'bold',
  },
  childContent: {
    marginLeft: 10,
  },
});
