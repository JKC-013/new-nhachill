import React from 'react';
import Marketplace from './Marketplace';

const ProductsMaterials = () => {
    return (
        <Marketplace
            initialTab="materials"
            title={<>Advanced <span className="text-secondary italic">Materials</span> Hub</>}
        />
    );
};

export default ProductsMaterials;
