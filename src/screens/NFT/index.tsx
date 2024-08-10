import { View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import useNFT from './_hooks/useNFT'
import { colors, typography } from '../../utils/theme'
import  Icon  from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setBookmarks } from '../../store/action'
import { truncate } from '../../utils/common'
import Traits from './components/Trait'
import { useNavigation } from '@react-navigation/native'
import { NftItem } from '../../types/CollectionTypes'
import { checkIsBookmarked, onBookmarkClicked } from '../../utils/collection'
import CurrentPrice from './components/CurrentPrice'

const NFTPage = ({route}:any) => {
  let nftData:any=route.params?.data
  const {traitData}:any=useNFT(nftData)
  const navigation=useNavigation()
  const {width,height}=Dimensions.get('screen');
  const dispatch=useDispatch();
  const addToBookmark=(data:any)=>dispatch(setBookmarks(data))
  const bookmark:NftItem[]=useSelector((state:any)=>state?.bookmarks)
    


  return (
   
      <ScrollView style={{width:'100%',height:'100%',backgroundColor:colors.primaryBackground}}>
        <View style={{width:width,height:width,position:'relative'}}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }} style={{zIndex:10,height:32,width:32,borderRadius:32,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.8)',position:'absolute',top:40,left:20,}}>
          <Icon name='chevron-back' color={'white'} size={20} />
          </TouchableOpacity>
         
          <Image style={{width:width,height:width,borderBottomLeftRadius:32,borderBottomRightRadius:32}} source={{uri:nftData?.nft_data?.external_data?.image || nftData?.nft_data?.external_data?.asset_url}}/>
        </View>
        <View style={{width:'100%',marginVertical:16,paddingHorizontal:20}}>
          <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
          <View>
          <Text style={{fontFamily:typography.SemiBold,fontSize:14,color:colors.secondaryFont}}>{nftData?.contract_name}</Text>
          <Text style={{fontFamily:typography.SemiBold,fontSize:24,color:colors.primaryFont}}>{nftData?.nft_data?.external_data?.name}</Text>
          <Text onPress={()=>{
            Linking.openURL(`https://etherscan.io/address/${nftData?.nft_data?.current_owner}`)
          }} style={{fontFamily:typography.SemiBold,fontSize:14,color:colors.accent}}> <Text style={{color:colors.primaryFont}}>Owned by </Text>{truncate(nftData?.nft_data?.current_owner,20)}</Text>
          </View>
          
          <TouchableOpacity onPress={()=>{
            onBookmarkClicked(nftData,bookmark,addToBookmark)
        }}>
        <Icon name={checkIsBookmarked(nftData,bookmark)?'bookmark':'bookmark-outline'} color={'white'} size={24}/>
        </TouchableOpacity>
          </View>
        </View>     
        <Traits traits={traitData}/>
      </ScrollView>

  )
}

export default NFTPage