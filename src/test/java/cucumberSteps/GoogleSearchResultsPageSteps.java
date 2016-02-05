package cucumberSteps;

import java.io.FileNotFoundException;
import java.io.IOException;




import org.junit.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberPages.GoogleSearchResultsPage;
import cucumberPages.SampleResultsPage;

public class GoogleSearchResultsPageSteps extends AbstractSteps {
	GoogleSearchResultsPage searchResultsPage;
	SampleResultsPage resultsPage;

	public GoogleSearchResultsPageSteps() throws FileNotFoundException,
			IOException {
		
		searchResultsPage= new GoogleSearchResultsPage(driver);
		resultsPage= new SampleResultsPage(driver);
	}
	
	@Then("^I get search results for the \"(.*?)\"$")
	public void i_get_search_results_for_the(String arg1) throws Throwable {
		Assert.assertTrue("No Search Results displayed",searchResultsPage.validateSearchResults(arg1));
	}

	@When("^I select first result for the \"(.*?)\"$")
	public void i_select_first_result_for_the(String arg1) throws Throwable {
	    searchResultsPage.selectSearchResult(arg1);
	}

	@Then("^I am on the home page of the application as per \"(.*?)\"$")
	public void i_am_on_the_home_page_of_the_application(String searchKeyword) throws Exception {
		Thread.sleep(3000);
	    Assert.assertTrue("Home Page of the searched application not found",resultsPage.validateResultsHomePage(searchKeyword));
	}
	

	

	@Then("^I get search results$")
	public void i_get_search_results() throws Throwable {
		Assert.assertTrue("No Search Results displayed",searchResultsPage.validateSearchResults());
	    
	}

}
