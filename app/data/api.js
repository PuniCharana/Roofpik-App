var api = {

    getProjects(params) {

        let esc = encodeURIComponent

        let query = Object.keys(params)
             .map(k => esc(k) + '=' + esc(params[k]))
             .join('&')

        var endPoint = "http://139.162.9.71/api/v1/projectFilter?"+query;
        console.log(endPoint, params)
        return fetch(endPoint, params).then((response) => response.json());
    },
    getProjectDetails(params) {
        let esc = encodeURIComponent

        let query = Object.keys(params)
             .map(k => esc(k) + '=' + esc(params[k]))
             .join('&')
        
        var endPoint = "http://139.162.9.71/api/v1/projectDetails?"+query;
        console.log(endPoint)
        return fetch(endPoint).then((response) => response.json());
    },
    getProjectReviews(params) {
        let esc = encodeURIComponent

        let query = Object.keys(params)
             .map(k => esc(k) + '=' + esc(params[k]))
             .join('&')
        

        var endPoint = "http://139.162.9.71/api/v1/reviewSearch?"+query
        console.log(endPoint, params)
        return fetch(endPoint).then((response) => response.json());
    },
    searchProjects(queryText) {
        var endPoint = "http://139.162.9.71/api/v1/mainSearch?val="+queryText;
        console.log(endPoint, queryText)
        return fetch(endPoint).then((response) => response.json());
    },
    getChannelPartners() {
        return [
            {
                id: 1,
                title: "Brokers",
                thumbnail: "http://www.roofpik.com/images/v1/business/broker.png"
            },
            {
                id: 2,
                title: "Furniture Rental",
                thumbnail: "http://www.roofpik.com/images/v1/business/furniture-rental.png"
            },
            {
                id: 3,
                title: "Movers and Packers",
                thumbnail: "http://www.roofpik.com/images/v1/business/packers.png"
            },
            {
                id: 4,
                title: "Interior Designers",
                thumbnail: "http://www.roofpik.com/images/v1/business/interior.png"
            },
            {
                id: 5,
                title: "Home Services",
                thumbnail: "http://www.roofpik.com/images/v1/business/home-related.png"
            }
        ]
    },
    getCouponPartners() {
        return [
            {
                id: 1,
                title: "Restaurants",
                thumbnail: "http://www.roofpik.com/images/v1/business/restaurant.png"
            },
            {
                id: 2,
                title: "Shopping Outlets",
                thumbnail: "http://www.roofpik.com/images/v1/business/shopping.png"
            },
            {
                id: 3,
                title: "Gyms",
                thumbnail: "http://www.roofpik.com/images/v1/business/gym.png"
            },
            {
                id: 4,
                title: "Beauty Salons",
                thumbnail: "http://www.roofpik.com/images/v1/business/salon.png"
            },
            {
                id: 5,
                title: "Ecommerce",
                thumbnail: "http://www.roofpik.com/images/v1/business/ecommerce.png"
            }
        ]
    },
    getWhyPartners() {
        return [
            {
                id: 1,
                title: "Information Platform for Projects & Localities:",
                subTitle: "Showcase readily available validated project information with customer reviews and real project pictures",
                thumbnail: "http://www.roofpik.com/images/v1/business/information.jpg",
            },
            {
                id: 2,
                title: "Improving Credibility:",
                subTitle: "A platform for you to get rated by customers for building trust with new customers",
                thumbnail: "http://www.roofpik.com/images/v1/business/credibility.jpg",
            },
            {
                id: 3,
                title: "Preferred Partner Program:",
                subTitle: "Maximise your reach by featuring on top of the list with our preferred partner program for selected projects and localities. (Minimum Customer Rating Standards to me Met)",
                thumbnail: "http://www.roofpik.com/images/v1/business/partner.jpg",
            },
            {
                id: 4,
                title: "Analytics:",
                subTitle: "Get insights about the most in demand projects, localities, sentiment and price trend analysis",
                thumbnail: "http://www.roofpik.com/images/v1/business/analytics.jpg",
            }
        ]
    },
    getRoofpikServicesData() {
        return [
            {
                id: 1,
                color: "#FF5722",
                icon: "md-quote",
                title: "Reviews",
                description: "Real residents and owners are sharing positive and negative experiences about their property on Roofpik.com. Let them tell you what it is like to live in a project."
            },
            {
                id: 2,
                color: "#00BCD4",
                icon: "md-text",
                title: "Resident Stories",
                description: "Read real experiences of people about their property and their detailed insights about the project."
            },
            {
                id: 3,
                color: "#FFEB3B",
                icon: "md-information-circle",
                title: "Project Information",
                description: "Valldated project information with comparisons, price trends, photos etc."
            },
            {
                id: 4,
                color: "#26a69a",
                icon: "md-map",
                title: "NearBy",
                description: "Know your nearby schools, markets, hospitals etc."
            },
            {
                id: 5,
                color: "#9C27B0",
                icon: "md-people",
                title: "Listed Partners",
                description: "Connect with verified dealers such as Brokers, Movers&Packers, Rental Furnitures etc."
            }
        ]
    }
}

module.exports = api;