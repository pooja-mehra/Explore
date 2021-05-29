package com.example.controller;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.data.Quest;
import com.example.data.Topic;
import com.example.service.QuestServiceIMPL;
import org.springframework.boot.CommandLineRunner;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Component
public class HelloWebController implements CommandLineRunner{
	
	@Autowired
    private QuestServiceIMPL questService;
    
    @RequestMapping("/")  
    public String hello()   
    {  
    return "Hello";  
    }  

	@GetMapping("/quests")
	
    public List < Topic > groupByTopics() {
        return questService.groupByTopics();
    }
	@PostMapping("/add")
	
    public Quest addQuest(@RequestBody @Validated Quest newQuest) {
        return questService.addQuest(newQuest);
    }
	@GetMapping("/states/{zip}")
	
	public String getZipDetails(@PathVariable("zip") String zip)
	{
		return questService.getZipDetails(zip);
		
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
	}
}
