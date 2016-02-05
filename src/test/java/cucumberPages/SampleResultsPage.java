package cucumberPages;

import org.openqa.selenium.WebDriver;

public class SampleResultsPage extends AbstractPage {
	private static final String TECHCANVASS_HOMEPAGE_TITLE="Software Training for IT professionals";
	
	private static final String HERO_HOMEPAGE_TITLE="Hero MotoCorp";
	
	public SampleResultsPage(WebDriver driver) {
		super(driver);
		
	}

   	public boolean validateResultsHomePage(String searchKeyword)
   	{
   		boolean currentTitle= false;
   		switch(searchKeyword)
   		{
   		case "Techcanvass": 
   			if(driver.getTitle().contains(TECHCANVASS_HOMEPAGE_TITLE))
   			currentTitle=true;
   			break;
   		case "Hero": 
   			if(driver.getTitle().contains(HERO_HOMEPAGE_TITLE))
   			currentTitle=true;
   			break;
   		default: currentTitle=false;	
   			
   		}
   		
   		return currentTitle;
   	}
	
}
