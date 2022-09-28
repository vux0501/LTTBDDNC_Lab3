import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import {useRoute } from '@react-navigation/native';
import React, {  useEffect,useState } from 'react';

export default function Screen1({navigation}) {
  const route = useRoute();
  var blue = require('../assets/xanh.png')
  var [link, setLink] = useState(blue)
  
  useEffect(() => {
    if (route.params != null)
      setLink(route.params.message)
  });
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={link} style={{width:300,height:350,marginTop:20}}></Image>
      </View>

      <View style={styles.bot}>
        <View style={styles.bot1}>
          <Text style={{fontSize:18}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.rating}>
            <View style={styles.star}>
              <Image source={require('../assets/Star.png')}></Image>
              <Image source={require('../assets/Star.png')}></Image>
              <Image source={require('../assets/Star.png')}></Image>
              <Image source={require('../assets/Star.png')}></Image>
              <Image source={require('../assets/Star.png')}></Image>
            </View>
            <Text style={{marginLeft:20,marginTop:3}}>(Xem 828 đánh giá)</Text>
          </View>
          <View style={styles.price}>
            <Text style={{fontSize: 20}}>1.790.000 đ</Text>
            <Text style={{marginLeft:30,fontSize:15,marginTop:4}}>1.790.000 đ</Text>
          </View>
          <Text style={{color:'red',fontWeight: '700'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        </View>

        <View style={styles.bot2}>
            <View style={styles.bot2_1}>
              <TouchableOpacity onPress={() => navigation.navigate('Option', { message: link, })}>
              <Text style={{backgroundColor: '#FFFFFF',borderWidth:2, padding: 15,fontWeight: '700', color: 'black',textAlign: 'center',borderRadius: 15}}>4 MÀU - CHỌN MÀU</Text>
              </TouchableOpacity >
            </View>
            <View style={styles.bot2_2}>
              <TouchableOpacity>
              <Text style={{backgroundColor: 'red',borderWidth:2, padding: 15,fontWeight: '700', color: 'white',textAlign: 'center',borderRadius: 15}}>CHỌN MUA</Text>
              </TouchableOpacity >
            </View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top:{
    flex:1,
  },
  bot:{
    flex:1,
 
  },
  star: {
    flexDirection: 'row'
  },
  rating:{
    flexDirection: 'row'
  },
  price:{
    flexDirection: 'row'
  },
  bot1:{
    flex:1,
    justifyContent: 'space-between',
    
  },
  bot2:{
    flex:1,
    justifyContent: 'space-around',
   
  }
});
