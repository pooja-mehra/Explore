package com.example.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import com.example.data.Quest;
import com.example.data.Topic;
import com.example.repository.QuestRepository;
import com.example.repository.TopicRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@Transactional
public class QuestServiceIMPL implements TopicRepository{
	private ResourceNotFound resourceNotFound;
	ObjectMapper mapper = new ObjectMapper();
	private final MongoTemplate mongoTemplate;
	public QuestRepository questRepo;
	@Autowired
	public RestTemplate restTemplate;
	
    
    @Autowired
    public QuestServiceIMPL(MongoTemplate mongoTemplate,QuestRepository questRepo,ResourceNotFound resourceNotFound) {
		this.mongoTemplate = mongoTemplate;
		this.questRepo = questRepo;
		this.resourceNotFound = resourceNotFound;
    }

	@Override
	public List<Topic> groupByTopics(){
		GroupOperation groupOperation = Aggregation.group("topic").push("problem").as("problem");
		Aggregation aggregation = Aggregation.newAggregation(groupOperation);
        AggregationResults<Topic> topicResult = mongoTemplate.aggregate(aggregation,Quest.class,Topic.class);
        return (topicResult.getMappedResults());
	}
	
	public Quest addQuest(Quest newQuest) {
		return questRepo.save(newQuest);
	}
	
	
	public String getZipDetails(String zip){
		final String zipURI = "https://api.zippopotam.us/us/"+zip;
		RestTemplate restTemplate = new RestTemplate();
	    Map<String,String> zipResult = new HashMap<>();
	    String zipJson;
	    try {
	    	zipResult = restTemplate.getForObject(zipURI,Map.class);
	    	zipResult.put( "countryAbb", zipResult.remove( "country abbreviation" ) );
	    	zipResult.put( "zipCode", zipResult.remove( "post code" ) );
		    try {
		    	zipJson = new ObjectMapper().writeValueAsString(zipResult);
				return zipJson;
			} catch (JsonProcessingException e1) {
				e1.printStackTrace();
			}
	    }catch(RuntimeException e) {
	    	String errorMessage = resourceNotFound.getMessage("Details not found for ", zip);
	    	zipResult.put("errorMessage", errorMessage);
	    	try {
	    		zipJson =  new ObjectMapper().writeValueAsString(zipResult);
				return zipJson;
			} catch (JsonProcessingException e1) {
				e1.printStackTrace();
			}
	    }
	    return null;
}
}
