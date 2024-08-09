import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../../utils/theme';


const itemMargin = 16; // Margin between items


const Item = ({ title,trait,value,token }:any) => (
  <View style={styles.item}>
    <Text style={{textTransform:'uppercase',fontSize:8,fontFamily:typography.Medium,color:'black'}}>{title}</Text>
    <Text style={{fontSize:10,fontFamily:typography.SemiBold,color:colors.accent}}>{trait}</Text>
    <Text style={{fontSize:10,fontFamily:typography.SemiBold,color:'black'}}>Floor: {value} {token}</Text>
  </View>
);

const Traits = ({traits}:any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {traits?.map((item:any, index:any) => (
          <Item key={index} title={item?.trait?.trait_type} trait={item?.trait?.value} value={item?.floor_price?.value/10**18} token={item?.floor_price?.payment_token?.symbol} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: itemMargin / 2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    margin: itemMargin / 2,
    padding: 10,
    borderRadius:6,
    backgroundColor: colors.secondaryFont,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Traits;
