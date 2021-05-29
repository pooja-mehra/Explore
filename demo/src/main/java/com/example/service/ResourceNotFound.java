package com.example.service;

import org.springframework.stereotype.Service;

@Service
public class ResourceNotFound extends RuntimeException {
	public ResourceNotFound() {
		super();
	}
	public ResourceNotFound(String message) {
        super(message);
    }
	public String getMessage(String Message,String zipCode){
		return Message + zipCode;
		
	}
}
