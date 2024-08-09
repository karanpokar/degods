import { View, Text, ScrollView,Image, Platform } from 'react-native'
import React from 'react'
import { colors } from '../../utils/theme'
import useCollection from './_hooks/useCollection'
import TabBar from './_components/TabBar'




const CollectionPage = () => {
    const {collectionData}:any=useCollection();
    
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:colors.primaryBackground}}>
    <Image source={{uri:collectionData?.banner_image_url}} style={{width:'100%',height:Platform?.OS==='android'?120:140}}/>
    <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:-40}}>
    <Image source={{uri:collectionData?.image_url}} style={{width:80,height:80,borderRadius:12,borderWidth:1}}/>
    </View>
    <View style={{height:'100%',width:'100%',backgroundColor:colors.secondaryBackground}}>
    <TabBar/>
    </View>
    </View>
  )
}

export default CollectionPage