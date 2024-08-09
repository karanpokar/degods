import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils/theme'
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarks } from '../../../store/action';
import Icon from 'react-native-vector-icons/Ionicons'
import { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const NFTItem = ({ item }) => {
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const addToBookmark=(data:any)=>dispatch(setBookmarks(data))
    const bookmark:any=useSelector((state:any)=>state?.bookmarks)
    //console.log(JSON.stringify(item))
    const checkIsBookmarked=(item:any)=>{
        let includes= [...bookmark]?.filter((items,index)=>{
            return item?.nft_data?.external_data?.name==items?.nft_data?.external_data?.name
        })
        
        if(includes.length>0){
            //setBookmarked(true)
            return true
        }
        else{
            //setBookmarked(false)
            return false
        }
    }

    const onBookmarkClicked=async(item:any)=>{
        if(checkIsBookmarked(item)){
            let filter=[...bookmark].filter((items,index)=>{
                return item?.nft_data?.external_data?.name!==items?.nft_data?.external_data?.name
            })
            addToBookmark(filter)
        }
        else{
            let finalArr=[...bookmark]
            finalArr.push(item);
            await AsyncStorage.setItem('bookmark',JSON.stringify(finalArr))
            //console.log(finalArr)
            
            addToBookmark(finalArr)
        }
    }
    //console.log('Bookmark',bookmark)

    //  useEffect(() => {
    // //    //console.log('Bookmark has changed:', bookmark);
    //    }, [bookmark]);

  
  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate('NFTPage',{
            data:item
        })
    }} style={styles.item}>
     <Image style={{width:'100%',height:'100%',borderRadius:12}} source={{uri:item.nft_data?.external_data?.image||item.nft_data?.external_data?.asset_url}}/>
    <View style={{width:'100%',height:32,borderBottomLeftRadius:12,borderBottomRightRadius:12,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',bottom:0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',padding:4,paddingHorizontal:12}}>
        <Text style={{fontFamily:typography.Bold,fontSize:12,color:'white',}}>
            {item?.nft_data?.external_data?.name}
        </Text>
        <TouchableOpacity onPress={()=>{
            onBookmarkClicked(item)
        }}>
        <Icon name={checkIsBookmarked(item)?'bookmark':'bookmark-outline'} color={'white'}/>
        </TouchableOpacity>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
         // 20px padding on left and right
      },
      item: {
        width: (width - 40) / 2,
        margin: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        height:(width - 40) / 2,
        borderRadius:12,
        position:'relative',
        borderColor:colors.shadow,
        borderWidth:1
        
      },
});

export default NFTItem