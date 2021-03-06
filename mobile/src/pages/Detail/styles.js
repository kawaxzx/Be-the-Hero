import {StyleSheet} from 'react-native';
import Constant from 'expo-constants';

export default StyleSheet.create({
     container: {
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: Constant.statusBarHeight + 20   
     },
     
     
     header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24 

     },

     Incident:{
          padding:24,
          borderRadius: 8,
          backgroundColor: '#FFF',
          marginBottom: 16,
      },
  
      IncidentProperty:{
          fontSize: 14,
          color: '#41414d',
          fontWeight: 'bold',
          marginTop:24
      }, 
  
      IncidentValue:{
          marginTop:8,
          fontSize: 15,
          color:'#737380',
     },

     contactBox:{
          padding:24,
          borderRadius: 8,
          backgroundColor: '#FFF',
          marginBottom: 16,
     },
      
     heroTitle:{
          fontSize:20,
          fontWeight:'bold',
          color: '#12121a',
          lineHeight:30,
     },

     heroDescription:{
          fontSize:15,
          color: '#727280',
          marginTop:16
     },

     actions:{
          marginTop:16,
          flexDirection:'row',
          justifyContent: 'space-between'          
     },

     action: {
          backgroundColor: '#E02042',
          borderRadius: 8,
          height:50,
          width: '48%',
          justifyContent: 'center',
          alignItems: 'center'
     },

     actionText: {
          color: '#FFF',
          fontSize: 15,
          fontWeight: 'bold'


     }, 
     
});