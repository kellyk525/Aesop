class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.string :sub_category, null: false
      t.string :description, null: false
      t.string :size, null: false
      t.float :price, null: false
      t.text :key_ingredients
      t.text :how_to_use
      t.string :dosage
      t.string :texture
      t.string :aroma
      t.string :suited_to
      t.string :skin_feel
      t.string :skin_type
      t.string :skin_concern
      t.string :scalp_type
      t.string :hair_type
      t.string :application
      t.string :scent_profile
      t.string :about_this_kit
      t.string :in_this_kit, array: true
      t.timestamps
    end

    add_index :products, :name, unique: true
    add_index :products, :price
    add_index :products, :category
    add_index :products, :sub_category
  end
end
