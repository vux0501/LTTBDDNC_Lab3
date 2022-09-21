import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require('./assets/vs_red_a.png')} style={{width:100,height:120,marginTop:40,marginLeft:30}}></Image>
        <Text style={{marginTop:50, marginLeft:20, width:250,fontSize:20}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>

      <View style={styles.bot}>
        <View style={styles.bot1}>
          <Text style={{marginTop:20, marginLeft:30, width:250,fontSize:20}}>Chọn màu bên dưới</Text>
        </View>

        <View style={styles.bot2}>
        <TouchableOpacity>
          <Text style={{backgroundColor: '#C5F1FB', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity>
          <Text style={{backgroundColor: '#F30D0D', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity>
          <Text style={{backgroundColor: '#000000', width:80,height:80}}></Text>
        </TouchableOpacity >
        <TouchableOpacity>
          <Text style={{backgroundColor: '#234896', width:80,height:80}}></Text>
        </TouchableOpacity >
        </View>

        <View style={styles.bot3}>
        <TouchableOpacity>
          <Text style={{backgroundColor: '#1952E2',borderWidth:2,fontSize:20,  padding: 15,fontWeight: '700', color: 'white',textAlign: 'center',borderRadius: 15}}>Xong</Text>
        </TouchableOpacity >
        </View>

      

        

      </View>
      <StatusBar style="auto" />
    </View>
  );
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
