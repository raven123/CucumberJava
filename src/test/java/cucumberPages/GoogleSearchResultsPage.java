package cucumberPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class GoogleSearchResultsPage extends AbstractPage {

	public GoogleSearchResultsPage(WebDriver driver) {
		super(driver);

	}

	public boolean validateSearchResults(String searchKeyword) {
		return  wait.until(ExpectedConditions.elementToBeClickable(By
						.partialLinkText(searchKeyword))).isDisplayed();
	}

    public void selectSearchResult(String searchKeyword)
    {
    	driver.findElement(By.partialLinkText(searchKeyword)).click();
    }
    

}
