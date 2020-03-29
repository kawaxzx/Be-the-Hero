import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

import api from '../../services/api';

export default function Incident (){
    const navigation = useNavigation();
    const[incidents, setIncidents] = useState([]);
    const [total, setTotal]=useState(0);
    const [page, setPage]=useState(1);
    const [loading, setLoading]=useState(false);

    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents(){
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length== total){
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: {page}
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setLoading(false);
        setPage(page+1);
    }

    useEffect(() => {
        loadIncidents();  
    },[]);


    return(
        <View style ={styles.container}>
            <View style ={styles.header}>                 
                <Image source = {logoImg}/>
                <Text style={styles.headerText}>
                      <Text style = {styles.headerTextBold}> {total} </Text>Total Cases.
                </Text>
            </View>

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose one of the incidents to help.</Text>

            <FlatList                
                data={incidents}
                style={styles.IncidentList}
                keyExtractor = {incident  => String(incident.id)}
                showsVerticalScrollIndicator = {false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item:incident}) => (                
                    
                        <View style={styles.Incident}> 
                            <Text style={styles.IncidentProperty}>ONG:</Text> 
                            <Text style={styles.IncidentValue}>{incident.name}</Text>  

                            <Text style={styles.IncidentProperty}>INCIDENT:</Text> 
                            <Text style={styles.IncidentValue}>{incident.title}</Text>  

                            <Text style={styles.IncidentProperty}>VALUE:</Text> 
                            <Text style={styles.IncidentValue}>{Intl.NumberFormat( 'en-US',{
                                style: 'currency',
                                currency: 'USD'
                            }).format(incident.value)}
                            </Text>                    

                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={()=>navigateToDetail(incident)}
                            >
                                <Text style={styles.detailsButtonText}>See more details </Text>
                                <Feather name= 'arrow-right' size= {16} color='#E02041'/>   
                            </TouchableOpacity>                              
                        </View>
                )} 
            />                  
        </View>
    ); 
}
                