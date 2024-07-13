const service = require('../service/index')

exports.getBasicInfo = async (req,res,next) =>{
    try {
        const response = await service.findBasicInfo();
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllSkills = async (req,res,next) =>{
    try {
        const response = await service.findAllSkills();
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllProjects = async (req,res,next) =>{
    try {
        const response = await service.findAllProjects();
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllExperience = async (req,res,next) =>{
    try {
        const response = await service.findAllExperience();
        return res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.sendContactDetails = async (req,res,next) => {
    try {


        let arr = [];
        for(let i=0;i<80000;i++){
            arr.push(i.toString()   );
        }

        let p = ['8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501','8904417311501']
        let products =[
            {
                "id": 1147,
                "tier_prices": [],
                "avg_rating_percent": "99",
                "categories": [
                2,
                18,
                154,
                218,
                267,
                31,
                333,
                52
                ],
                "hide_in_front": 0,
                "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                "imageAltTags": [
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen",
                "Vitamin C Daily Glow Sunscreen"
                ],
                "is_in_stock": true,
                "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                "position": "0",
                "price": "449.00",
                "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                "review_count": "77",
                "sku": "8904417311501",
                "special_price": "386.00",
                "special_price_from_date": {
                "date": "2023-10-19 23:19:00.000000",
                "timezone_type": 3,
                "timezone": "Asia/Kolkata"
                },
                "tags": "Best-Seller",
                "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                "size": "80gm",
                "unitPrice": "4.83/gm",
                "old_productid": "1146"
            },
                {
                    "id": 1147,
                    "tier_prices": [],
                    "avg_rating_percent": "99",
                    "categories": [
                    2,
                    18,
                    154,
                    218,
                    267,
                    31,
                    333,
                    52
                    ],
                    "hide_in_front": 0,
                    "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                    "imageAltTags": [
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen",
                    "Vitamin C Daily Glow Sunscreen"
                    ],
                    "is_in_stock": true,
                    "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                    "position": "0",
                    "price": "449.00",
                    "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                    "review_count": "77",
                    "sku": "8904417311501",
                    "special_price": "386.00",
                    "special_price_from_date": {
                    "date": "2023-10-19 23:19:00.000000",
                    "timezone_type": 3,
                    "timezone": "Asia/Kolkata"
                    },
                    "tags": "Best-Seller",
                    "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                    "size": "80gm",
                    "unitPrice": "4.83/gm",
                    "old_productid": "1146"
                },
                    {
                        "id": 1147,
                        "tier_prices": [],
                        "avg_rating_percent": "99",
                        "categories": [
                        2,
                        18,
                        154,
                        218,
                        267,
                        31,
                        333,
                        52
                        ],
                        "hide_in_front": 0,
                        "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                        "imageAltTags": [
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen",
                        "Vitamin C Daily Glow Sunscreen"
                        ],
                        "is_in_stock": true,
                        "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                        "position": "0",
                        "price": "449.00",
                        "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                        "review_count": "77",
                        "sku": "8904417311501",
                        "special_price": "386.00",
                        "special_price_from_date": {
                        "date": "2023-10-19 23:19:00.000000",
                        "timezone_type": 3,
                        "timezone": "Asia/Kolkata"
                        },
                        "tags": "Best-Seller",
                        "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                        "size": "80gm",
                        "unitPrice": "4.83/gm",
                        "old_productid": "1146"
                    },
                        {
                            "id": 1147,
                            "tier_prices": [],
                            "avg_rating_percent": "99",
                            "categories": [
                            2,
                            18,
                            154,
                            218,
                            267,
                            31,
                            333,
                            52
                            ],
                            "hide_in_front": 0,
                            "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                            "imageAltTags": [
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen"
                            ],
                            "is_in_stock": true,
                            "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                            "position": "0",
                            "price": "449.00",
                            "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                            "review_count": "77",
                            "sku": "8904417311501",
                            "special_price": "386.00",
                            "special_price_from_date": {
                            "date": "2023-10-19 23:19:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Kolkata"
                            },
                            "tags": "Best-Seller",
                            "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                            "size": "80gm",
                            "unitPrice": "4.83/gm",
                            "old_productid": "1146"
                        },
                        {
                            "id": 1147,
                            "tier_prices": [],
                            "avg_rating_percent": "99",
                            "categories": [
                            2,
                            18,
                            154,
                            218,
                            267,
                            31,
                            333,
                            52
                            ],
                            "hide_in_front": 0,
                            "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                            "imageAltTags": [
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen",
                            "Vitamin C Daily Glow Sunscreen"
                            ],
                            "is_in_stock": true,
                            "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                            "position": "0",
                            "price": "449.00",
                            "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                            "review_count": "77",
                            "sku": "8904417311501",
                            "special_price": "386.00",
                            "special_price_from_date": {
                            "date": "2023-10-19 23:19:00.000000",
                            "timezone_type": 3,
                            "timezone": "Asia/Kolkata"
                            },
                            "tags": "Best-Seller",
                            "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                            "size": "80gm",
                            "unitPrice": "4.83/gm",
                            "old_productid": "1146"
                        },
                            {
                                "id": 1147,
                                "tier_prices": [],
                                "avg_rating_percent": "99",
                                "categories": [
                                2,
                                18,
                                154,
                                218,
                                267,
                                31,
                                333,
                                52
                                ],
                                "hide_in_front": 0,
                                "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                "imageAltTags": [
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen",
                                "Vitamin C Daily Glow Sunscreen"
                                ],
                                "is_in_stock": true,
                                "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                "position": "0",
                                "price": "449.00",
                                "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                "review_count": "77",
                                "sku": "8904417311501",
                                "special_price": "386.00",
                                "special_price_from_date": {
                                "date": "2023-10-19 23:19:00.000000",
                                "timezone_type": 3,
                                "timezone": "Asia/Kolkata"
                                },
                                "tags": "Best-Seller",
                                "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                "size": "80gm",
                                "unitPrice": "4.83/gm",
                                "old_productid": "1146"
                            },
                                {
                                    "id": 1147,
                                    "tier_prices": [],
                                    "avg_rating_percent": "99",
                                    "categories": [
                                    2,
                                    18,
                                    154,
                                    218,
                                    267,
                                    31,
                                    333,
                                    52
                                    ],
                                    "hide_in_front": 0,
                                    "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                    "imageAltTags": [
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen",
                                    "Vitamin C Daily Glow Sunscreen"
                                    ],
                                    "is_in_stock": true,
                                    "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                    "position": "0",
                                    "price": "449.00",
                                    "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                    "review_count": "77",
                                    "sku": "8904417311501",
                                    "special_price": "386.00",
                                    "special_price_from_date": {
                                    "date": "2023-10-19 23:19:00.000000",
                                    "timezone_type": 3,
                                    "timezone": "Asia/Kolkata"
                                    },
                                    "tags": "Best-Seller",
                                    "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                    "size": "80gm",
                                    "unitPrice": "4.83/gm",
                                    "old_productid": "1146"
                                },
                                    {
                                        "id": 1147,
                                        "tier_prices": [],
                                        "avg_rating_percent": "99",
                                        "categories": [
                                        2,
                                        18,
                                        154,
                                        218,
                                        267,
                                        31,
                                        333,
                                        52
                                        ],
                                        "hide_in_front": 0,
                                        "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                        "imageAltTags": [
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen"
                                        ],
                                        "is_in_stock": true,
                                        "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                        "position": "0",
                                        "price": "449.00",
                                        "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                        "review_count": "77",
                                        "sku": "8904417311501",
                                        "special_price": "386.00",
                                        "special_price_from_date": {
                                        "date": "2023-10-19 23:19:00.000000",
                                        "timezone_type": 3,
                                        "timezone": "Asia/Kolkata"
                                        },
                                        "tags": "Best-Seller",
                                        "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                        "size": "80gm",
                                        "unitPrice": "4.83/gm",
                                        "old_productid": "1146"
                                    },
                                    {
                                        "id": 1147,
                                        "tier_prices": [],
                                        "avg_rating_percent": "99",
                                        "categories": [
                                        2,
                                        18,
                                        154,
                                        218,
                                        267,
                                        31,
                                        333,
                                        52
                                        ],
                                        "hide_in_front": 0,
                                        "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                        "imageAltTags": [
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen",
                                        "Vitamin C Daily Glow Sunscreen"
                                        ],
                                        "is_in_stock": true,
                                        "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                        "position": "0",
                                        "price": "449.00",
                                        "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                        "review_count": "77",
                                        "sku": "8904417311501",
                                        "special_price": "386.00",
                                        "special_price_from_date": {
                                        "date": "2023-10-19 23:19:00.000000",
                                        "timezone_type": 3,
                                        "timezone": "Asia/Kolkata"
                                        },
                                        "tags": "Best-Seller",
                                        "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                        "size": "80gm",
                                        "unitPrice": "4.83/gm",
                                        "old_productid": "1146"
                                    },
                                        {
                                            "id": 1147,
                                            "tier_prices": [],
                                            "avg_rating_percent": "99",
                                            "categories": [
                                            2,
                                            18,
                                            154,
                                            218,
                                            267,
                                            31,
                                            333,
                                            52
                                            ],
                                            "hide_in_front": 0,
                                            "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                            "imageAltTags": [
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen",
                                            "Vitamin C Daily Glow Sunscreen"
                                            ],
                                            "is_in_stock": true,
                                            "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                            "position": "0",
                                            "price": "449.00",
                                            "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                            "review_count": "77",
                                            "sku": "8904417311501",
                                            "special_price": "386.00",
                                            "special_price_from_date": {
                                            "date": "2023-10-19 23:19:00.000000",
                                            "timezone_type": 3,
                                            "timezone": "Asia/Kolkata"
                                            },
                                            "tags": "Best-Seller",
                                            "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                            "size": "80gm",
                                            "unitPrice": "4.83/gm",
                                            "old_productid": "1146"
                                        },
                                            {
                                                "id": 1147,
                                                "tier_prices": [],
                                                "avg_rating_percent": "99",
                                                "categories": [
                                                2,
                                                18,
                                                154,
                                                218,
                                                267,
                                                31,
                                                333,
                                                52
                                                ],
                                                "hide_in_front": 0,
                                                "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                                "imageAltTags": [
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen",
                                                "Vitamin C Daily Glow Sunscreen"
                                                ],
                                                "is_in_stock": true,
                                                "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                                "position": "0",
                                                "price": "449.00",
                                                "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                                "review_count": "77",
                                                "sku": "8904417311501",
                                                "special_price": "386.00",
                                                "special_price_from_date": {
                                                "date": "2023-10-19 23:19:00.000000",
                                                "timezone_type": 3,
                                                "timezone": "Asia/Kolkata"
                                                },
                                                "tags": "Best-Seller",
                                                "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                                "size": "80gm",
                                                "unitPrice": "4.83/gm",
                                                "old_productid": "1146"
                                            },
                                                {
                                                    "id": 1147,
                                                    "tier_prices": [],
                                                    "avg_rating_percent": "99",
                                                    "categories": [
                                                    2,
                                                    18,
                                                    154,
                                                    218,
                                                    267,
                                                    31,
                                                    333,
                                                    52
                                                    ],
                                                    "hide_in_front": 0,
                                                    "image": "/v/i/vit-c-glow-sunscreen1_2_1.jpg",
                                                    "imageAltTags": [
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen",
                                                    "Vitamin C Daily Glow Sunscreen"
                                                    ],
                                                    "is_in_stock": true,
                                                    "name": "Vitamin C Daily Glow Sunscreen With Vitamin C & Turmeric for Sun Protection & Glow - 80 g",
                                                    "position": "0",
                                                    "price": "449.00",
                                                    "product_card_tags": "SPF 50 & PA+++ Protection | Adds Natural Glow",
                                                    "review_count": "77",
                                                    "sku": "8904417311501",
                                                    "special_price": "386.00",
                                                    "special_price_from_date": {
                                                    "date": "2023-10-19 23:19:00.000000",
                                                    "timezone_type": 3,
                                                    "timezone": "Asia/Kolkata"
                                                    },
                                                    "tags": "Best-Seller",
                                                    "url_key": "vitamin-c-daily-glow-sunscreen-with-vitamin-c-turmeric-for-sun-protection-glow-80-g",
                                                    "size": "80gm",
                                                    "unitPrice": "4.83/gm",
                                                    "old_productid": "1146"
                                                }
        ] 
        return res.status(400).send({arr});

        const {name , email , message} = req.body;
        const response =  await service.sendContactEmail(name , email, message);
        if(response && response.status){
            return res.send(response);
        }
        return res.status(400).send(response);
    } catch (error) {
        console.log(error);
    }
}