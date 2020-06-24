# carepatron-test

## Who we are

Carepatron is a complete health & social care space for people who provide and receive care.

## Summary of test

Implement a risk assessment known as the **CHA₂DS₂-VASc Score** for atrial fibrillation stroke risk

Don't worry we give you business rules and designs down below :P

## Architecture

Simply an SPA (React & Typescript) and an API (.Net Core)

## Local machine setup

### Prerequisites

- [.Net Core](https://dotnet.microsoft.com/download)
- [Node](https://nodejs.org/en/download/) > 12.16.1
- NPM > 16.3.4

### How to run it

- `cd ./api`
  - `dotnet restore`
  - `dotnet build`
  - `dotnet run`
- `cd ./ui`
  - `npm i`
  - `npm run start`

_Note: to view the API contracts visit http://localhost:8000/swagger_

## Feature Requirements

- Implement a new page for the CHA₂DS₂-VASc Score
  - You should be able to click the list item and navigate to the risk assessment
  - It should also capture the Email of the user
- The logic for calculating the risk score should be done in the backend API and returned to the UI
- The score should be displayed once the user clicks the submit button
- Document what you would do next (if there's anything)
- Zip and email it (do not create a PR here)

_Note: if you don't know C# you can rewrite the API in whatever language you're comfortable with, just include instructions on how to run it_

### Business rules for the CHA₂DS₂-VASc Risk Assssment

- Age
  - Under 65 years = 0
  - 65 years to 75 years = +1
  - \>= 75 years = +2
- Sex
  - Female = +1
  - Male = 0
- CHF history
  - No = 0
  - Yes = +1
- Hypertension history
  - No = 0
  - Yes = +1
- Stroke/TIA/thromboembolism history
  - No = 0
  - Yes = +2
- Vascular disease history
  - No = 0
  - Yes = +1
- Diabetes history
  - No = 0
  - Yes = +1

Example:
56 years, Male, with no CHF history, with Hypertenation history, with no Stroke history, with Vascular disease history, with no diabetes history.

Should yield a score of **2**

[Use this calculator as a cheat sheet](https://www.mdcalc.com/cha2ds2-vasc-score-atrial-fibrillation-stroke-risk)

## Designs

### Existing Home page

![](https://github.com/davidpene/carepatron-test/blob/master/docs/Snip20200624_46.png)

### New Risk Assessment page

![](https://github.com/davidpene/carepatron-test/blob/master/docs/Snip20200624_48.png)
![](https://github.com/davidpene/carepatron-test/blob/master/docs/Snip20200624_49.png)

### Risk Assessment Result page

![](https://github.com/davidpene/carepatron-test/blob/master/docs/Snip20200624_50.png)

## Things to note

Try to treat this as a real application that someone would use but don't spend too much time on it :)
