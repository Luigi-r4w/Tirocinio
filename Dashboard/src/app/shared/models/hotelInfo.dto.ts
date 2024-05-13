export class HotelInfoDto {


    private hotel_name: string = '';
    private address: string = '';
    private city: string = '';
    private zip: string = '';
    private country_trans : string = '';
    private timezone : string = '';
    private currency_code: string = '';
    private url : string = '';

        constructor(hotel_name: string = '', address: string = '', city: string = '', zip: string ='', country_trans: string='', timezone: string='', currency_code: string='', url: string='') {
            this.hotel_name = hotel_name;
            this.address = address;
            this.city = city;
            this.zip = zip;
            this.country_trans = country_trans;
            this.timezone = timezone;
            this.currency_code = currency_code;
            this.url = url;
        }
    
        getHotelname() {
            return this.hotel_name;
        }
    
        setHotelname(value: string) {
            this.hotel_name = value;
        }
    
        getAddress() {
            return this.address;
        }
    
        setAddress(value: string) {
            this.address = value;
        }
    
        getCity() {
            return this.city;
        }
    
        setCity(city: string) {
            this.city = city;
        }
    
        getZip() {
            return this.zip;
        }
    
        setZip(zip: string) {
            this.zip = zip;
        }
    
        getCountry_trans() {
            return this.country_trans;
        }
    
        setCountry_trans(country_trans: string) {
            this.country_trans = country_trans;
        }
    
        getTimezone() {
            return this.timezone;
        }
    
        setTimezone(timezone: string) {
            this.timezone = timezone;
        }
    
        getCurrency_code() {
            return this.currency_code;
        }
    
        setCurrency_code(currency_code: string) {
            this.currency_code = currency_code;
        }
    
        getUrl() {
            return this.url;
        }
    
        setUrl(url: string) {
            this.url = url;
        }
    }
    
    

