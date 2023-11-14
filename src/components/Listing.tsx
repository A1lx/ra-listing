export const Listing = ( {items} ) => {
  return (
    <div className="item-list">
      {items.map()}
    </div>
  )
}



/*
компонент создает это:

<div className="item-list">
  <div className="item">
    <div className="item-image">
      <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
        <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg">
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">Woodland Fairy</p>
      <p className="item-price">$3.99</p>
      <p className="item-quantity level-medium">12 left</p>
    </div>
  </div>
</div>
*/