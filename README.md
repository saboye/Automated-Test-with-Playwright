
<p align="justify">
<h1 align="center" style="color:blue;" id="heading"> Automated Test with Playwright </h1>
<h1 align="center" style="color:blue;" id="heading"> Run on the Cloud </h1>
</p>


![GitHub contributors](https://img.shields.io/github/contributors/saboye/Automated-Test-with-Playwright?color=blue&logo=github&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/saboye/Automated-Test-with-Playwright?logo=github&style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/saboye/Automated-Test-with-Playwright?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/saboye/Automated-Test-with-Playwright?label=license&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/saboye/Automated-Test-with-Playwright?style=for-the-badge)




<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a>
    <img src="./playwright.png" alt="Logo" width="300" height="300">
  </a>
</p>



This is a test suite built with [Playwright](https://playwright.dev/) that tests the [LambdaTest](https://www.lambdatest.com/selenium-playground/) website. The test suite includes three test cases that cover different aspects of the website:

- Verify User Can enter a message Successfully
- Verify the Slider Can Be Dragged to Change Value
- Verify Submitting Contact Form


# Running the Test Suite

To run the test suite,  clone this repository to your local machine and you will need to have Node.js and Playwright installed on your machine. You can install them by running the following commands:

```ruby
  git clone https://github.com/saboye/Automated-Test-with-Playwright.git
  
  cd Automated-Test-with-Playwright
```

```ruby
npm install

```

Then, you can run the test suite using the following command:

```ruby
npx playwright test
```

By default, the test suite runs on the Chromium browser. If you want to run the tests on a different browser, you can use the --browser option. For example, to run the tests on Firefox, you can use the following command:

# Test Cases
## Verify User Can enter a message Successfully
This test case verifies that a user can successfully enter a message on the "Simple Form Demo" page and that the displayed message matches the entered message.

##Verify the Slider Can Be Dragged to Change Value
This test case verifies that a user can drag the slider on the "Drag & Drop Sliders" page to change its value and that the displayed value matches the expected value.

## Verify Submitting Contact Form
This test case verifies that a user can successfully submit the contact form on the "Input Form Submit" page. It fills in the a;; the form fields  verifies that the success message "Thanks for contacting us, we will get back to you shortly." is displayed.


# Technologies Used 

- 🎭 [playwright](https://playwright.dev/) 
- [Node.js](https://nodejs.org/en)

License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/saboye/Automated-Test-with-Playwright/blob/main/LICENSE) file for details.

