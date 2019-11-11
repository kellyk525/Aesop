class Product < ApplicationRecord
    validates :name, :size, :price, :category, :sub_category, presence: true
    validates :name, uniqueness: true

    has_one_attached :photos

end
