package com.example.data;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class Zip{

	@Bean
	public RestTemplate myZip(RestTemplateBuilder builder) {
		return builder.build();
	}
}