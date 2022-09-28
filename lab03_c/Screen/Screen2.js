import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function Screen2({navigation}) {
  const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
  var blue = require('../assets/xanh.png');
  var silve = require('../assets/bac.png');
  var red = require('../assets/do.png');
  var black = require('../assets/den.png');
  var image = { blue, silve, red, black };
  var [link, setLink] = useState(image.blue);
  var [title_color, setTitle_color] = useState("");
  var [color, setColor] = useState("");
  var [provide, setProvide] = useState("");
  var [provider, setProvider] = useState("");
  var [cost, setCost] = useState("");
  var [i, seti] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={link} style={{width:100,height:120,marginTop:40,marginLeft:30}}></Image>
        <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 30 }}>
                    <Text style={{ marginTop: 15, fontSize: 18 }}>{title}</Text>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{title_color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{color}</Text>
                    </View>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{provide}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{provider}</Text>
                    </View>
                    <Text style={{ marginTop: 9, fontSize: 18, fontWeight: 'bold' }}>{cost}</Text>
                </View>
      </View>

      <View style={styles.bot}>
        <View style={styles.bot1}>
          <Text style={{marginTop:20, marginLeft:30, width:250,fontSize:20}}>Chọn màu bên dưới</Text>
        </View>

        <View style={styles.bot2}>
        <TouchableOpacity onPressIn={onPress1}>
          <Text style={{backgroundColor: '#C5F1FB', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPressIn={onPress2}>
          <Text style={{backgroundColor: '#F30D0D', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPressIn={onPress3}>
          <Text style={{backgroundColor: '#000000', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity onPressIn={onPress4}>
          <Text style={{backgroundColor: '#234896', width:80,height:80}}></Text>
        </TouchableOpacity >
        </View>

        <View style={styles.bot3}>
        <TouchableOpacity onPress={() => navigation.navigate('Home', { message: link, })}>
          <Text style={{backgroundColor: '#1952E2',borderWidth:2,fontSize:20,  padding: 15,fontWeight: '700', color: 'white',textAlign: 'center',borderRadius: 15}}>Xong</Text>
        </TouchableOpacity >
        </View>

      

        

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
  function onPress1() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Bạc"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.silve),
            seti(i = 1)
        );
    }
    function onPress2() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Đỏ"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.red),
            seti(i = 2)
        );
    }
    function onPress3() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Đen"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.black),
            seti(i = 3)
        );
    }
    function onPress4() {
        return (
            setTitle_color(title_color = "Màu: "),
            setColor(color = "Xanh"),
            setProvide(provide = "Cung cấp bởi "),
            setProvider(provider = "Tiki Tradding"),
            setCost(cost = "1.790.000 đ"),
            setLink(image.blue),
            seti(i = 4)
        );
    }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
   
    
  },
  top:{
    backgroundColor: '#FFFFFF',
    flex:1,
    flexDirection: 'row',
    
    
    
  },
  bot:{
    flex:3,
    flexDirection: 'column',
    
  },
  bot1:{
    flex:1
  },
  bot2:{
    flex:5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bot3:{
    flex:2,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft:30,
    paddingRight:30
  }
  
});
