
json.partial! 'api/products/product', product: @product

# json.photoUrls @product.photos.map { |file| url_for(file) }
    if @product.photos.attached?
      json.photoUrls @product.photos.map { |file| url_for(file) }  
    end