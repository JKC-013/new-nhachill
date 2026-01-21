import React from 'react';
import Marketplace from './Marketplace';

const ProductsFurnitures = () => {
    return (
        <Marketplace
            initialTab="furnitures"
            title={<>Premium <span className="text-secondary italic">Furnitures</span> Collection</>}
        />
    );
};

export default ProductsFurnitures;
