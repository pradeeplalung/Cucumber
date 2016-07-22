package com.learning.cucumber;
import org.junit.runner.RunWith;

//import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@Cucumber.Options(format ={"html:output1"}) // it will generate a html report in the folder call 'output1'
public class HolyITPeople {

}
