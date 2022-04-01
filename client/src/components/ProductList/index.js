import React from 'react';
import {Button} from 'react-bootstrap';

function ProductList() {
    const Furniture = ([
      
        {
            name: "Canon C200",
            description: "4k video @60fps, internal Canon raw, 13 stops of dynamic range"
        },
        {
            name: "Canon C300 Mark II",
            description: "4k video @ 60fps, HD @ 120fps, 15 stops of dynamic range"
        },
        {
            name: "Canon C70",
            description: "4k video @120 fps, 2k @ 180 fps, 16+ stops of dynamic range"
        },
        {
            name: "Sony FX9",
            description: "4k video @60 fps, 2k @ 180fps, 15 stops of dynamic range"
        },
        {
            name: "Sony FX6",
            description: "4k of video @60 fps, 4k UHD @120fps, 15+ stops of dynamic range"
        },
    ]);
    return(
        <div>
            <h1 className="heading">Furnitures</h1>
                <section className="flex-row">
                    <Button></Button>
                </section>
        </div>
    );
}

export default ProductList;