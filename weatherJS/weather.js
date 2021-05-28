class Weather {
    constructor(city, country) {
        this.apiKey = '9afb035affa13970a4246f74ec4cb5b7';
        this.city = city;
        this.country = country;
    }

    // Fetch weatther from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}