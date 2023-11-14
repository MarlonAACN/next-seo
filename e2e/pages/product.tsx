import React from 'react';
import { NextSeo } from '../..';
import Links from '../components/links';

const Product = () => (
  <>
    <NextSeo
      title="Product Page Title"
      description="Description of product page"
      openGraph={{
        title: 'Open Graph Product Title',
        description: 'Description of open graph product',
        url: 'https://www.example.com/products/product-title',
        siteName: 'SiteName',
        images: [
          {
            url: 'https://www.test.ie/og-image-product-title-01.jpg',
            width: 50,
            height: 50,
            alt: 'Og Image Alt Product Title A',
          },
        ],
        type: 'product',
        product: {
          pluralTitle: 'Product titles',
          priceAmount: '9.95',
          priceCurrency: 'EUR',
        },
      }}
    />
    <h1>Product Page SEO</h1>
    <Links />
  </>
);

export default Product;
