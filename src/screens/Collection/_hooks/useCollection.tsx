import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBookmarks } from '../../../store/action'
import Config from 'react-native-config';

const apiKey = Config.API_KEY;

export default function useCollection() {
    const [page,setPage]=useState(0)
    const listPerFetch=20;
    const dispatch=useDispatch()
    const addToBookmark=(data:any)=>dispatch(setBookmarks(data))
    const [collectionData,setCollectionData]=useState( {
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
      })
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

      useEffect(()=>{
        fetchBookmarks()
      },[])

      useEffect(()=>{
        fetchCollectionItems()
      },[page])

   

  return {
    collectionData,
    collectionItems,
    page,
    setPage
  }
}
