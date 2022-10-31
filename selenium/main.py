import unittest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.option = webdriver.ChromeOptions()
        self.option.add_argument("start-maximized")
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()),options=self.option)

    def test_register(self):
        driver = self.driver
        driver.get("http://localhost:5500/index.html")
        self.assertIn("Cadastro", driver.title)
        h2 = driver.find_element(By.ID, "titulo")
        h2_text = h2.get_attribute('innerHTML')
        self.assertIn("Cadastro", h2_text)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()