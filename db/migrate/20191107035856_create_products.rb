class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :size, array: true
      t.float :price, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.text :key_ingredients, null: false
      t.text :how_to_use, null: false
      t.string :dosage, null: false
      t.string :texture, null: false
      t.string :sub_category, null: false
      t.timestamps
    end

    add_index :products, :name, unique: true
    add_index :products, :price
    add_index :products, :category
    add_index :products, :sub_category
  end
end
