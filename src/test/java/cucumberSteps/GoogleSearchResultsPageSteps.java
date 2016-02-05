package cucumberSteps;

import java.io.FileNotFoundException;
import java.io.IOException;

import cucumber.api.java.After;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSearchResultsPageSteps extends AbstractSteps {

	public GoogleSearchResultsPageSteps() throws FileNotFoundException,
			IOException {
		
	
	}
	
	@Then("^I get search results for the \"(.*?)\"$")
	public void i_get_search_results_for_the(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("^I select first result for the \"(.*?)\"$")
	public void i_select_first_result_for_the(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I am on the home page of the application$")
	public void i_am_on_the_home_page_of_the_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}
	


}
