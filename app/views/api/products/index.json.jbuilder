

@products.each do |product|
  json.set! product.id do
    json.partial! 'api/products/product', product: product

    if product.photos.attached?
      json.photoUrls product.photos.map { |file| url_for(file) }  
    end
        
  end
end



