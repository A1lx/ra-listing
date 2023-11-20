import data from '../data/etsy.json';
import { ListingItem } from './ListingItem';


export const Listing = () => {
  console.log(data)

  return (
    <div className="item-list">
      {data.map(elem => <ListingItem
        item = {elem}
        key = {elem.listing_id}
      />)}
    </div>
  )
}