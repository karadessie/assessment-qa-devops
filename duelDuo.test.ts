
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices shows up on Draw', async () => {
    const title = await driver.findElement(By.id('draw')).click()
    const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displayed).toBe(true)
})

test('Player-Duo shows up on Add to Duo', async () => {
    const title = await driver.findElement(By.id('see-all')).click()
    const displayed = await driver.findElement(By.id('player-duo')).isDisplayed()
    expect(displayed).toBe(true)
})