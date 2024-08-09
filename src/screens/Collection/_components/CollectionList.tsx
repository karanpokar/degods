import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NFTList } from '../../../constant/data';
import { colors } from '../../../utils/theme';
import useCollection from '../_hooks/useCollection';

import NFTItem from './NFTItem';


// Get screen width
const { width } = Dimensions.get('window');

// Calculate item width

const CollectionList = () => {
   const {collectionItems,page,setPage}:any=useCollection();
    //const data=NFTList
  

  return (
    <FlatList
      data={collectionItems?.filter((item:any,index:any)=>{
        return item?.nft_data?.external_data?.name!==undefined
      })}
      style={{
        backgroundColor:colors.secondaryBackground
      }}
      renderItem={({item})=>(
        <NFTItem item={item}/>
      )}
      onEndReached={
        ()=>{
            setPage(page+1)
        }
      }
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

export default CollectionList;
