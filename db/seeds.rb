# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all

User.create!(email: 'demo@aesop.com', first_name: 'Demo', last_name: 'User', password: 'password')
# Change user email -- already exists

# Product.create!(
#     name: "Hydrating Lotion",
#     size: ["0.18 oz", "5.12 ml"],
#     price: 37.00,
#     category: "Body",
#     description: "hydrates your skin",
#     key_ingredients: "A lot of ingredients",
#     how_to_use: "A lot of instructions",
#     dosage: "little",
#     texture: "soft",
#     sub_category: "hydration"
# )

# Product.create!(
#     name: "Face lotion",
#     size: ["0.20 oz", "7.12 ml"],
#     price: 52.00,
#     category: "Skincare",
#     description: "balances your skin complextion",
#     key_ingredients: "A lot of ingredients",
#     how_to_use: "A lot of instructions",
#     dosage: "little",
#     texture: "soft",
#     sub_category: "clear"
# )

Product.destroy_all

gentle_facial_cleansing_milk = Product.create!(
    name: "Gentle Facial Cleansing Milk",
    category: "Skin",
    sub_category: "Cleanse",
    description: "An exceptionally gentle cleanser for daily use, enhanced with botanicals renowned for their soothing properties. Removes makeup effortlessly and rinses with ease.",
    size: "3.4 fl oz",
    price: 35.00,
    key_ingredients: "Panthenol, Grape Seed, Sandalwood",
    how_to_use: "Morning and evening, shake before use; then dispense a small amount onto hands and massage over face and neck. Rinse with tepid water, or remove using a damp cloth.",
    dosage: "Half a teaspoon",
    texture: "Non-foaming, water-soluble emulsion",
    aroma: "Mild, woody, herbaceous",
    suited_to: "Most skin types, particularly dry and sensitive",
    skin_feel: "Cleansed, softened and refreshed",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)

gentle_facial_cleansing_milk_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/cleanse-amazing-face-cleanser.jpeg");
gentle_facial_cleansing_milk.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "cleanse-amazing-face-cleanser.jpeg");


# immediate_moisture_facial_hydrosol =  Product.create!(
#     name: "Immediate Moisture Facial Hydrosol",
#     category: "Skin",
#     sub_category: "Hydrate",
#     description: "A refreshing, Rose Petal-infused misting hydrator to refresh and revive skin and senses in the home, office or at altitude.",
#     size: "1.7 fl oz",
#     price: 35.00,
#     key_ingredients: "Rose Petal, Bergamot Peel, Chamomile Bud",
#     how_to_use: "Spritz from preferred distance across face and neck as often as desired. Allow to air dry.",
#     dosage: "Three pumps",
#     texture: "Light mist",
#     aroma: "Floral, citrus, fresh",
#     suited_to: "All skin types, frequent travellers and office workers",
#     skin_feel: "Refreshing mist format, imparting hydration with a light finish",
#     skin_type: "Combination",
#     skin_concern: "Sensitive"
# )


# lucent_facial_concentrate =  Product.create!(
#     name: "Lucent Facial Concentrate",
#     category: "Skin",
#     sub_category: "Hydrate",
#     description: "A lightweight, vitamin C-rich layering serum that soothes, replenishes and balances skin with its complex blend of anti-oxidant, hydrating and conditioning ingredients.",
#     size: "2.0 fl oz",
#     price: 115.00,
#     key_ingredients: "Rose Petal, Sodium Ascorbyl Phosphate, Niacinamide",
#     how_to_use: "Massage into freshly cleansed and toned skin from forehead to neck. Follow if required with preferred hydrating product.",
#     dosage: "Half a teaspoon",
#     texture: "Lightweight serum",
#     aroma: "Mild, hint of rose",
#     suited_to: "Most skin types",
#     skin_feel: "Hydrated and smooth with a matte finish",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# damascan_rose_facial_treatment =  Product.create!(
#     name: "Damascan Rose Facial Treatment",
#     category: "Skin",
#     sub_category: "Treat",
#     description: "A concentrated blend of precious plant extracts delivering potent doses of vitamins and fatty acids. Relieves, nourishes and replenishes parched skin",
#     size: "0.9 fl oz",
#     price: 75.00,
#     key_ingredients: "Rose Petal, Neroli Blossom, Violet Leaf",
#     how_to_use: "Three times weekly, massage into freshly cleansed and toned skin; or blend nightly with an Aesop hydrator to intensify hydration offering.",
#     dosage: "Three to five drops",
#     texture: "Rich, absorbing oil",
#     aroma: "Floral, earthy, warm",
#     suited_to: "Normal, dry to extremely dry, and distressed skin",
#     skin_feel: "Supple and nourished with a sustained finish",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# control =  Product.create!(
#     name: "Control",
#     category: "Skin",
#     sub_category: "Treat",
#     description: "This gel formulation contains an impressive list of ingredients known for their astringent and soothing properties. Effective without stripping or dehydrating the skin.",
#     size: "0.3 fl oz",
#     price: 35.00,
#     key_ingredients: "Niacinamide, sodium ascorbyl phosphate, salicylic acid",
#     how_to_use: "Apply as often as needed with a clean finger or cotton bud directly to blemishes, under or on top of moisturiser and makeup.",
#     dosage: "Desired amount",
#     texture: "Transparent gel",
#     aroma: "Herbaceous, citrus",
#     suited_to: "Blemished, troubled skin",
#     skin_feel: "Calm and cool with transparent finish",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )


# purifying_facial_exfoliant_paste =  Product.create!(
#     name: "Purifying Facial Exfoliant Paste",
#     category: "Skin",
#     sub_category: "Exfoliate",
#     description: "A cream-based cleansing formulation enhanced with fine Quartz and Lactic Acid to slough away tired cells and soften the skin.",
#     size: "",
#     price: 35.00,
#     key_ingredients: "",
#     how_to_use: "",
#     dosage: "",
#     texture: "",
#     aroma: "",
#     suited_to: "",
#     skin_feel: "",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )




# in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# in_two_minds_facial_cleanser =  Product.create!(
#     name: "In Two Minds Facial Cleanser",
#     category: "Skin",
#     sub_category: "Cleanse",
#     description: "",
#     size: "",
#     price: 35.00,
#     key_ingredients: "",
#     how_to_use: "",
#     dosage: "",
#     texture: "",
#     aroma: "",
#     suited_to: "",
#     skin_feel: "",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# in_two_minds_facial_cleanser =  Product.create!(
#     name: "In Two Minds Facial Cleanser",
#     category: "Skin",
#     sub_category: "Cleanse",
#     description: "",
#     size: "",
#     price: 35.00,
#     key_ingredients: "",
#     how_to_use: "",
#     dosage: "",
#     texture: "",
#     aroma: "",
#     suited_to: "",
#     skin_feel: "",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# in_two_minds_facial_cleanser =  Product.create!(
#     name: "In Two Minds Facial Cleanser",
#     category: "Skin",
#     sub_category: "Cleanse",
#     description: "",
#     size: "",
#     price: 35.00,
#     key_ingredients: "",
#     how_to_use: "",
#     dosage: "",
#     texture: "",
#     aroma: "",
#     suited_to: "",
#     skin_feel: "",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


    # name:
    # category:
    # sub_category:
    # description:
    # size:
    # price:
    # key_ingredients:
    # how_to_use:
    # dosage:
    # texture:
    # aroma:
    # suited_to:
    # skin_feel:
    # skin_type:
    # skin_concern:
    # scalp_type:
    # hair_type:
    # application:
    # scent_profile:
    # about_this_kit: