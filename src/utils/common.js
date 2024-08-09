export function nFormatter(num) {
    let numVal;
    if(typeof num=='string'){
       numVal=parseFloat(num)
    }
    else{
       numVal=num
    }
    if (numVal >= 1000000000) {
       return (numVal / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (numVal >= 1000000) {
       return (numVal / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (numVal >= 1000) {
       return (numVal / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return numVal;
    
 }

 export function truncate(value, length) {
    if (value?.length <= length) {
      return value;
    }
  
    const separator = '...';
    const stringLength = length - separator.length;
    const frontLength = Math.ceil(stringLength / 2);
    const backLength = Math.floor(stringLength / 2);
  
    return (
      value?.substring(0, frontLength) +
      separator +
      value?.substring(value?.length - backLength)
    );
  }

  export function getMarketplaceImage(marketplace) {
    if(marketplace=='opensea'){
        return 'https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png'
    }
    else if(marketplace==='x2y2'){
        return 'https://s2.coinmarketcap.com/static/img/coins/64x64/18106.png'
    }
    else if(marketplace==='blur'){
        return 'https://pbs.twimg.com/profile_images/1518705644450291713/X2FLVDdn_400x400.jpg'
    }
    else{
        return 'https://pbs.twimg.com/profile_images/1815769204076822528/QspI9k-9_400x400.jpg'
    }
  }