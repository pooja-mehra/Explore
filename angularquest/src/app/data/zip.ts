export class Zip {
	zipCode!:string
	country!:string;
	countryAbb!:string;
	places!:any;
	errorMessage!:string;
	error:any;
	Contructor(zipCode: string, country:string,places:any,countryAbb:string,errorMessage:string){
		this.country = country;
		this.places = places;
		this.countryAbb = countryAbb;
		this.zipCode=zipCode;
		this.errorMessage=errorMessage;
	}
	
}

