Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :carts, only: [:index, :create, :update, :destroy]
    delete '/carts', to: 'carts#destroy_all'
  end

  root to: 'static_pages#root'
end


