const { test, expect } = require("@playwright/test");

test.describe("LAMBDATEST", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/selenium-playground");
  });


  // Test Scenario 1
  test("Verify User Can enter a message Successfully", async ({ page }) => {
    // Click on "Simple Form Demo" link
    await page.locator("text=Simple Form Demo").click();

    // Verify URL
    await expect(page).toHaveURL(/simple-form-demo/);

    // Fill in message input field
    const enterMessage = await page.locator("//input[@id='user-message']");
    await enterMessage.fill("Welcome to Lambda Test");

    // Click on "Get Checked value" button
    await page.locator("text=Get Checked value").click();

    // Verify displayed message matches entered message
    const message = await page.locator("#message").innerText();
    await expect(message).toBe("Welcome to Lambda Test");
  });

  // Test Scenario 2
  test("Verify the Slider Can Be Dragged to Change Value", async ({ page }) => {
    // Click on "Drag & Drop Sliders" link
    await page.locator("text=Drag & Drop Sliders").click();

    // Locate the slider element
    const slider = await page.locator("//div[@id='slider3']//input");

    // Get the initial position of the slider
    const initialPosition = await slider.boundingBox();

    // Calculate the target position of the slider for value 95
    const targetPositionX = initialPosition.x + initialPosition.width * 0.93;

    // Create a new mouse object
    const mouse = page.mouse;

    // Move the slider to value 95 by clicking and dragging it
    await mouse.move(initialPosition.x, initialPosition.y);
    await mouse.down();
    await mouse.move(targetPositionX, initialPosition.y);
    await mouse.up();

    // Get the updated position of the slider
    const updatedPosition = await slider.boundingBox();

    // Verify that the slider position has been updated correctly
    const rangeValue = await page.locator("#rangeSuccess").innerText();
    await expect(rangeValue).toBe("95");
  });
 // Test Scenario 3
  test("Verify Submitting Contact Form", async ({ page }) => {
    // Click on "Input Form Submit" link
    await page.locator("text=Input Form Submit").click();
    // Click on "Submit" button
    await page.getByRole("button", { name: "Submit" }).click();
    // Assert "Please fill in the fields" text is displayed
    await expect(
      page.locator("input#name[required]:invalid", {
        text: "Please fill in the fields",
      })
    ).toBeTruthy();
    // Fill in the full form
    await page.getByPlaceholder("Name", { exact: true }).fill("Samuel");
    await page
      .getByPlaceholder("Email", { exact: true })
      .fill("saboyecode@gmail.com");
    await page.getByPlaceholder("Password").fill("123456");
    await page.getByPlaceholder("Company").fill("Self Employed");
    await page.getByPlaceholder("Website").fill("www.SelfEmployed.com");
    await page.getByRole("combobox").selectOption("US");
    await page.getByPlaceholder("City").fill("Omaha");
    await page.getByPlaceholder("Address 1").fill("123 North");
    await page.getByPlaceholder("Address 2").fill("test");
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByPlaceholder("State").fill("NE");
    await page.getByPlaceholder("Zip code").fill("68000");
    await page.getByRole("button", { name: "Submit" }).click();
    const thankYouMessage = await page.getByText(
      "Thanks for contacting us, we will get back to you shortly."
    );
    // Assert Thanks You message  text is displayed upon form submission
    await expect(thankYouMessage).toBeVisible();
  });
});
