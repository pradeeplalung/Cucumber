package com.learning.cucumber;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HolyTester {
	//@Given("^I am a \"([a-zA-Z]{1,})\" tester$")
	@Given("^I am a \"([^\"]*)\" tester$") // []* any character (incl. Number & special )
public void I_am_a_bad_tester(String testerType,DataTable table){
		
		List<Map<String,String>> data = table.asMaps();
		
		
		//System.out.println("@Given - I am a "+TesterType+" tester");
		System.out.println("@Given - I am a "+testerType+" tester in "+ data.get(0).get("industry") +" industry in country "+ data.get(0).get("country"));
		System.out.println("@Given - I am a "+testerType+" tester in "+ data.get(1).get("industry") +" industry in country "+ data.get(1).get("country"));
	}
	
	@When("^I go to work$")
	public void I_go_to_work(){
		System.out.println("@When - I go to work");
	}
	
	
	//@Then("^I \"([a-zA-Z]{1,})\" it$")
	@Then("^I \"([^\"]*)\" it$")
	public void I_mess_with_it(String Work_Output){
		System.out.println("@Then - I "+Work_Output+" it");
	}
	
	//@And("^My boss \"([a-zA-Z]{1,})\" me$")
	@And("^My boss \"([^\"]*)\" me$")
	public void My_boss_fires_me(String boss,DataTable table){
		List<Map<String,String>> data = table.asMaps();

		System.out.println("@And - My boss in country "+data.get(0).get("country")+" "+boss+" me");
		System.out.println("@And - My boss in country "+data.get(1).get("country")+" "+boss+" me");

	}
	
	
	//@But("^The developer \"([a-zA-Z]{1,})\" me$")
	@But("^The deleveloper \"([^\"]*)\" me$")
	public void The_developer_likes_me(String DeveloperReaction){
		System.out.println("@But - The developer "+DeveloperReaction+" me");
	}
}
	
	//*********************Testing ************
	/*@Given("I am a bad tester")
		public void badTest(){
		System.out.println("I am a bad tester");
			
		}
	
	@When("I go to work")
	public void work(){
		System.out.println("I go to work");
	
		
	}
	@Then("I mess with it")
	public void mess(){
		System.out.println("I mess with it");
	}
	@And("My boss fires me")
	public void boss(){
		System.out.println("My boss fires me");
	}
	@But("The deleveloper likes me")
	public void dev(){
		System.out.println("The deleveloper likes me");
	}*/

