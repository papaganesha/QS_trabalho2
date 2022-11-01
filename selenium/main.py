import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.option = webdriver.ChromeOptions()
        self.option.add_argument("start-maximized")
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()),options=self.option)

    def test_register_correct(self):
        driver = self.driver
        driver.get("http://localhost:5500/index.html")
        self.assertIn("Cadastro", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Cadastro", h2_texto)

        nome_input = driver.find_element(By.ID, "nome")
        email_input = driver.find_element(By.ID, "email")
        cpf_input = driver.find_element(By.ID, "inputCPF")
        dtnasc_input = driver.find_element(By.ID, "inputDT")
        senha_input = driver.find_element(By.ID, "senha")
        confirmaSenha_input = driver.find_element(By.ID, "confirmaSenha")

        nome_input.send_keys("Jorge")
        email_input.send_keys("jorge@gmail.com")
        cpf_input.send_keys("80215809092")
        dtnasc_input.send_keys("10/08/1999")
        senha_input.send_keys("12345678")
        confirmaSenha_input.send_keys("12345678")

        btnCadastro = driver.find_element(By.ID, "btnCadastro")
        btnCadastro.click()

        WebDriverWait(driver, timeout=1000)

        alerta =  driver.find_element(By.ID, "alerta")
    
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("Logado com sucesso.", alerta_texto)

        time.sleep(4)

        driver.quit()

    def test_register_cpf_incorreto(self):
        driver = self.driver

        driver.get("http://localhost:5500/index.html")
        self.assertIn("Cadastro", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Cadastro", h2_texto)

        nome_input = driver.find_element(By.ID, "nome")
        email_input = driver.find_element(By.ID, "email")
        cpf_input = driver.find_element(By.ID, "inputCPF")
        dtnasc_input = driver.find_element(By.ID, "inputDT")
        senha_input = driver.find_element(By.ID, "senha")
        confirmaSenha_input = driver.find_element(By.ID, "confirmaSenha")

        nome_input.send_keys("Jorge")
        email_input.send_keys("jorge@gmail.com")
        cpf_input.send_keys("32345809089")
        dtnasc_input.send_keys("10/08/1999")
        senha_input.send_keys("12345678")
        confirmaSenha_input.send_keys("12345678")

        btnCadastro = driver.find_element(By.ID, "btnCadastro")
        btnCadastro.click()

        WebDriverWait(driver, timeout=100)

        alerta =  driver.find_element(By.ID, "alerta")
        
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("CPF inválido.", alerta_texto)

        time.sleep(4)

        driver.quit()


    def test_register_vazio(self):
        driver = self.driver

        driver.get("http://localhost:5500/index.html")
        self.assertIn("Cadastro", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Cadastro", h2_texto)

        btnCadastro = driver.find_element(By.ID, "btnCadastro")
        btnCadastro.click()

        WebDriverWait(driver, timeout=100)

        alerta =  driver.find_element(By.ID, "alerta")
        
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("Faltam dados.", alerta_texto)

        time.sleep(4)

        driver.quit()


    def test_login_correto(self):
        driver = self.driver

        driver.get("http://localhost:5500/login.html")
        self.assertIn("Login", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Login", h2_texto)

        email_input = driver.find_element(By.ID, "email")
        senha_input = driver.find_element(By.ID, "senha")
        
        email_input.send_keys("joaopedro@gmail.com")
        senha_input.send_keys("12345678")

        btnLogin = driver.find_element(By.ID, "btnLogin")
        btnLogin.click()

        WebDriverWait(driver, timeout=100)

        alerta =  driver.find_element(By.ID, "alerta")
        
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("Logado com sucesso.", alerta_texto)

        time.sleep(4)

        driver.quit()

    def test_login_email_incorreto(self):
        driver = self.driver

        driver.get("http://localhost:5500/login.html")
        self.assertIn("Login", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Login", h2_texto)

        email_input = driver.find_element(By.ID, "email")
        senha_input = driver.find_element(By.ID, "senha")
        
        email_input.send_keys("joaopedro@gmail")
        senha_input.send_keys("12345678")

        btnLogin = driver.find_element(By.ID, "btnLogin")
        btnLogin.click()

        WebDriverWait(driver, timeout=100)

        alerta =  driver.find_element(By.ID, "alerta")
        
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("Email inválido.", alerta_texto)

        time.sleep(4)

        driver.quit()

    def test_login_vazio(self):
        driver = self.driver

        driver.get("http://localhost:5500/login.html")
        self.assertIn("Login", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_texto = h2.get_attribute('innerHTML')
        self.assertIn("Login", h2_texto)

        btnLogin = driver.find_element(By.ID, "btnLogin")
        btnLogin.click()

        WebDriverWait(driver, timeout=100)

        alerta =  driver.find_element(By.ID, "alerta")
        
        alerta_texto = alerta.get_attribute('innerHTML')
        self.assertIn("Faltam dados.", alerta_texto)

        time.sleep(4)

        driver.quit()


    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()