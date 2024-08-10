export interface CollectionInfo {
  collection_id: string
  name: string
  description: string
  image_url: string
  image_properties: ImageProperties
  banner_image_url: string
  category: any
  is_nsfw: boolean
  external_url: string
  twitter_username: string
  discord_url: string
  instagram_username: any
  medium_username: any
  telegram_url: any
  marketplace_pages: MarketplacePage[]
  metaplex_mint: any
  metaplex_candy_machine: any
  metaplex_first_verified_creator: any
  floor_prices: FloorPrice[]
  top_bids: TopBid[]
  distinct_owner_count: number
  distinct_nft_count: number
  total_quantity: number
  chains: string[]
  top_contracts: string[]
  collection_royalties: CollectionRoyalty[]
}

export interface ImageProperties {
  width: number
  height: number
  mime_type: string
}

export interface MarketplacePage {
  marketplace_id: string
  marketplace_name: string
  marketplace_collection_id: string
  collection_url: string
  verified?: boolean
}

export interface FloorPrice {
  marketplace_id: string
  marketplace_name: string
  value: number
  payment_token: PaymentToken
  value_usd_cents: number
}

export interface PaymentToken {
  payment_token_id: string
  name: string
  symbol: string
  address: any
  decimals: number
}

export interface TopBid {
  marketplace_id: string
  marketplace_name: string
  value: number
  payment_token: PaymentToken2
  value_usd_cents: number
}

export interface PaymentToken2 {
  payment_token_id: string
  name: string
  symbol: string
  address: any
  decimals: number
}

export interface CollectionRoyalty {
  source: string
  total_creator_fee_basis_points: number
  recipients: Recipient[]
}

export interface Recipient {
  address: string
  percentage: number
  basis_points: number
}


export interface TraitList {
  trait_floor_prices: TraitFloorPrice[]
}

export interface TraitFloorPrice {
  floor_price: FloorPrice
  trait: Trait
}

export interface FloorPrice {
  marketplace_id: string
  marketplace_name: string
  value: number
  payment_token: PaymentToken
  listing_url: string
}

export interface PaymentToken {
  payment_token_id: string
  name: string
  symbol: string
  address: any
  decimals: number
}

export interface Trait {
  trait_type: string
  value: string
}

export type NftList = NftItem[]

export interface NftItem {
  contract_name: string
  contract_ticker_symbol: string
  contract_address: string
  is_spam: boolean
  type: string
  nft_data: NftData
}

export interface NftData {
  token_id: string
  token_balance: any
  token_url?: string
  original_owner: string
  current_owner: string
  external_data?: ExternalData
  asset_cached: boolean
  image_cached: boolean
}

export interface ExternalData {
  name: string
  description: string
  asset_url: string
  asset_file_extension: string
  asset_mime_type: string
  asset_size_bytes: string
  image: string
  image_256: string
  image_512: string
  image_1024: string
  animation_url?: string
  external_url?: string
  attributes: Attribute[]
  thumbnails: Thumbnails
  image_preview: string
  asset_properties: AssetProperties
}

export interface Attribute {
  trait_type: string
  value: string
}

export interface Thumbnails {
  image_256: string
  image_512: string
  image_1024: string
  image_opengraph_url: string
  thumbhash?: string
}

export interface AssetProperties {
  asset_width?: number
  asset_height?: number
  dominant_color?: string
}
