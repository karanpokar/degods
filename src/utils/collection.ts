import AsyncStorage from "@react-native-async-storage/async-storage"
import { NftItem } from "../types/CollectionTypes"
import { mediumFeedback } from "./haptic"

export const checkIsBookmarked=(item:NftItem,bookmark:NftItem[])=>{
    let includes= [...bookmark]?.filter((items,index)=>{
        return item?.nft_data?.external_data?.name==items?.nft_data?.external_data?.name
    })
    
    if(includes.length>0){

        return true
    }
    else{

        return false
    }
}

export const onBookmarkClicked=async(item:NftItem,bookmark:NftItem[],addToBookmark:any)=>{
    if(checkIsBookmarked(item,bookmark)){
        let filter=[...bookmark].filter((items,index)=>{
            return item?.nft_data?.external_data?.name!==items?.nft_data?.external_data?.name
        })
        addToBookmark(filter)
        mediumFeedback()
    }
    else{
        let finalArr=[...bookmark]
        finalArr.push(item);
        await AsyncStorage.setItem('bookmark',JSON.stringify(finalArr))
        //console.log(finalArr)
        mediumFeedback()
        addToBookmark(finalArr)
    }
}