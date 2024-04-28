import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
const ReletedProduct = ({ reletedProducts }) => {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className=' mb-[100px] md:mb-0 my-8 shadow-lg'>
            
            <Carousel
             additionalTransfrom={0}
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass='px-[10px]'
                 infinite
                
            >
                {
                    reletedProducts?.map(product => (
                        <Product key={product.key} product={product} />
                    ))
                }
            </Carousel>
        </div>
    )
}

export default ReletedProduct
