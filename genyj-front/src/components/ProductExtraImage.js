import React from 'react';

export default function({image}) {
  return <div className="col-4">
    <div className="extra-image-wrapper">
      <img className={'w-100'}
           src={'http://127.0.0.1:8000/storage/products_images/' +
               image.filename}/>
    </div>
  </div>;
}