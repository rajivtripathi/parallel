package baseUtil;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Base {
	
	public static Properties prop;
	public static WebDriver driver;
	
	public Base(){
	
    try{

		System.out.println(" ---test base initiaized ---");	
		File src = new File("C:\\Users\\Rajiv\\workspace\\CucumberTest\\src\\test\\resources\\Config\\config.properties");
		FileInputStream fs = new FileInputStream(src);	
		prop = new Properties();
		prop.load(fs); 
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
			System.out.println(e.getStackTrace());
			
			
		}	
		} 


		public void openBrowser() throws InterruptedException {

		String mybrowser= prop.getProperty("browser");
		System.out.println(prop.getProperty("browser"));
		//if (browsername.equalsIgnoreCase("chrome"))
    System.out.println("---Driver value--"+driver);
			if (mybrowser.equalsIgnoreCase("chrome"))
			
		{ 	 System.setProperty("webdriver.chrome.driver", "C:\\Users\\Rajiv\\Downloads\\chromedriver_win32 (3)\\chromedriver.exe");
			    driver = new ChromeDriver(); 
			    System.out.println("---Driver value--"+driver);
			    
		} 

		else if (mybrowser.equalsIgnoreCase("firefox"))
			
		{ System.out.println(" ---firefox----");
			System.setProperty("webdriver.gecko.driver", "C:\\Users\\Rajiv\\Downloads\\geckodriver-v0.24.0-win64\\geckodriver.exe");
			driver= new FirefoxDriver();
		 
		}
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		System.out.println(" ----browser lanched-----");
		driver.get(prop.getProperty("url"));
		Thread.sleep(8000);
		System.out.println(" browser maximized");
		} 


}
