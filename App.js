import { StatusBar } from "expo-status-bar";
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function App() {
  const oldPrice = 150000
  const price = 141800
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(price)

  useEffect(() => {
    setTotal(quantity*price)
  }, [quantity])

 
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container1_1}>
          <View style={styles.container1_1_1}>
            <Image source={require("./assets/book.png")} />
            </View>
            <View style={styles.container1_1_2}>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            Cung cấp bởi tiki
          </Text>
          <Text style={{ color: "red", fontSize: 15 }}>{oldPrice}</Text>
          <Text style={{ color: "brown", fontSize: 13 }}>{price}</Text>
          <View style={styles.container1_1_1}>
            <Button title="-" onPress={() => {quantity > 1 && setQuantity(quantity-1)}} />
            <TextInput
              style={{
                color: "red",
                fontSize: 19,
                borderWidth: 2,
                textAlign: "center",
              }}
              
              
            >{quantity}</TextInput>
            <Button title="+" onPress={() => {setQuantity(quantity+1)}} />
            <Text
              style={{
                color: "blue",
                fontWeight: "600",
                fontSize: 13,
                marginLeft: 100,
                marginTop: 20,
              }}
            >
              Mua sau
            </Text>
          </View>
        </View>
    
        </View>

        <View style={styles.container1_2}>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>
            Mã giảm giá đã lưu
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "700",marginLeft: 30,color:'blue' }}>
            Xem tại đây
          </Text>
        </View>

        <View style={styles.container1_3}>
          <TextInput
            style={{
              color: "red",
              fontSize: 19,
              width:200,
              borderWidth: 2,
              textAlign: "center",
            }}
            placeholder="Mã giảm giá"
            
          ></TextInput>
          <Button title="Áp dụng"/>
        
        </View>

      </View>

      <View style={styles.container234}>

      <View style={styles.container23}>
      <View style={styles.container2}>
      <Text style={{fontWeight:'700'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
      <Text style={{fontWeight:'600',color:'blue',marginLeft:10}}>Nhập tại đây</Text>
      </View>
      <View style={styles.container3}>
      <Text style={{fontWeight:'700',fontSize:20}}>Tạm tính</Text>
      <Text style={{fontWeight:'700',color:'red', marginLeft: 200,fontSize:20}}>{total}</Text>
      </View>
      </View>

      <View style={styles.container4}>
      <View style={styles.container4_1}>
      <Text style={{fontWeight:'700',fontSize:20}}>Thành tiền </Text>
      <Text style={{fontWeight:'700',color:'red', marginLeft: 10,fontSize:20}}>{total}</Text>
      </View>
      <View style={styles.container4_2}>
        <Button title="TIẾN HÀNH ĐẶT HÀNG"></Button>
      </View>
      </View>
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 2,
    paddingTop:20,
    backgroundColor: "#FFFFFF",
  },
  container1_1: {
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container1_1_1: {
    flexDirection: "row",
  },
  container1_1_2:{
    marginLeft:10
  },
  container1_3:{
    flexDirection: "row",
    justifyContent: "space-between",
    width:300,
    marginLeft: 10,
    marginTop: 10,

  },
  container1_2:{
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
  },
  container23:{
    justifyContent: "space-between",
    height:200,
    flex: 3,

  },
  container2:{
  
   
    flex:1,
    flexDirection: "row",
  
    
   
    
  },
  container3:{
   
    flex:3,
    flexDirection: "row",
    marginTop:50
    
  },
  container234:{
    flex:3,
    
  },
  container23:{
    justifyContent: "space-between",
    flex:1,
  },
  container4:{
    
    marginTop:200,
    flex:1,
  },
  container4_1:{
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container4_2:{
    
    justifyContent: "space-between",
  }
 
});
