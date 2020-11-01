import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collections/collection-preview.comp";

class Shoplist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restOfCollProps }) => (
          <CollectionPreview key={id} {...restOfCollProps} />
        ))}
      </div>
    );
  }
}

export default Shoplist;
