package cucumberSteps;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverInstance {
	private static Properties properties;
	private static  WebDriver driver;

	private static DriverInstance instance;
	
	private DriverInstance()
	{
		
	}
	
	public static synchronized DriverInstance getInstance()
	{
		if(instance==null)
			instance= new DriverInstance();
		return instance;
	}
	
	
	public static WebDriver selectBrowser() {

		/*if(driver==null){
		Thread currentThread = Thread.currentThread();
		ClassLoader contextClassLoader = currentThread.getContextClassLoader();
		InputStream propertiesStream = contextClassLoader.getResourceAsStream("config.properties");
		if (propertiesStream != null) {
		  properties.load(propertiesStream);
		  properties.getProperty("browser")
		}*/
		switch ("chrome") {
		case "firefox":
			driver = new FirefoxDriver();
			break;
		case "chrome":
			System.setProperty("webdriver.chrome.driver",
					"D:/softwares/chromedriver.exe");
			driver = new ChromeDriver();
			break;
		default:
			driver = new FirefoxDriver();
		}
		driver.manage().window().maximize();
		return driver;
	}


}