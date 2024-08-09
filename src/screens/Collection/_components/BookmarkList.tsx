import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NFTList } from '../../../constant/data';
import { colors } from '../../../utils/theme';

import NFTItem from './NFTItem';


// Get screen width
const { width } = Dimensions.get('window');

// Calculate item width

const BookmarkList = () => {
   
    //const data=NFTList
  const bookmark=useSelector((state:any)=>state?.bookmarks)

  return (
    <FlatList
      data={bookmark?.filter((item,index)=>{
        return item?.nft_data?.external_data?.name!==undefined
      })}
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
     // 20px padding on left and right
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
