package com.example.data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "easyproblems")
public class Quest {
	@Id  ObjectId databaseId;
	private String topic;
	private String problem;
	
	public Quest(String topic, String problem) {
		this.topic = topic;
		this.problem = problem;
	}
    public String getTopic() {
        return topic;
    }
    public void setTopic(String topic) {
        this.topic = topic;
    }
    public String getProblem() {
        return problem;
    }
    public void setProblem(String problem) {
        this.problem = problem;
    }
}
