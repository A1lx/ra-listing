function checkStrLength(str: string) {
  if (str.length > 50) {
    str.slice(50, str.length - 1);
    return `${str}...`;
  }
  return str || '';
}


function checkСurrency(currency: string, price: string) {
  switch (currency) {
    case 'USD': 
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default: 
      return `${price} GBP`;
  }
}

function checkQuantity(quantity: number) {
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20 && quantity > 10) {
    return 'level-medium';
  }  
  return 'level-high';
}


export const ListingItem = ({item}) => {
  const newTitle = checkStrLength(item.title || '');
  const newPrice = checkСurrency(item.currency_code, item.price);
  const newQuantityClass = checkQuantity(item.quantity);

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage && item.MainImage.url_570xN}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{newTitle}</p>
        <p className="item-price">{newPrice}</p>
        <p className={`item-quantity ${newQuantityClass}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}