import { View, Text, ScrollView, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Material from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { getMarketplaceImage } from '../../../utils/common'
import { useSelector } from 'react-redux'
import { placeHolderData } from '../../../constant/data'
import { CollectionInfo } from '../../../types/CollectionTypes'

const About = () => {
  const nftData:CollectionInfo=useSelector((state:any)=>state?.collectionData)

  return (
    <ScrollView style={{width:'100%',padding:20,backgroundColor:colors.primaryBackground}}>
        <Text style={{color:colors.primaryFont,fontSize:24,fontFamily:typography.Bold}}>{nftData?.name || placeHolderData?.name} <Material name='verified' style={{marginHorizontal:4}} size={18} color={colors.accent}/></Text>
        <Text style={{color:colors.secondaryFont,fontSize:14,fontFamily:typography.Medium,marginVertical:12}}>{nftData?.description || placeHolderData?.description}</Text>
        {nftData?.floor_prices && <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:12,alignItems:'center'}}>
            <View style={{alignItems:'center',justifyContent:"flex-start"}}>
            <Text style={{color:colors.primaryFont,fontSize:16,fontFamily:typography.SemiBold}}>{(nftData?.floor_prices?.[0]?.value/10**18)?.toFixed(3)} <Icon name='ethereum' style={{marginHorizontal:4}} size={14} color={colors.primaryFont}/></Text>
            <Text style={{color:colors.secondaryFont,fontSize:12,fontFamily:typography.Regular}}>Floor Price</Text>
            </View>
            {/**/}
            <View style={{alignItems:'center',justifyContent:"flex-start"}}>
            <Text style={{color:colors.primaryFont,fontSize:16,fontFamily:typography.SemiBold}}>{(nftData?.top_bids?.[0]?.value/10**18)?.toFixed(3)} <Icon name='ethereum' style={{marginHorizontal:4}} size={14} color={colors.primaryFont}/></Text>
            <Text style={{color:colors.secondaryFont,fontSize:12,fontFamily:typography.Regular}}>Best Offer</Text>
            </View>
             {/**/}
             <View style={{alignItems:'center',justifyContent:"flex-start"}}>
            <Text style={{color:colors.primaryFont,fontSize:16,fontFamily:typography.SemiBold}}>{nftData?.total_quantity}</Text>
            <Text style={{color:colors.secondaryFont,fontSize:12,fontFamily:typography.Regular}}>Items</Text>
            </View>
             {/**/}
             <View style={{alignItems:'center',justifyContent:"flex-start"}}>
            <Text style={{color:colors.primaryFont,fontSize:16,fontFamily:typography.SemiBold}}>{nftData?.distinct_owner_count}</Text>
            <Text style={{color:colors.secondaryFont,fontSize:12,fontFamily:typography.Regular}}>Owners</Text>
            </View>
        </View>}
        
        {nftData?.floor_prices &&  <View style={{backgroundColor:colors.secondaryBackground,borderRadius:12,marginTop:12,padding:12,borderColor:colors.border,borderWidth:1}}>
            {nftData?.floor_prices?.map((item,index)=>(
                <View key={index} style={{marginBottom:8,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Image style={{width:14,height:14,borderRadius:14,marginRight:4}} source={{uri:getMarketplaceImage(item?.marketplace_id)}}/>
                        <Text style={{color:colors.primaryFont,fontFamily:typography.Medium,fontSize:14}}>{item?.marketplace_name}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{color:colors.primaryFont,fontFamily:typography.Medium,fontSize:14}}>{item?.value/10**item?.payment_token?.decimals}{' '}</Text>
                        <Icon name='ethereum' style={{marginHorizontal:4}} size={14} color={colors.primaryFont}/>
                    </View>
                </View>
            ))}
        </View>}
       
        <View style={{width:'100%',flexDirection:'row',marginTop:24,justifyContent:'space-around',marginVertical:12,alignItems:'center'}}>
            <Icon name='twitter' onPress={()=>{
                Linking.openURL(`https://x.com/${nftData?.twitter_username}`)
             }} color={'white'} size={24}/>
            {/**/}
            <Icon name='discord' onPress={()=>{
                Linking.openURL(nftData?.discord_url)
             }} color={'white'} size={24}/>
             {/**/}
             <Entypo name='globe' onPress={()=>{
                Linking.openURL(nftData?.external_url)
             }} color={'white'} size={24}/>
             {/**/}
             <TouchableOpacity onPress={()=>{
                Linking.openURL(`https://etherscan.io/address/${nftData?.top_contracts?.[0]?.split('.')[1]}`)
             }}>
            <Image width={24} height={24} style={{backgroundColor:'white',borderRadius:24}} source={{uri:'https://i.postimg.cc/7ZVshYfT/etherscan-logo-circle.png'}}/>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default About