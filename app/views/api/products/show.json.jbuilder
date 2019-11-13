
json.partial! 'api/products/product', product: @product

json.photoUrls @product.photos.map { |file| url_for(file) }
