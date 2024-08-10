import React from 'react';
import { FlatList, StyleSheet, Dimensions,View, Platform, ActivityIndicator} from 'react-native';
import CircularLoader from '../../../common/Loader';
import { CollectionInfo, NftItem } from '../../../types/CollectionTypes';
import { colors } from '../../../utils/theme';
import useCollection from '../_hooks/useCollection';

import NFTItem from './NFTItem';
const { width } = Dimensions.get('window');

interface Collection{
  collectionItems:NftItem[],
  page:number,
  setPage:any
}

const CollectionList = () => {
   const {collectionItems,page,setPage}:Collection=useCollection();

  return (
    <FlatList
      data={collectionItems?.filter((item,index)=>{
        return item?.nft_data?.external_data?.name!==undefined
      })}
      style={{
        backgroundColor:colors.secondaryBackground
      }}
      ListFooterComponent={()=>(
        <View style={{width:'100%',height:100,alignItems:'center',justifyContent:'center'}}>
         {Platform.OS==='ios'?<CircularLoader/>:<ActivityIndicator color={colors.accent} size={'large'}/>}
        </View>
      )}
      renderItem={({item})=>(
        <NFTItem item={item}/>
      )}
      onEndReachedThreshold={0.5}
      onEndReached={
        (info)=>{
          //console.log('Reached',info)
          if(collectionItems?.length>0){
            setPage(page+1)
          } 
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
        backgroundColor:colors.secondaryBackground,
        paddingBottom:200
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
