


class Api::CartsController < ApplicationController
    before_action :require_login

    def index
        @cart_items = Cart.where(user_id: current_user.id)
    end

    def create
        # finding exact cart item
        @cart_items = Cart.where(user_id: current_user.id)
        
        @cart_item = Cart.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id]);

        if !current_user
            render json: ['Please Sign In'], status: 422
        else
            if @cart_item.nil?
                @cart_item = Cart.new(cart_item_params)
                @cart_item.user_id = current_user.id
                @cart_item.save
                render :index
            else
                new_quantity = @cart_item.quantity + params[:cart_item][:quantity].to_i

                @cart_item.update(quantity: new_quantity)
                render :index
            end
        end
    end

    def update
        @cart_items = Cart.where(user_id: current_user.id)
        @cart_item = Cart.find(params[:id])

        if @cart_item.update(cart_item_params)
            render :index
        else
            render json: ['Try Again'], status: 422
        end
    end

    def destroy
        @cart_items = Cart.where(user_id: current_user.id)
        @cart_item = Cart.find(params[:id])
        @cart_item.destroy
        render :show
    end

    def destroy_all
        debugger
        @cart_items = Cart.where(user_id: current_user.id)

        @cart_items.destroy_all
        render :index
    end 

    private

    def cart_item_params
        params.require(:cart_item).permit(:product_id, :quantity)
    end
end