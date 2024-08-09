import axios from "axios"
import { useEffect, useState } from "react"

    const apiKey=process.env.SIMPLE_HASH_API

const useNFT = (routeData:any) => {

    const [listingData,setListingData]=useState({})
    const [traitData,setTraitData]=useState([])

    


      const fetchListingData=async(contract_address:string,tokenId:string)=>{
        await axios.get(`https://api.simplehash.com/api/v0/nfts/listings/ethereum/${contract_address}/${tokenId}?order_by=listing_timestamp_desc&limit=50`,{
            headers:{
                'X-API-KEY':apiKey
            }
        }).then((res)=>{
            console.log(res.data)
            setListingData(res.data?.listings?.[0])
        })
      }
      const fetchTraitData=async(contract_address:string,tokenId:string)=>{
        await axios.get(`https://api.simplehash.com/api/v0/nfts/traits/ethereum/${contract_address}/${tokenId}/floors`,{
            headers:{
                'X-API-KEY':apiKey
            }
        }).then((res)=>{
            console.log(res.data)
            setTraitData(res.data?.trait_floor_prices)
        })
      }

    useEffect(()=>{
        if(routeData){
            fetchTraitData(routeData?.contract_address,routeData?.nft_data?.token_id)
            fetchListingData(routeData?.contract_address,routeData?.nft_data?.token_id)
        }
        
    },[routeData])


  return {traitData,listingData}
}

export default useNFT