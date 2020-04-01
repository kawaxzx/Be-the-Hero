import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import * as MailComposer from 'expo-mail-composer';
import {Linking} from 'react-native';

export default function Detail(){
    const navigation = useNavigation();
    const route =useRoute();   
    const incident = route.params.incident;
    const message = `Hello ${incident.name}, i'm getting in contact to help in the ${incident.title} incident, with the value of ${Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    .format(incident.value)}`;
    
    function navigateBack(){
        navigation.goBack()

    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Hero of the incident: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);

    }
    return(
        <View style = {styles.container}>
            <View style ={styles.header}>                 
                <Image source = {logoImg}/>

                <TouchableOpacity onPress={navigateBack}>                  
                     <Feather name ='arrow-left' size = {28} color= '#E82041'/>                       
                </TouchableOpacity>
            </View>
            <View style={styles.Incident}> 
                            <Text style={[styles.IncidentProperty, {marginTop: 0}]}>ONG:</Text> 
                            <Text style={styles.IncidentValue}>{incident.name} of {incident.city}/{incident.uf}</Text>  

                            <Text style={styles.IncidentProperty}>INCIDENT:</Text> 
                            <Text style={styles.IncidentValue}>{incident.description}</Text>  

                            <Text style={styles.IncidentProperty}>VALUE:</Text> 
                            <Text style={styles.IncidentValue}>{Intl.NumberFormat( 'en-US',{
                                style: 'currency',
                                currency: 'USD'
                            }).format(incident.value)}
                            </Text> 
            </View>
            <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Save the day</Text> 
                    <Text style={styles.heroTitle}>Be the hero of the incident</Text>      

                    <Text style={styles.heroDescription}>Contact:</Text>   

                    <View style={styles.actions}>
                        
                        <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                            <Text style={styles.actionText}>Whatsapp</Text>
                                               
                        </TouchableOpacity>  

                         <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                                               
                        </TouchableOpacity>                                                                        
                    
                    </View>                                    
                </View>
        </View>
    );
}