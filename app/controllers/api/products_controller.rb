class Api::ProductsController < ApplicationController

    def index
        @products = Product.with_attached_photos.all
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

end
