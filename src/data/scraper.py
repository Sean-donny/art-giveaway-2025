from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

# Setup
chrome_options = Options()
chrome_options.add_argument("--start-maximized")
driver = webdriver.Chrome(options=chrome_options)

# Load post
post_url = 'https://www.instagram.com/p/DMOBeWkMjOK/'
driver.get(post_url)

import selenium.common.exceptions as se

# Accept cookies if prompted
try:
    cookie_button = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.XPATH, '//button[text()="Only allow essential cookies"]'))
    )
    cookie_button.click()
    print("Accepted cookies.")
    time.sleep(2)
except se.TimeoutException:
    print("No cookie popup found.")


# Wait for page to load
WebDriverWait(driver, 15).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "ul._a9z6"))
)

# Load more comments (loop optional)
while True:
    try:
        load_more = driver.find_element(By.XPATH, '//button[contains(text(),"more comments")]')
        load_more.click()
        time.sleep(2)
    except:
        break

# Scrape
soup = BeautifulSoup(driver.page_source, 'html.parser')
comments = []
for comment_block in soup.select('ul._a9z6 li'):
    try:
        username = comment_block.select_one('h3 a').text
        comment_text = comment_block.select_one('div._a9zs span').text
        comments.append((username, comment_text))
    except:
        continue

# Save to file
with open("comments.txt", "w", encoding="utf-8") as f:
    for user, text in comments:
        f.write(f"{user}: {text}\n")

input("Done scraping. Press Enter to close...")
driver.quit()
