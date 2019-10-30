package pageLayer;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import baseUtil.Base;

public class LoginPage extends Base {	
	
	//public WebDriver ldriver;
	
 public LoginPage(WebDriver driver) {	 

	PageFactory.initElements(driver, this);
	 
 }
	
 @FindBy(xpath="//*[@id='Email']")
 WebElement email;
 
 @FindBy(xpath="//*[@id='Password']")
 WebElement password;
 
 @FindBy(xpath="//*[@value='Log in']")
 WebElement login;


 public void Login(String username, String pwd) {
	 
	 email.sendKeys(username);
	 password.sendKeys(pwd);
	 login.click();	 
	 
 }

}
