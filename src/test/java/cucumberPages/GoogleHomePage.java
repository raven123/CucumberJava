package cucumberPages;



import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GoogleHomePage {
	
	public final WebDriver driver;
	public static WebDriverWait wait=null;
	
	
	public static final String URL="http://google.com";
	
	public static final String SEARCH_TEXTBOX_CLASS="gsfi";
	public static final String HOME_PAGE_TITLE="Google";
	public static final String SEARCH_BUTTON_NAME="btnG";
	
	public GoogleHomePage(WebDriver driver)
	{
		this.driver= driver;
		wait = new WebDriverWait(driver,20);
	}
	
	public void loadURL()
	{
		driver.get(URL);
		Assert.assertEquals(HOME_PAGE_TITLE, driver.getTitle());
	}
	
	public void performSearch(String searchKeyword)
	{
		WebElement searchBox=wait.until(ExpectedConditions.visibilityOfElementLocated(By.className(SEARCH_TEXTBOX_CLASS)));
		searchBox.clear();
		searchBox.sendKeys(searchKeyword);
		wait.until(ExpectedConditions.elementToBeClickable(By.name(SEARCH_BUTTON_NAME))).click();
	}
}
