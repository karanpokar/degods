import { View,Image, Platform } from 'react-native'
import React from 'react'
import { colors } from '../../utils/theme'
import TabBar from './_components/TabBar'
import { useSelector } from 'react-redux'
import { CollectionInfo } from '../../types/CollectionTypes'




const CollectionPage = () => {
  const collectionData:CollectionInfo=useSelector((state:any)=>state?.collectionData)
    
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