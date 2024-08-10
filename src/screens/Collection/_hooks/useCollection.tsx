import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBookmarks, setCollectionData } from '../../../store/action'

const apiKey = process.env.API_URL || 'cqt_rQ4rjPvbKdDRJCTVHyDWxdhH4hPp'

export default function useCollection() {
    const [page,setPage]=useState(0)
    const dispatch=useDispatch()
    const addToBookmark=(data:any)=>dispatch(setBookmarks(data))
    const setCollection=(data:any)=>dispatch(setCollectionData(data))
    
      const [collectionItems,setCollectionItems]:any=useState([]);
      const fetchCollectionItems=async()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.covalenthq.com/v1/eth-mainnet/nft/0x8821bee2ba0df28761afff119d66390d594cd280/metadata/?page-size=20&page-number=${page}`,
           
          };
          await axios.get(config.url, {
            auth: {
              username: apiKey||'',
              password: ''
            }
          })
          .then((response) => {
            //console.log(JSON.stringify(response.data?.data?.items))
            setCollectionItems([...collectionItems,...response.data?.data?.items])
            //setPage(page+1);
          })
          .catch((error) => {
            console.log(error);
          });
          
      }
      const fetchBookmarks=async()=>{
        let bookmarks= await AsyncStorage.getItem('bookmark')
        if(bookmarks){
            addToBookmark(JSON.parse(bookmarks))
        }
      }
      const fetchCollectionInfo=async()=>{
        const data= await axios.get('https://api.simplehash.com/api/v0/nfts/collections/ethereum/0x8821bee2ba0df28761afff119d66390d594cd280',{
          headers:{
            'X-API-KEY':"thefactiles_sk_qlmq1mzcr8e6175agdrtae9bvrz2o9up"
          }
        })
        if(data?.data?.collections){
          setCollection(data?.data?.collections?.[0])
        }
      }

     

      useEffect(()=>{
        if(page==0){
          fetchBookmarks();
          fetchCollectionInfo()
        }
        fetchCollectionItems()
      },[page])

   

  return {
    collectionItems,
    page,
    setPage
  }
}
