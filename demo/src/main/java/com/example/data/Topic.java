package com.example.data;

import java.util.List;

public class Topic {
	private String _id;
	private List<String> problem;
	
	public Topic(String _id, List<String> problem) {
		this._id = _id;
		this.problem = problem;
	}
    public String getId() {
        return _id;
    }
    public void setId(String _id) {
        this._id = _id;
    }
    public List<String> getProblem() {
        return problem;
    }
    public void setProblem(List<String> problem) {
        this.problem = problem;
    }
}
