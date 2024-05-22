package com.example.Server.dto;

import java.util.ArrayList;

public class HotelInfo {
    
        private String hotel_name;
        private String address;
        private String city;
        private String zip; // CAP
        private String country_trans;
        private String timezone;
        private String currency_code; //VALUTA
        private String url;
        private ArrayList<benefits> top_ufi_benefits;

        public ArrayList<benefits> getTop_ufi_benefits() {
            return top_ufi_benefits;
        }

        public void setTop_ufi_benefits(ArrayList<benefits> top_ufi_benefits) {
            this.top_ufi_benefits = top_ufi_benefits;
        }

        public String getHotel_name() {
            return hotel_name;
        }

        public void setHotel_name(String hotel_name) {
            this.hotel_name = hotel_name;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getZip() {
            return zip;
        }

        public void setZip(String zip) {
            this.zip = zip;
        }

        public String getCountry_trans() {
            return country_trans;
        }

        public void setCountry_trans(String country_trans) {
            this.country_trans = country_trans;
        }

        public String getTimezone() {
            return timezone;
        }

        public void setTimezone(String timezone) {
            this.timezone = timezone;
        }

        public String getCurrency_code() {
            return currency_code;
        }

        public void setCurrency_code(String currency_code) {
            this.currency_code = currency_code;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public class benefits {
        
            private String translated_name;

            public String getTranslated_name() {
                return translated_name;
            }

            public void setTranslated_name(String translated_name) {
                this.translated_name = translated_name;
            }
            
        }

}
