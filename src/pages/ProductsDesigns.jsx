import React from 'react';
import Marketplace from './Marketplace';

const ProductsDesigns = () => {
    return (
        <Marketplace
            initialTab="designs"
            title={<>The <span className="text-secondary italic">Blueprint</span> Designs</>}
        />
    );
};

export default ProductsDesigns;
