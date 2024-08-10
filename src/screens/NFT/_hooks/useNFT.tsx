import axios from "axios"
import { useEffect, useState } from "react"

    const apiKey=process.env.SIMPLE_HASH_API

const useNFT = (routeData:any) => {
    const [traitData,setTraitData]=useState([])

    


     
      const fetchTraitData=async(contract_address:string,tokenId:string)=>{
        await axios.get(`https://api.simplehash.com/api/v0/nfts/traits/ethereum/${contract_address}/${tokenId}/floors`,{
            headers:{
                'X-API-KEY':apiKey
            }
        }).then((res)=>{
            //console.log(res.data)
            setTraitData(res.data?.trait_floor_prices)
        })
      }

    useEffect(()=>{
        if(routeData){
            fetchTraitData(routeData?.contract_address,routeData?.nft_data?.token_id)
        
        }
        
    },[routeData])


  return {traitData}
}

export default useNFT