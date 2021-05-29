package com.example.repository;

import com.example.data.Quest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestRepository extends MongoRepository<Quest,TopicRepository> {
	
}
