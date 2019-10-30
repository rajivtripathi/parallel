package pageLayer;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class DashBoard {
	
	
	
	 public DashBoard(WebDriver driver) {	 
			
			//ldriver=rdriver;
			PageFactory.initElements(driver, this);

			 
		 }

}
