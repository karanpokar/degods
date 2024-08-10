import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils/theme'
import { useDispatch, useSelector } from 'react-redux';
import { setBookmarks } from '../../../store/action';
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CollectionInfo, NftItem } from '../../../types/CollectionTypes';
import { checkIsBookmarked, onBookmarkClicked } from '../../../utils/collection';
import { lightFeedback } from '../../../utils/haptic';

const { width } = Dimensions.get('window');

const NFTItem = ({ item }:any) => {
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const addToBookmark=(data:NftItem)=>dispatch(setBookmarks(data))
    const bookmark:NftItem[]=useSelector((state:any)=>state?.bookmarks)
    const [loading,setLoading]=useState(true);
    const collectionData:CollectionInfo=useSelector((state:any)=>state?.collectionData)
  
  return (
    <View  style={styles.item}>
    <TouchableOpacity style={styles.image} onPress={()=>{
        /*@ts-ignore*/
        navigation.navigate('NFTPage',{
            data:item
        })
        lightFeedback()
    }}>
     <Image onLoadEnd={()=>{
        setLoading(false)
     }} style={styles.image} source={{uri: loading? collectionData?.image_url :item.nft_data?.external_data?.image||item.nft_data?.external_data?.asset_url}}/>
     </TouchableOpacity>
    <View style={styles.tokenContainer}>
        <Text style={styles.name}>
            {item?.nft_data?.external_data?.name}
        </Text>
        <TouchableOpacity onPress={()=>{
            onBookmarkClicked(item,bookmark,addToBookmark)
        }}>
        <Icon name={checkIsBookmarked(item,bookmark)?'bookmark':'bookmark-outline'} color={'white'}/>
        </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
        paddingBottom:200
         // 20px padding on left and right
      },
      name:{fontFamily:typography.Bold,fontSize:12,color:'white'},
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
      image:{width:'100%',height:'100%',borderRadius:12},
      tokenContainer:{width:'100%',height:32,borderBottomLeftRadius:12,borderBottomRightRadius:12,backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',bottom:0,alignItems:'center',justifyContent:'space-between',flexDirection:'row',padding:4,paddingHorizontal:12}
});

export default NFTItem