import React from 'react';
import {FlatList, StyleSheet, Dimensions, View} from 'react-native';
import { useSelector } from 'react-redux';
import CircularLoader from '../../../common/Loader';
import { NftItem } from '../../../types/CollectionTypes';
import { colors } from '../../../utils/theme';

import NFTItem from './NFTItem';

const { width } = Dimensions.get('window');


const BookmarkList = () => {
   
    //const data=NFTList
  const bookmark=useSelector((state:any)=>state?.bookmarks)

  return (
    <FlatList
      data={bookmark?.filter((item:NftItem)=>{
        return item?.nft_data?.external_data?.name!==undefined
      })}
      ListFooterComponent={()=>(
        <View style={{width:'100%',height:200,alignItems:'center',justifyContent:'center'}}>
         
        </View>
      )}
      style={{backgroundColor:colors.primaryBackground}}
      renderItem={({item})=>(
        <NFTItem item={item}/>
      )}
      keyExtractor={(item) => item.nft_data?.token_id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    backgroundColor:colors.secondaryBackground
  },
      item: {
        width: (width - 40) / 2,
        margin: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        height:(width - 40) / 2,
        borderRadius:12,
        position:'relative'
        
      },
});

export default BookmarkList;
