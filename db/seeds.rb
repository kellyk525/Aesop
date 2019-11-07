# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(email: 'demodemo@aesop.com', first_name: 'Demo', last_name: 'User', password: 'password')
# Change user email -- already exists

Product.create!(
    name: "Hydrating Lotion",
    size: ["0.18 oz", "5.12 ml"],
    price: 37.00,
    category: "Body",
    description: "hydrates your skin",
    key_ingredients: "A lot of ingredients",
    how_to_use: "A lot of instructions",
    dosage: "little",
    texture: "soft",
    sub_category: "hydration"
)

Product.create!(
    name: "Face lotion",
    size: ["0.20 oz", "7.12 ml"],
    price: 52.00,
    category: "Skincare",
    description: "balances your skin complextion",
    key_ingredients: "A lot of ingredients",
    how_to_use: "A lot of instructions",
    dosage: "little",
    texture: "soft",
    sub_category: "clear"
)