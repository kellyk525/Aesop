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

gentle_facial_cleansing_milk_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Cleanse-Gentle-again.png");
gentle_facial_cleansing_milk.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Cleanse-Gentle-again.png");
gentle_facial_cleansing_milk_attachment_second = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Exfoliate-Facial-Exfoliant-2-again.png");
gentle_facial_cleansing_milk.photos.attach(io: gentle_facial_cleansing_milk_attachment_second, filename: "Exfoliate-Facial-Exfoliant-2-again.png");




in_two_minds_facial_cleanser =  Product.create!(
    name: "In Two Minds Facial Cleanser",
    category: "Skin",
    sub_category: "Cleanse",
    description: "A gentle gel-based formulation that cleanses thoroughly without drying the skin or stripping its natural oils.",
    size: "3.4 fl",
    price: 35.00,
    key_ingredients: "",
    how_to_use: "Dispense into clean hands, massage over the face and neck, then rinse thoroughly with warm water.",
    dosage: "Half a teaspoon",
    texture: "Lightweight gel",
    aroma: "Fresh, herbaceous",
    suited_to: "Combination skin",
    skin_feel: "Purified, soft, refreshed",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)

in_two_minds_facial_cleanser_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Cleanse-Facial-Cleanser-again.png");
in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment, filename: "Cleanse-Facial-Cleanser-again.png");



# amazing_face_cleanser =  Product.create!(
#     name: "Amazing Face Cleanser",
#     category: "Skin",
#     sub_category: "Cleanse",
#     description: "A non-drying daily cleanser enhanced with purifying Mandarin Rind to effectively cleanse the skin without disturbing its natural balance.",
#     size: "3.4 fl oz",
#     price: 35.00,
#     key_ingredients: "Mandarin Rind, Ylang Ylang, Lavender Oil",
#     how_to_use: "Morning and evening, pour into clean hands and lather. Massage over face and neck, then rinse thoroughly with warm water.",
#     dosage: "Half a teaspoon",
#     texture: "Clear, low foaming gel",
#     aroma: "Citrus, floral, fresh",
#     suited_to: "Oily, combination and open-pored skin, for those in warm and humid climates",
#     skin_feel: "Refreshed, balanced and scrupulously clean",
#     skin_type: "Dry",
#     skin_concern: "Sensitive"
# )

# amazing_face_cleanser_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/https://aesop-dev.s3-us-west-1.amazonaws.com/cleanse-amazing-face-cleanser-again.png");
# amazing_face_cleanser.photos.attach(io: amazing_face_cleanser_attachment, filename: "cleanse-amazing-face-cleanser-again.png");


immediate_moisture_facial_hydrosol =  Product.create!(
    name: "Immediate Moisture Facial Hydrosol",
    category: "Skin",
    sub_category: "Hydrate",
    description: "A refreshing, Rose Petal-infused misting hydrator to refresh and revive skin and senses in the home, office or at altitude.",
    size: "1.7 fl oz",
    price: 35.00,
    key_ingredients: "Rose Petal, Bergamot Peel, Chamomile Bud",
    how_to_use: "Spritz from preferred distance across face and neck as often as desired. Allow to air dry.",
    dosage: "Three pumps",
    texture: "Light mist",
    aroma: "Floral, citrus, fresh",
    suited_to: "All skin types, frequent travellers and office workers",
    skin_feel: "Refreshing mist format, imparting hydration with a light finish",
    skin_type: "Combination",
    skin_concern: "Sensitive"
)

immediate_moisture_facial_hydrosol_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hydrate-Immediate-again.png");
immediate_moisture_facial_hydrosol.photos.attach(io: immediate_moisture_facial_hydrosol_attachment, filename: "Hydrate-Immediate-again.png");



in_two_minds_facial_hydrator =  Product.create!(
    name: "In Two Minds Facial Hydrator",
    category: "Skin",
    sub_category: "Hydrate",
    description: "A rapidly absorbed formulation that delivers lightweight hydration with a matte finish, ideal for combination skin.",
    size: "2.1 oz",
    price: 35.00,
    key_ingredients: "Witch Hazel, Sandalwood, Andiroba Seed",
    how_to_use: "After cleansing and toning, dispense product into the hands and massage gently into the face and neck.",
    dosage: "Two pumps",
    texture: "Lightweight, non-greasy lotion",
    aroma: "Woody, herbaceous",
    suited_to: "Combination skin",
    skin_feel: "Soft, smooth, hydrated",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)

in_two_minds_facial_hydrator_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hydrate-Two-again.png");
in_two_minds_facial_hydrator.photos.attach(io: in_two_minds_facial_hydrator_attachment, filename: "Hydrate-Two-again.png");


lucent_facial_concentrate =  Product.create!(
    name: "Lucent Facial Concentrate",
    category: "Skin",
    sub_category: "Hydrate",
    description: "A lightweight, vitamin C-rich layering serum that soothes, replenishes and balances skin with its complex blend of anti-oxidant, hydrating and conditioning ingredients.",
    size: "2.0 fl oz",
    price: 115.00,
    key_ingredients: "Rose Petal, Sodium Ascorbyl Phosphate, Niacinamide",
    how_to_use: "Massage into freshly cleansed and toned skin from forehead to neck. Follow if required with preferred hydrating product.",
    dosage: "Half a teaspoon",
    texture: "Lightweight serum",
    aroma: "Mild, hint of rose",
    suited_to: "Most skin types",
    skin_feel: "Hydrated and smooth with a matte finish",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)


lucent_facial_concentrate_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hydrate-Lucent-again.png");
lucent_facial_concentrate.photos.attach(io: lucent_facial_concentrate_attachment, filename: "Hydrate-Lucent-again.png");


damascan_rose_facial_treatment =  Product.create!(
    name: "Damascan Rose Facial Treatment",
    category: "Skin",
    sub_category: "Treat",
    description: "A concentrated blend of precious plant extracts delivering potent doses of vitamins and fatty acids. Relieves, nourishes and replenishes parched skin",
    size: "0.9 fl oz",
    price: 75.00,
    key_ingredients: "Rose Petal, Neroli Blossom, Violet Leaf",
    how_to_use: "Three times weekly, massage into freshly cleansed and toned skin; or blend nightly with an Aesop hydrator to intensify hydration offering.",
    dosage: "Three to five drops",
    texture: "Rich, absorbing oil",
    aroma: "Floral, earthy, warm",
    suited_to: "Normal, dry to extremely dry, and distressed skin",
    skin_feel: "Supple and nourished with a sustained finish",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)


damascan_rose_facial_treatment_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Treat-Rose-again.png");
damascan_rose_facial_treatment.photos.attach(io: damascan_rose_facial_treatment_attachment, filename: "Treat-Rose-again.png");


control =  Product.create!(
    name: "Control",
    category: "Skin",
    sub_category: "Treat",
    description: "This gel formulation contains an impressive list of ingredients known for their astringent and soothing properties. Effective without stripping or dehydrating the skin.",
    size: "0.3 fl oz",
    price: 35.00,
    key_ingredients: "Niacinamide, sodium ascorbyl phosphate, salicylic acid",
    how_to_use: "Apply as often as needed with a clean finger or cotton bud directly to blemishes, under or on top of moisturiser and makeup.",
    dosage: "Desired amount",
    texture: "Transparent gel",
    aroma: "Herbaceous, citrus",
    suited_to: "Blemished, troubled skin",
    skin_feel: "Calm and cool with transparent finish",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)


control_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Treat-Control-again.png");
control.photos.attach(io: control_attachment, filename: "Treat-Control-again.png");


purifying_facial_exfoliant_paste =  Product.create!(
    name: "Purifying Facial Exfoliant Paste",
    category: "Skin",
    sub_category: "Exfoliate",
    description: "A cream-based cleansing formulation enhanced with fine Quartz and Lactic Acid to slough away tired cells and soften the skin.",
    size: "2.9 ox",
    price: 35.00,
    key_ingredients: "Canina Fruit Oil, Rosemary, Lavender Oil",
    how_to_use: "Dispense into palm then massage gently over face, neck and lips, applying minimal pressure. Avoid eye area. Rinse thoroughly with warm water.",
    dosage: "Desired amount",
    texture: "Water-soluble cream with fine grain",
    aroma: "Herbaceous, floral, earthy",
    suited_to: "Most skin types, particularly dry. Frequent travellers, shavers, winter and cool climates",
    skin_feel: "Polished, softened and immaculately cleansed",
    skin_type: "Dry",
    skin_concern: "Sensitive"
)


purifying_facial_exfoliant_paste_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Exfoliate-Facial-Exfoliant-again.png");
purifying_facial_exfoliant_paste.photos.attach(io: purifying_facial_exfoliant_paste_attachment, filename: "Exfoliate-Facial-Exfoliant-again.png");


# #//////////////// Body


rind_concentrate_body_balm =  Product.create!(
    name: "Rind Concentrate Body Balm",
    category: "bodyandhand",
    sub_category: "Body",
    description: "A citrus-based formulation with oils of Orange and Lemon Rind to cool and refresh the skin, and nut oil extracts to soften and lightly hydrate.",
    size: "4.2 oz",
    price: 35.00,
    key_ingredients: "Pink Grapefruit, Orange Rind, Lemon Rind",
    how_to_use: "Massage into freshly cleansed skin from neck to toe, particularly after sun exposure. Store in refrigerator through summer for boosted sensory pleasure.",
    dosage: "Desired amount",
    texture: "Medium-weight cream",
    aroma: "Citrus, fresh",
    skin_feel: "Swiftly absorbed, lightly hydrated"
)

rind_concentrate_body_balm_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Body-Concentrate-again.png");
rind_concentrate_body_balm.photos.attach(io: rind_concentrate_body_balm_attachment, filename: "Body-Concentrate-again.png");
# rind_concentrate_body_balm_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Body-Concentrate-again.png");
# rind_concentrate_body_balm.photos.attach(io: rind_concentrate_body_balm_attachment, filename: "Body-Concentrate-again.png");



geranium_leaf_body_balm =  Product.create!(
    name: "Geranium Leaf Body Balm",
    category: "bodyandhand",
    sub_category: "Body",
    description: "A rich blend of nourishing nut oils, skin-softening ingredients and Geranium Leaf and Citrus extracts to provide exceptional hydration.",
    size: "4.2 oz",
    price: 35.00,
    key_ingredients: "Geranium Leaf, Mandarin Rind, Bergamot Rind",
    how_to_use: "Morning and evening, massage into freshly cleansed skin from neck to toe, concentrating on dry areas such as elbows, knees and feet.",
    dosage: "Desired amount",
    texture: "Medium-weight cream",
    aroma: "Green, citrus, fresh",
    skin_feel: "Supple, soft, hydrated"
)

geranium_leaf_body_balm_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Body-Balm-again.png");
geranium_leaf_body_balm.photos.attach(io: geranium_leaf_body_balm_attachment, filename: "Body-Balm-again.png");
# geranium_leaf_body_balm_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Body-Balm-again.png");
# geranium_leaf_body_balm.photos.attach(io: geranium_leaf_body_balm_attachment, filename: "Body-Balm-again.png");



# # a_rose_by_any_other_name_body_cleanser =  Product.create!(
# #     name: "A Rose By Any Other Name Body Cleanser",
# #     category: "bodyandhand",
# #     sub_category: "Body",
# #     description: "An aromatic formulation that cleanses gently yet thoroughly, enhanced with hydrating Rose Petal oil and other skin-softening botanical extracts.",
# #     size: "6.8 fl oz",
# #     price: 27.00,
# #     key_ingredients: "Rose Petal, Cardamom, Black Pepper",
# #     how_to_use: "Dispense into hands or onto a sea sponge. Massage onto soaked skin from neck to toe, then rinse thoroughly.",
# #     dosage: "As needed",
# #     texture: "Clear, low-foaming gel",
# #     aroma: "Floral, spicy, warm",
# #     skin_feel: "Warmed, cleansed, fresh"
# # )

# # a_rose_by_any_other_name_body_cleanser_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Body-Rose.png");
# # a_rose_by_any_other_name_body_cleanser.photos.attach(io: a_rose_by_any_other_name_body_cleanser_attachment, filename: "Body-Rose.png");


resurrection_aromatique_hand_balm_red =  Product.create!(
    name: "Resurrection Aromatique Hand Balm",
    category: "bodyandhand",
    sub_category: "Hand",
    description: "A blend of fragrant botanicals and skin-softening emollients that delivers rich hydration to labour-wearied hands and cuticles.",
    size: "2.6 oz",
    price: 30.00,
    key_ingredients: "Mandarin Rind, Rosemary Leaf, Cedar Atlas",
    how_to_use: "Apply to clean hands as often as desired, paying close attention to cuticles.",
    dosage: "Half teaspoon",
    texture: "Medium-weight cream",
    aroma: "Citrus, woody, herbaceous",
    skin_feel: "Nourished, supple, with a grease-less finish"
)

resurrection_aromatique_hand_balm_red_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hand-Balm-again.png");
resurrection_aromatique_hand_balm_red.photos.attach(io: resurrection_aromatique_hand_balm_red_attachment, filename: "Hand-Balm-again.png");


resurrection_aromatique_hand_balm =  Product.create!(
    name: "Reverence Aromatique Hand Balm",
    category: "bodyandhand",
    sub_category: "Hand",
    description: "A rich, skin-softening balm containing carefully selected emollient ingredients, including Potassium Lactate, to soften the skin and provide sustained hydration.",
    size: "2.6 oz",
    price: 30.00,
    key_ingredients: "Bergamot Rind, Vetiver Root, Petitgrain",
    how_to_use: "Apply to clean hands as often as desired, paying close attention to cuticles.",
    dosage: "Half teaspoon",
    texture: "Concentrated cream",
    aroma: "Woody, earthy, smoky",
    skin_feel: "Exceptionally soft with a greaseless finish"
)

resurrection_aromatique_hand_balm_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hand-Blue-again.png");
resurrection_aromatique_hand_balm.photos.attach(io: resurrection_aromatique_hand_balm_attachment, filename: "Hand-Blue-again.png");



# reverence_aromatique_hand_wash =  Product.create!(
#     name: "Reverence Aromatique Hand Wash",
#     category: "bodyandhand",
#     sub_category: "Hand",
#     description: "An unorthodox aromatic blend with botanical extracts and finely milled Pumice, to gently cleanse, exfoliate, and leave the hands smooth, purified, and refreshed.",
#     size: "16.9 fl oz",
#     price: 39.00,
#     key_ingredients: "Vetiver Root, Petitgrain, Bergamot Rind",
#     how_to_use: "Dispense into damp hands, lather, then rinse thoroughly.",
#     dosage: "Single pump",
#     texture: "Opaque, fine-grain gel",
#     aroma: "Woody, earthy, smoky",
#     skin_feel: "Thoroughly cleansed, polished, supple"
# )

# reverence_aromatique_hand_wash_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Hand-Wash.png");
# reverence_aromatique_hand_wash.photos.attach(io: reverence_aromatique_hand_wash_attachment, filename: "Hand-Wash.png");


# # //////////////////////////////////// Hair


# volumising_conditioner =  Product.create!(
#     name: "Volumising Conditioner",
#     category: "Hair",
#     sub_category: "Condition",
#     description: "A volume-lending blend of Polyquaternium-67 which lifts and separates hair shafts without unwanted build-up boosted with hydrating, hair-softening botanical oils.",
#     size: "17 oz",
#     price: 45.00,
#     key_ingredients: "Bergamot Rind, Polyquaternium-67, Fennel Seed",
#     suited_to: "Fine, flat or limp hair",
#     how_to_use: "Expel excess water from hair after shampooing. Dispense product into hands and apply to mid-lengths and ends of hair. Use a wide-toothed comb to ensure even distribution. Leave for two to three minutes before rinsing thoroughly.",
#     dosage: "One to two teaspoons, more for longer hair lengths",
#     texture: "Lightweight cream",
#     aroma: "Mint, herbaceous",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# volumising_conditioner_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Condition-Volume.png");
# volumising_conditioner.photos.attach(io: volumising_conditioner_attachment, filename: "Condition-Volume.png");


# nurturing_conditioner =  Product.create!(
#     name: "Nurturing Conditioner",
#     category: "Hair",
#     sub_category: "Condition",
#     description: "A nourishing treatment enhanced with shea butter and Vitamin E that hydrates and tames belligerent hair to leave it glossy and remarkably soft.",
#     size: "17 oz",
#     price: 45.00,
#     key_ingredients: "Tocopherol, Sweet Almond, Shea Butter",
#     suited_to: "Dry, stressed, chemically treated hair",
#     how_to_use: "Expel excess water from hair after shampooing. Dispense product into hands and apply to mid-lengths and ends of hair. Use a wide-toothed comb to ensure even distribution. Leave for two to three minutes before rinsing thoroughly.",
#     dosage: "One to two teaspoons, more for longer hair lengths",
#     texture: "Lightweight cream",
#     aroma: "Mint, herbaceous, nutty",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# nurturing_conditioner_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Condition-Nurture.png");
# nurturing_conditioner.photos.attach(io: nurturing_conditioner_attachment, filename: "Condition-Nurture.png");


# classic_conditioner =  Product.create!(
#     name: "Classic Conditioner",
#     category: "Hair",
#     sub_category: "Condition",
#     description: "Botanical oils with impressive hydrating and hair-softening properties blend with Hydrolysed Vegetable Protein to lightly nourish, hydrate, disentangle and smooth hair.",
#     size: "17 oz",
#     price: 45.00,
#     key_ingredients: "Bergamot Mint, Cedarwood Bark, Lavender Stem",
#     suited_to: "Most hair types, those who wash their hair frequently",
#     how_to_use: "Expel excess water from hair after shampooing. Dispense product into hands and apply to mid-lengths and ends of hair. Use a wide-toothed comb to ensure even distribution. Leave for two to three minutes before rinsing thoroughly.",
#     dosage: "One to two teaspoons, more for longer hair lengths",
#     texture: "Lightweight cream",
#     aroma: "Camphorous, herbaceous, fresh",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# classic_conditioner_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Condition-Classic.png");
# classic_conditioner.photos.attach(io: classic_conditioner_attachment, filename: "Condition-Classic.png");


# equalising_shampoo =  Product.create!(
#     name: "Equalising Shampoo",
#     category: "Hair",
#     sub_category: "Cleanse",
#     description: "A balancing formulation of gently astringent botanicals that assist to remove excess oil without irritating the scalp, while delivering body and shine to hair.",
#     size: "6.8 fl oz",
#     price: 27.00,
#     key_ingredients: "Fennel Fruit, Eucalyptus Leaf, Mistletoe Leaf",
#     suited_to: "Oily scalps, those who lead active lifestyles and those who live in polluted urban environments",
#     how_to_use: "Three to five times weekly, prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
#     dosage: "One to two teaspoons",
#     texture: "Clear, low-foaming gel",
#     aroma: "Camphorous, herbaceous, fresh",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# equalising_shampoo_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Cleanse-Equal.png");
# equalising_shampoo.photos.attach(io: equalising_shampoo_attachment, filename: "Cleanse-Equal.png");


# colour_protection_shampoo =  Product.create!(
#     name: "Colour Protection Shampoo",
#     category: "Hair",
#     sub_category: "Cleanse",
#     description: "A sulphate-free blend that cleanses hair gently without stripping colour. Hydrolyzed Oats and nourishing Provitamin B5 replenish and soften hair.",
#     size: "16.9 fl oz",
#     price: 45.00,
#     key_ingredients: "Tangerine Rind, Panthenol, Hydrolyzed Oats",
#     suited_to: "Salon-treated, coloured hair",
#     how_to_use: "Three to five times weekly, prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
#     dosage: "One teaspoon",
#     texture: "Low-foaming clear gel",
#     aroma: "Mint, herbaceous, nutty",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# colour_protection_shampoo_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Cleanse-Colour.png");
# colour_protection_shampoo.photos.attach(io: colour_protection_shampoo_attachment, filename: "Cleanse-Colour.png");


# nurturing_shampoo =  Product.create!(
#     name: "Nurturing Shampoo",
#     category: "Hair",
#     sub_category: "Cleanse",
#     description: "A blend of nourishing and conditioning botanical extracts including Borage and Grape Seed Oils, hydrate and tame hair to leave it glossy and soft.",
#     size: "16.9 fl oz",
#     price: 45.00,
#     key_ingredients: "Grape Seed, Borage Seed, Fennel Seed",
#     suited_to: "Dry or flaky scalps; dry, damaged, belligerent hair",
#     how_to_use: "Three to five times weekly, prior to shampooing, brush dry hair to loosen dirt and disentangle. Wet hair thoroughly, pour product into hands, then gently massage onto scalp. Rinse thoroughly.",
#     dosage: "One to two teaspoons",
#     texture: "Creamy, low-foaming gel",
#     aroma: "Mint, herbaceous, nutty",
#     scalp_type: "Normal",
#     hair_type: "Normal"
# )

# nurturing_shampoo_attachment = open("https://aesop-dev.s3-us-west-1.amazonaws.com/Cleanse-Nurture.png");
# nurturing_shampoo.photos.attach(io: nurturing_shampoo_attachment, filename: "Cleanse-Nurture.png");



# # in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# # in_two_minds_facial_cleanser =  Product.create!(
# #     name: "In Two Minds Facial Cleanser",
# #     category: "Skin",
# #     sub_category: "Cleanse",
# #     description: "",
# #     size: "",
# #     price: 35.00,
# #     key_ingredients: "",
# #     how_to_use: "",
# #     dosage: "",
# #     texture: "",
# #     aroma: "",
# #     suited_to: "",
# #     skin_feel: "",
# #     skin_type: "Dry",
# #     skin_concern: "Sensitive"
# # )

# # in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# # in_two_minds_facial_cleanser =  Product.create!(
# #     name: "In Two Minds Facial Cleanser",
# #     category: "Skin",
# #     sub_category: "Cleanse",
# #     description: "",
# #     size: "",
# #     price: 35.00,
# #     key_ingredients: "",
# #     how_to_use: "",
# #     dosage: "",
# #     texture: "",
# #     aroma: "",
# #     suited_to: "",
# #     skin_feel: "",
# #     skin_type: "Dry",
# #     skin_concern: "Sensitive"
# # )

# # in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


# # in_two_minds_facial_cleanser =  Product.create!(
# #     name: "In Two Minds Facial Cleanser",
# #     category: "Skin",
# #     sub_category: "Cleanse",
# #     description: "",
# #     size: "",
# #     price: 35.00,
# #     key_ingredients: "",
# #     how_to_use: "",
# #     dosage: "",
# #     texture: "",
# #     aroma: "",
# #     suited_to: "",
# #     skin_feel: "",
# #     skin_type: "Dry",
# #     skin_concern: "Sensitive"
# # )

# # in_two_minds_facial_cleanser_attachment = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser_attachment_second = File.open("/Users/kellyku/Desktop/aesopimages/Skin/Hydrate-Immediate-2.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: gentle_facial_cleansing_milk_attachment, filename: "Hydrate-Immediate.jpg");
# # in_two_minds_facial_cleanser.photos.attach(io: in_two_minds_facial_cleanser_attachment_second, filename: "Hydrate-Immediate-2.jpg");


#     # name:
#     # category:
#     # sub_category:
#     # description:
#     # size:
#     # price:
#     # key_ingredients:
#     # how_to_use:
#     # dosage:
#     # texture:
#     # aroma:
#     # suited_to:
#     # skin_feel:
#     # skin_type:
#     # skin_concern:
#     # scalp_type:
#     # hair_type:
#     # application:
#     # scent_profile:
#     # about_this_kit: