Feature: Flow of Ecommerce Website

  Scenario Outline: Scenario Outline name: Ordering Item from a Website
    Given Login ino an Ecommerce Website with "<Username>" and "<Password>"
    When  Add "Iphone 1" into the Cart
    Then checking the "Iphone 1" in cart page
    Then Selecting "ind" in addresspage
    Then Verifying the orders in myorders page
    Examples:
        | Username               | Password |
        | vshashank00@gmail.com  | password |