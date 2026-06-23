# Brand.i for FIS - AI-Powered Precision. Consistent Branding.

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/Logo.png?raw=true" alt="Logo" />
</p>

---

## Description
The verification of websites and product UIs for adherence to branding guidelines is currently conducted manually. This project aims to automate the process using computer vision (CV) and web scraping technologies. The automated system will perform image analysis to validate logo placement and clear space around logo, as well as ensure the correct formatting of various UI elements present in websites such as buttons, cards, tags, pie charts, and donut charts, as per the guidelines. Additionally, it will utilize web scraping to analyze text cases, font styles, typography, and color usage to ensure they are compliant with the FIS brand vision.

Branding consistency is crucial for maintaining a strong brand identity, enhancing brand outreach, and ensuring a cohesive and unified brand vision. Automating the branding verification task will reduce manual labor, decrease verification time, and ensure consistent compliance with branding guidelines. This will result in a faster, more accurate, and efficient verification process, while also reducing the number of tickets submitted by developers for manual review. The proposed app aims to enhance branding consistency for FIS, elevate brand outreach and visibility, ensure a cohesive and unified brand vision, and address and resolve any branding compliance issues with FIS products.

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/LandingPage.png?raw=true" alt="LandingPage" />
</p>

---

## Solution Features

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/Architecture.jpg?raw=true" alt="Architecture" />
</p>

- **User Interface (UI) Integration**:
  - **Computer Vision (CV) Based Image Analysis**:
    - The system captures screenshots of various pages of the website and processes them using deep learning models like YOLOv8 PyTorch.
    - These models are trained to detect and validate UI components such as logos, buttons, cards, tags, pie charts, and donut charts.
    - The system checks for correct logo placement and clear space, ensuring compliance with branding guidelines.
    - It generates a detailed report highlighting areas that need adjustments.
  - **Web Scraping Based Analysis**:
    - The system scrapes HTML and JavaScript files to gather information on components used.
    - It fetches the HTML page, identifies links to stylesheets, and downloads the corresponding CSS files.
    - The system extracts colors, text cases, and font styles used throughout the website and verifies their adherence to established guidelines.
    - Playwright framework is used for scraping and analysis.
  - **Chatbot for Report Interaction**:
    - An interactive chatbot, powered by OpenAI APIs, is integrated into the UI to assist users in understanding the branding report.
    - The chatbot provides detailed explanations and suggestions for improving compliance with FIS branding guidelines.
  - **Consolidated Report**:
    - Finally, a consolidated compliance report document is provided, available for download for reference by the users.
    - A compliance score is also given to the UI page indicating how compliant the website is with the guidelines provided by FIS.

- **CI/CD Pipeline Integration**:
  - **Automated Branding Checks**:
    - The system is integrated into the CI/CD pipeline to automate branding checks during the deployment phase.
    - It processes compliance reports generated after running the required scripts on the UI in question.
    - The integration ensures that any pull requests that do not meet branding guidelines are prevented from being merged, maintaining consistent compliance throughout the development cycle.

  <p align="center">
    <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/Pipeline.jpg?raw=true" alt="Pipeline" />
  </p>

---

## Technologies and Architecture Used
- **Programming Languages**:
  - Python
  - JavaScript
  - TypeScript

- **Frameworks**:
  - PyTorch
  - ReactJS
  - NodeJS
  - ExpressJS
  - GitHub Actions

- **Libraries**:
  - OpenCV
  - Playwright
  - Axios
  - Framer Motion
  - React Icons
  - Readline Sync

- **Architecture**:
  - Hybrid architecture with a monolithic core and independent modules.
  - A Python script orchestrates the execution of various scripts for image analysis and web scraping.
  - The chatbot runs separately using a different API, providing detailed explanations and suggestions.
  - Web scraping tools gather and analyze HTML, CSS, and JavaScript files to verify compliance with branding guidelines.
  - Integration with CI/CD pipeline automates branding checks during the deployment phase.

---

## Code Purpose
The code is designed to automate the verification of branding guidelines for websites and product UIs. It performs several specific tasks to ensure compliance with FIS branding standards:
- **Automate Branding Guidelines Checking Process**: Develop an AI-driven system to automatically verify adherence to branding guidelines, reducing manual effort and enhancing accuracy.
- **Create Computer Vision Models**: Design and train models to detect and analyze visual branding elements such as logos, colors, and typography.
- **Create Web Scraping Tool**: Build a tool to extract and analyze HTML, CSS, and JavaScript files to check for branding compliance in UI components.
- **Integrate Tools with an Interface**: Develop a user-friendly interface that integrates computer vision and web scraping tools to address specific use cases, ensuring seamless interaction and feedback.
- **Use OpenAI APIs**: Create a chatbot to assist in providing detailed inference on the branding report, helping users understand what needs to be done to improve compliance.
- **Integrate Product into CI/CD Pipeline**: Seamlessly integrate the branding verification tool into the continuous integration and continuous deployment (CI/CD) pipeline to automate branding checks during development cycles.
- **Make Product Modular**: Design the product with modularity in mind, allowing for easy addition of new UI components to be checked, thereby expanding its capabilities and adaptability across different projects and teams.

### Use Cases and Scenarios
- **Prototype**: Developers and UI/UX designers will use the tool by entering the URL of the deployed site into the UI, triggering an analysis that generates a detailed report highlighting branding compliance issues and providing actionable insights to correct any discrepancies.
- **CI/CD Pipeline Integration**: If the product is integrated into the CI/CD pipeline in the deployment phase, then the checking for branding compliance can be an automatic process during each build and deployment cycle, without the involvement of developers.

---

## Code Details
- **Written In**:
  - **Programming Languages**: Python, JavaScript, TypeScript
  - **Tools**:
    - **Computer Vision**: PyTorch YOLOv8 (trained using Ultralytics), OpenCV
    - **Web Scraping**: Playwright
    - **Chatbot**: OpenAI APIs, Axios, Readline Sync
    - **Interface**: ReactJS, NodeJS, ExpressJS
    - **CI/CD Pipeline**: GitHub Actions

- **Open Source or Proprietary**:
  - The project utilizes open-source libraries such as OpenCV, Playwright, PyTorch (Ultralytics), Axios, Framer Motion, React Icons, and Readline Sync.

---

## Outputs

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/Results.png?raw=true" alt="Results" />
</p>

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/CVReport.png?raw=true" alt="CVReport" />
</p>

<p align="center">
  <img src="https://github.com/rishn/FIS-InnovateIN48-Brand.i/blob/main/assets/Chatbot.png?raw=true" alt="Chatbot" />
</p>

---

## How to Run the Project
Follow these steps to set up and run the project:

1. Clone the repository:
    ``` bash
    git clone https://github.com/rishn/FIS-InnovateIN48-Brand.i
    ```

2. Install Python dependencies:
  Navigate to the root folder (where `requirements.txt` is located) and run:
  ``` bash
  pip install -r requirements.txt
  ```

3. Install Playwright browsers:
  Inside the `prototype/api` folder, install Playwright:
  ``` bash
  cd prototype/api
  npx playwright install
  playwright install
  ```

3. Install API server dependencies:
  Go to the API folder:
  ``` bash
  cd prototype/api
  npm install
  ```

4. Install UI server dependencies:
  Open a new terminal window or tab, navigate to the UI folder:
  ``` bash
  cd prototype/ui
  npm install
  ```

5. Set up environment variables:
  In `prototype/api`, create a .env file and add your OpenAI API key:
  ``` bash
  INNOVATE_API_KEY=your_openai_api_key_here
  ```

6. Start the API server:
  In `prototype/api`:
  ``` bash
  cd prototype/api
  npm run dev
  ```

7. Start the UI server:
  In a new terminal, go to `prototype/ui`:
  ``` bash
  cd prototype/ui
  npm start
  ```

8. Test the app:
  Open your browser and navigate to http://localhost:3000. Enter the URL of the website you want to analyze and start the analysis.

9. Test using provided demo sites (optional):
  We’ve included demo websites for testing. Navigate to any of the demo folders and start them:
  ``` bash
  cd demo_site_1
  npm start
  ```

  Repeat similarly for `demo_site_2` and `demo_site_3`. Then enter their URLs in the prototype landing page to test.