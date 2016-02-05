package cucumberRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumberSteps.AbstractSteps;
import cucumberSteps.DriverInstance;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/cucumberFeatures", glue = { "cucumberSteps" }, dryRun = false, plugin = {
		"pretty", "html:src/test/resources/target/cucumber" },tags={"@basic"})
public class TestRunner extends AbstractSteps {


	
@AfterClass
public static void closeDriver()
{
   driver.quit();	
}

}
