package parallel;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberFeatureWrapper;
import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.PickleEventWrapper;
import io.cucumber.testng.TestNGCucumberRunner;


//@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features",
        glue = "parallel",	
        monochrome= true,
        dryRun=false,
		plugin = {"pretty", "html:target/cucumber-htmlreport", "json:target/cucumber-report.json"}
	)
         
        
public class TestRunner extends AbstractTestNGCucumberTests{
	
	private TestNGCucumberRunner testNGCucumberRunner;
	
    @BeforeClass(alwaysRun = true)
    public void setUpClass() {    	
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(dataProvider = "features")    
    public void feature(PickleEventWrapper eventwrapper,CucumberFeatureWrapper cucumberFeature) throws Throwable {
    	//testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    	testNGCucumberRunner.runScenario(eventwrapper.getPickleEvent());
    }
    
    @DataProvider(parallel=true)
    public Object[][] scenarios() {
        return super.scenarios();
       // return testNGCucumberRunner.provideFeatures();    	
    	// return testNGCucumberRunner.provideScenarios();
    }
    
    @AfterClass(alwaysRun = true)
    public void tearDownClass() {    	
        testNGCucumberRunner.finish();        
    }
	

}
