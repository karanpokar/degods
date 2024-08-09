import { View, Text, ScrollView, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, typography } from '../../../utils/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { getMarketplaceImage } from '../../../utils/common'

const About = () => {

    let nftData={
        "collection_id": "b43dc80ada56435599e975f6f99300d8",
        "name": "DeGods",
        "description": "A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe.",
        "image_url": "https://lh3.googleusercontent.com/ZvxAuFEpqB0EjgyqFficgFk0AIDYRLtvyMsjQZDzCM9LI6niOLJwZmZHqbgH-r0nh420Y5SNCCozuWlfhMVxjVXq6j4HVammvsvM",
        "image_properties": {
          "width": 512,
          "height": 512,
          "mime_type": "image/jpeg"
        },
        "banner_image_url": "https://lh3.googleusercontent.com/16uiSEzZikRFZAvg9usVMV83bI-FbDVeFvyz6-9B0ZlvlAzAkZR4iVMeqrGbjxsweCa0sZ0W_vUBkV1X6Tgj47oA9UQoJRnyte8=w2500",
        "category": null,
        "is_nsfw": false,
        "external_url": "https://degods.com",
        "twitter_username": "DeGodsNFT",
        "discord_url": "https://discord.gg/dexyz",
        "instagram_username": null,
        "medium_username": null,
        "telegram_url": null,
        "marketplace_pages": [
          {
            "marketplace_id": "magiceden",
            "marketplace_name": "Magic Eden",
            "marketplace_collection_id": "ethereum/0x8821bee2ba0df28761afff119d66390d594cd280",
            "collection_url": "https://magiceden.io/collections/ethereum/0x8821bee2ba0df28761afff119d66390d594cd280",
            "verified": null
          },
          {
            "marketplace_id": "opensea",
            "marketplace_name": "OpenSea",
            "marketplace_collection_id": "degods-eth",
            "collection_url": "https://opensea.io/collection/degods-eth",
            "verified": true
          }
        ],
        "metaplex_mint": null,
        "metaplex_candy_machine": null,
        "metaplex_first_verified_creator": null,
        "floor_prices": [
          {
            "marketplace_id": "blur",
            "marketplace_name": "Blur",
            "value": 1499998800000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 374440
          },
          {
            "marketplace_id": "magiceden",
            "marketplace_name": "Magic Eden",
            "value": 1500000000000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 374440
          },
          {
            "marketplace_id": "opensea",
            "marketplace_name": "OpenSea",
            "value": 1560000000000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 389418
          },
          {
            "marketplace_id": "x2y2",
            "marketplace_name": "X2Y2",
            "value": 2300000000000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 574142
          }
        ],
        "top_bids": [
          {
            "marketplace_id": "blur",
            "marketplace_name": "Blur",
            "value": 1430000000000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 356967
          },
          {
            "marketplace_id": "opensea",
            "marketplace_name": "OpenSea",
            "value": 1278200000000000000,
            "payment_token": {
              "payment_token_id": "ethereum.native",
              "name": "Ether",
              "symbol": "ETH",
              "address": null,
              "decimals": 18
            },
            "value_usd_cents": 319073
          }
        ],
        "distinct_owner_count": 1784,
        "distinct_nft_count": 5150,
        "total_quantity": 5150,
        "chains": [
          "ethereum"
        ],
        "top_contracts": [
          "ethereum.0x8821bee2ba0df28761afff119d66390d594cd280"
        ],
        "collection_royalties": [
          {
            "source": "opensea",
            "total_creator_fee_basis_points": 50,
            "recipients": [
              {
                "address": "0xa45D808eAFDe8B8E6B6B078fd246e28AD13030E8",
                "percentage": 100,
                "basis_points": 50
              }
            ]
          }
        ]
      }

  return (
    <ScrollView style={{width:'100%',padding:20,backgroundColor:colors.primaryBackground}}>
        <Text style={{color:colors.primaryFont,fontSize:24,fontFamily:typography.Bold}}>{nftData?.name}</Text>
        <Text style={{color:colors.secondaryFont,fontSize:14,fontFamily:typography.Medium,marginVertical:12}}>{nftData?.description}</Text>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginVertical:12,alignItems:'center'}}>
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
        </View>
        <View style={{backgroundColor:colors.secondaryBackground,borderRadius:12,marginTop:12,padding:12,borderColor:colors.border,borderWidth:1}}>
            {nftData?.floor_prices?.map((item,index)=>(
                <View style={{marginBottom:8,width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Image style={{width:14,height:15,borderRadius:14,marginRight:4}} source={{uri:getMarketplaceImage(item?.marketplace_id)}}/>
                        <Text style={{color:colors.primaryFont,fontFamily:typography.Medium}}>{item?.marketplace_name}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Text style={{color:colors.primaryFont,fontFamily:typography.Medium}}>{item?.value/10**item?.payment_token?.decimals}{' '}</Text>
                        <Icon name='ethereum' style={{marginHorizontal:4}} size={14} color={colors.primaryFont}/>
                    </View>
                </View>
            ))}
        </View>
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