package cucumberSteps;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumberPages.GoogleHomePage;

public class GoogleHomePageSteps extends AbstractSteps {
	
	private static GoogleHomePage homePage;
	
	public GoogleHomePageSteps() throws FileNotFoundException, IOException {
		
		homePage= new GoogleHomePage(driver);
		
	}

	@Given("^I am on google home page$")
	public void i_am_on_google_home_page() throws Throwable {
	   homePage.loadURL();
	}	
	
	@When("^I perform search using \"(.*?)\"$")
	public void i_perform_search_using(String arg1) throws Throwable {
	    homePage.performSearch(arg1);
	    
	}
	
	@When("^I perform search using:$")
	public void i_perform_search_using(DataTable dataTable) throws Throwable {
	 
		List<List<String>> dataTableList=dataTable.raw();
		for (List<String> rows: dataTableList)
		{
			System.out.println(rows);
			for(String columns: rows)
				homePage.performSearch(columns);	
		}
	}
}
