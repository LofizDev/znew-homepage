import { NextResponse } from 'next/server';

export async function GET() {
    // Main News
    const mainNews = [
        {
            id: 1,
            title: 'Ministry of Public Security investigates Bamboo Capital case',
            image: 'https://images.unsplash.com/photo-1751837184233-b26fa8444e4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'The Ministry of Public Security has launched an investigation into financial irregularities at Bamboo Capital, a major Vietnamese investment company.'
        },
        {
            id: 2,
            title: 'Real Madrid faces dilemma with Endrick transfer',
            image: 'https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Real Madrid is struggling with the future of young Brazilian talent Endrick, who is being linked with a potential move to rival Barcelona.'
        },
        {
            id: 3,
            title: 'Jun Pham clarifies charity program involvement',
            image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Vietnamese actor Jun Pham has clarified that the laptop purchase and tuition fees for highland families in the Gia đình Haha program were not funded solely by him. The actor explained that the charitable initiative was a collaborative effort involving multiple sponsors and donors. He emphasized that while he played a significant role in organizing the program, the financial contributions came from various sources including corporate sponsors, individual donors, and his own personal contribution. The clarification came after social media speculation about the funding sources of the program, which has helped over 50 families in remote areas access education and technology resources.'
        },
        {
            id: 4,
            title: 'Government announces administrative restructuring plan',
            image: 'https://images.unsplash.com/photo-1743376272672-c130603a3af2?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'The Vietnamese government has announced plans to restructure administrative units, merging districts and reorganizing ward boundaries in major cities.'
        },
        {
            id: 5,
            title: 'Vietnam Airlines flight makes emergency landing in India',
            image: 'https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'A Vietnam Airlines flight was forced to make an emergency landing at Mumbai airport due to technical issues during the journey.'
        },
        {
            id: 6,
            title: 'Chinese trade flows shift direction in Southeast Asia',
            image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Vietnamese actor Jun Pham has clarified that the laptop purchase and education and technology resources.'
        },
        {
            id: 7,
            title: 'New regulations impact foreign investment in Vietnam',
            image: 'https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Vietnamese actor Jun Pham has clarified that the laptop purchase and tuition fees for highland families in the Gia đình Haha program were not funded solely by him. The actor explained that the charitable initiative was a collaborative effort involving multiple sponsors and donors. He emphasized that while he played a significant role in organizing the program, the financial contributions came from various sources including corporate sponsors'
        },
        {
            id: 8,
            title: 'Vietnam\'s tech startup ecosystem reaches new milestone',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Vietnam\'s technology startup ecosystem has achieved a significant milestone with over 1,000 active startups and $1.5 billion in total funding raised in 2024. The sector has seen remarkable growth in fintech, e-commerce, and edtech startups, with several companies reaching unicorn status. Government support through favorable policies and increased venture capital interest from international investors have contributed to this rapid expansion. Industry experts predict continued growth as Vietnam positions itself as a key technology hub in Southeast Asia.'
        },
        {
            id: 9,
            title: 'Major infrastructure project connects northern and southern Vietnam',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'A landmark infrastructure project has been completed, creating a high-speed transportation corridor connecting northern and southern Vietnam. The $8.5 billion project includes modern highways, railway upgrades, and smart traffic management systems. This development is expected to reduce travel time between Hanoi and Ho Chi Minh City by 40% and boost economic integration between regions. The project also incorporates sustainable design elements and renewable energy solutions, positioning Vietnam as a leader in green infrastructure development in Southeast Asia.'
        },
    ];

    // Trending Tags
    const trendingTags = [
        'FIFA Club World Cup 2025',
        'Famous people advertising fake goods',
        'Merging provinces and cities',
    ]

    // Books Popular
    const books = [
        {
            id: 101,
            title: 'The Art of Vietnamese Cuisine',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 102,
            title: 'Modern Vietnam: A Cultural Journey',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 103,
            title: 'Startup Success in Southeast Asia',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 104,
            title: 'Traditional Vietnamese Architecture',
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 105,
            title: 'Digital Transformation in Vietnam',
            image: 'https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 106,
            title: 'Vietnamese Literature Classics',
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 107,
            title: 'Sustainable Development in Asia',
            image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 108,
            title: 'The History of Vietnamese Music',
            image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 109,
            title: 'Business Innovation in Vietnam',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 110,
            title: 'Vietnamese Art Through the Ages',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 112,
            title: 'Cultural Heritage of Vietnam',
            image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    // Multimedia Tags
    const multipleTags = ['VIDEO', 'PODCAST', 'LONGFORM', 'STORY', 'QUIZZ'];

    const multimedia = [
        {
            id: 201,
            title: 'The Rise of Vietnamese Startups',
            image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Discover how Vietnam\'s startup ecosystem is rapidly evolving, with innovative companies emerging across fintech, e-commerce, and edtech sectors. This comprehensive'
        },
        {
            id: 205,
            title: 'Vietnamese Art and Contemporary Culture',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Discover the dynamic world of Vietnamese contemporary art and cultural expression. From traditional crafts to modern installations, this exploration reveals how Vietnamese artists are bridging heritage and innovation in their creative works.'
        },
        {
            id: 2,
            title: 'Real Madrid faces dilemma with Endrick transfer',
            image: 'https://images.unsplash.com/photo-1750785328656-eb4c9942e58f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Real Madrid is struggling with the future of young Brazilian talent Endrick, who is being linked with a potential move to rival Barcelona.'
        },
        {
            id: 203,
            title: 'Vietnam\'s Natural Wonders and Landscapes',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Journey through Vietnam\'s breathtaking natural landscapes, from the terraced rice fields of Sapa to the pristine beaches of Phu Quoc. This visual exploration showcases the country\'s diverse geography and stunning natural beauty.'
        },
        {
            id: 204,
            title: 'Smart Cities: Vietnam\'s Urban Innovation',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            summary: 'Witness the transformation of Vietnam\'s major cities through smart technology integration. From intelligent transportation systems to digital government services, explore how urban innovation is reshaping the future of Vietnamese cities.'
        },
    ]

    // News Spotlight
    const newsSpotlight = {
        mainNews: [
            {
                id: 301,
                title: 'Vietnam\'s Digital Economy Reaches New Heights',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s digital economy has achieved remarkable growth, with e-commerce platforms and fintech services driving unprecedented adoption rates across the country.'
            },
            {
                id: 8,
                title: 'Vietnam\'s tech startup ecosystem reaches new milestone',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s technology startup ecosystem has achieved a significant milestone with over 1,000 active startups and $1.5 billion in total funding raised in 2024. The sector has seen remarkable growth in fintech, e-commerce, and edtech startups, with several companies reaching unicorn status. Government support through favorable policies and increased venture capital interest from international investors have contributed to this rapid expansion. Industry experts predict continued growth as Vietnam positions itself as a key technology hub in Southeast Asia.'
            },
            {
                id: 9,
                title: 'Major infrastructure project connects northern and southern Vietnam',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'A landmark infrastructure project has been completed, creating a high-speed transportation corridor connecting northern and southern Vietnam. The $8.5 billion project includes modern highways, railway upgrades, and smart traffic management systems. This development is expected to reduce travel time between Hanoi and Ho Chi Minh City by 40% and boost economic integration between regions. The project also incorporates sustainable design elements and renewable energy solutions, positioning Vietnam as a leader in green infrastructure development in Southeast Asia.'
            },
            {
                id: 302,
                title: 'Major Infrastructure Project Connects Northern and Southern Vietnam',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'A landmark infrastructure project has been completed, creating a high-speed transportation corridor that reduces travel time between major cities by 40%.'
            },
            {
                id: 303,
                title: 'Vietnamese Startups Attract Record Investment',
                image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnamese startups have secured over $1.5 billion in funding this year, with fintech and e-commerce sectors leading the investment surge.'
            },
            {
                id: 306,
                title: 'Smart Agriculture Technology Transforms Farming',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Advanced agricultural technologies are revolutionizing Vietnam\'s farming sector, with IoT sensors and AI-powered systems increasing crop yields and sustainability.'
            },
            {
                id: 307,
                title: 'Vietnam\'s Education System Goes Digital',
                image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Digital transformation is sweeping through Vietnam\'s education sector, with online learning platforms and virtual classrooms becoming the new normal.'
            },
            {
                id: 308,
                title: 'Tourism Innovation: Vietnam\'s Smart Travel Solutions',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s tourism industry is embracing smart technology, with digital booking systems and AI-powered travel recommendations enhancing visitor experiences.'
            },
        ],
        mostRead: [
            {
                id: 401,
                title: 'New Environmental Regulations Impact Manufacturing Sector',
                image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Recent environmental regulations are expected to significantly impact Vietnam\'s manufacturing sector, with companies adapting to new sustainability requirements.'
            },
            {
                id: 402,
                title: 'Tourism Recovery Exceeds Pre-Pandemic Levels',
                image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s tourism sector has fully recovered from the pandemic, with visitor numbers exceeding 2019 levels and new destinations gaining popularity.'
            },
            {
                id: 8,
                title: 'Vietnam\'s tech startup ecosystem reaches new milestone',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s technology startup ecosystem has achieved a significant milestone with over 1,000 active startups and $1.5 billion in total funding raised in 2024. The sector has seen remarkable growth in fintech, e-commerce, and edtech startups, with several companies reaching unicorn status. Government support through favorable policies and increased venture capital interest from international investors have contributed to this rapid expansion. Industry experts predict continued growth as Vietnam positions itself as a key technology hub in Southeast Asia.'
            },
            {
                id: 9,
                title: 'Major infrastructure project connects northern and southern Vietnam',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'A landmark infrastructure project has been completed, creating a high-speed transportation corridor connecting northern and southern Vietnam. The $8.5 billion project includes modern highways, railway upgrades, and smart traffic management systems. This development is expected to reduce travel time between Hanoi and Ho Chi Minh City by 40% and boost economic integration between regions. The project also incorporates sustainable design elements and renewable energy solutions, positioning Vietnam as a leader in green infrastructure development in Southeast Asia.'
            },
        ],
        podcasts: [
            {
                id: 304,
                title: 'Cultural Festival Celebrates Vietnam\'s Rich Heritage',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'A month-long cultural festival showcasing Vietnam\'s traditional arts, music, and cuisine has attracted visitors from around the world.'
            },
            {
                id: 305,
                title: 'Vietnam\'s Renewable Energy Revolution',
                image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam is rapidly expanding its renewable energy capacity, with solar and wind power projects transforming the country\'s energy landscape and reducing carbon emissions.'
            },
            {
                id: 8,
                title: 'Vietnam\'s tech startup ecosystem reaches new milestone',
                image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Vietnam\'s technology startup ecosystem has achieved a significant milestone with over 1,000 active startups and $1.5 billion in total funding raised in 2024. The sector has seen remarkable growth in fintech, e-commerce, and edtech startups, with several companies reaching unicorn status. Government support through favorable policies and increased venture capital interest from international investors have contributed to this rapid expansion. Industry experts predict continued growth as Vietnam positions itself as a key technology hub in Southeast Asia.'
            },
            {
                id: 9,
                title: 'Major infrastructure project connects northern and southern Vietnam',
                image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'A landmark infrastructure project has been completed, creating a high-speed transportation corridor connecting northern and southern Vietnam. The $8.5 billion project includes modern highways, railway upgrades, and smart traffic management systems. This development is expected to reduce travel time between Hanoi and Ho Chi Minh City by 40% and boost economic integration between regions. The project also incorporates sustainable design elements and renewable energy solutions, positioning Vietnam as a leader in green infrastructure development in Southeast Asia.'
            },
        ],
        sponsors: [
            {
                id: 601,
                title: 'Innovation Hub: Vietnam\'s Tech Transformation',
                image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Sponsored by TechViet - Discover how Vietnam is becoming a leading technology hub in Southeast Asia, with innovative startups and digital solutions reshaping the country\'s economic landscape.'
            },
            {
                id: 602,
                title: 'Cultural Heritage: Preserving Vietnam\'s Traditions',
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                summary: 'Sponsored by HeritageViet - Explore Vietnam\'s rich cultural traditions and how modern society is preserving and celebrating the country\'s unique heritage for future generations.'
            },
        ]
    }

    // Category News
    const categoryNews = [
        {
            category: "BUSINESS",
            main: {
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Vietnam's Manufacturing Sector Shows Strong Growth",
                summary: "Vietnam's manufacturing sector has demonstrated remarkable resilience and growth, with export-oriented industries leading the economic recovery and attracting significant foreign investment."
            },
            secondary: [
                {
                    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Vietnam Airlines Expands International Routes"
                },
                {
                    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Digital Payment Adoption Surges in Vietnam"
                }
            ],
            list: [
                {
                    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Foreign Investment in Vietnam Reaches Record High"
                },
                {
                    image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Vietnam's Export Growth Exceeds Expectations"
                },
                {
                    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "New Business Regulations Support Startup Ecosystem"
                },
                {
                    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Vietnam's Banking Sector Embraces Digital Transformation"
                },
                {
                    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Real Estate Market Shows Signs of Recovery"
                }
            ]
        },
        {
            category: "LIFESTYLE",
            main: {
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Vietnamese Cuisine Gains Global Recognition",
                summary: "Vietnamese cuisine is receiving international acclaim, with traditional dishes being reimagined by innovative chefs and gaining popularity in global food markets."
            },
            secondary: [
                {
                    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Fashion Trends: Vietnamese Designers Go Global"
                },
                {
                    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Wellness Tourism Booms in Vietnam"
                }
            ],
            list: [
                {
                    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Vietnamese Coffee Culture Takes Center Stage"
                },
                {
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Digital Nomads Flock to Vietnam's Cities"
                },
                {
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Traditional Crafts Revival in Modern Vietnam"
                },

                {
                    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Vietnamese Street Food Culture Goes Digital"
                }
            ]
        }
    ]

    // Category Grid
    const categoryGrid = [
        {
            name: 'Technology',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: "Apple Faces New Competition from Meta's Latest Innovation",
                },
                {
                    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: "AI-Powered Security Technology",
                },
                {
                    image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: "Advanced Surveillance Systems Rais",
                },
            ],
        },
        {
            name: 'Health',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'New Study Reveals Benefits of Mediterranean Diet for Heart Health',
                },
                {
                    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Iron Deficiency Anemia: A Growing Health Concern',
                },
                {
                    image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Early Detection of Eye Conditions Prevents',
                },
            ],
        },
        {
            name: 'Lifestyle',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Innovative Workplace Designs Transform Modern Office Culture',
                },
                {
                    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Rare White Tiger at Zoo Captivates Visitors Worldwide',
                },
                {
                    image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Social Media Influencers Face Backlash Over',
                },
            ],
        },
        {
            name: 'Travel',
            articles: [
                {
                    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Aerial Photography Reveals Stunning Volcanic Landscapes',
                },
                {
                    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Chinese Tourists Flock to Japan Amid Earthquake',
                },
                {
                    image: 'https://images.unsplash.com/photo-1482329833197-916d32bdae74?q=80&w=1093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Rare Albino Turtle Born in Con Dao National Park',
                },
            ],
        },
    ]

    // Magazine
    const magazine = [
        {
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'LENS',
            title: "Rare Mermaid Sightings: Vietnam's Coastal ",
            icon: 'camera',
        },
        {
            image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'TL;DR',
            title: 'Unprecedented Events in Vietnam\'s ',
            icon: 'computer',
        },
        {
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'TL;DR',
            title: 'Iran\'s Missile Arsenal: The Heavy Card Against Israel',
            icon: 'computer',
        },
        {
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'LONGFORM',
            title: "'Vietnam Happiness Map' Assembled from Smiles",
            icon: 'book',
        },
        {
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'LENS',
            title: 'Traditional Vietnamese Crafts:',
            icon: 'camera',
        },
        {
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            label: 'TL;DR',
            title: 'Digital Transformation: Vietnam\'s ',
            icon: 'computer',
        },
    ]

    // Video Popular
    const videoPopular = [
        {
            id: 1,
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Rescue Operation on Red River: Dramatic River Rescue",
            category: "SOCIETY",
        },
        {
            id: 2,
            url: "https://www.w3schools.com/html/movie.mp4",
            thumb: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Ring Road 3 Construction: HCMC-Binh Duong Section Progress",
            category: "BUSINESS",
        },
        {
            id: 3,
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumb: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Bear on Runway: Japanese Airport Paralyzed for Hours",
            category: "WORLD",
        },
        {
            id: 4,
            url: "https://www.w3schools.com/html/movie.mp4",
            thumb: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "7,400 Military Personnel and Militia Train for A80 Mission",
            category: "SOCIETY",
        },
        {
            id: 5,
            url: "https://www.w3schools.com/html/movie.mp4",
            thumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Vietnam's Digital Economy: Tech Innovation Showcase",
            category: "TECHNOLOGY",
        },
        {
            id: 6,
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumb: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Traditional Vietnamese Cuisine: Street Food Culture",
            category: "LIFESTYLE",
        },
    ]

    return NextResponse.json({
        mainNews,
        books,
        trendingTags,
        multipleTags,
        multimedia,
        newsSpotlight,
        categoryNews,
        categoryGrid,
        magazine,
        videoPopular
    });
} 