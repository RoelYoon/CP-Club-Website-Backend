# Maintenance Instructions For Future Officiers

## Prerequisite Knowledge
If you are voted as an officier, we'll guide you with any unfamiliar topics
- Git and Github
- Basic foundation of web-development
  - Frontend
    - HTML, CSS, JavaScript
    - API Calls
  - Backend
    - Node.js & Express
    - API Management
- PostgreSQL
- Web Scraping w/ Python + Beautiful Soup 

## Setting Up The Web Server
You can use a spare computer in your house with internet access or set up a virtual machine on a cloud platform service. [Google Cloud Platform's Compute Engine](https://cloud.google.com/compute) allows you to continuously run a virtual machine completely free as long as you follow the standards described in their [free-tier documentation](https://cloud.google.com/free/docs/free-cloud-features#compute). The VM also comes with a free external IP address, so hosting our web server on a cloud VM does not have any costs. Just be sure to not exceed their 1GB network egress monthly usage limit (details in [Managing Network Egress For GCP VM Usage Limit] (# Managing Network Egress For GCP VM Usage Limit)). 

The web server's code for both backend and frontend is in this repository. Make sure to specify the correct IP:port for Node.js to listen at in [server.js](server.js)

On the machine you have chosen as our web server, clone this repoistory using `git clone https://github.com/RoelYoon/CP-Club-Website-And-API.git`. Then, `cd` into the cloned repository and install the Node.js dependencies with `npm install` and Python dependencies with `python3 -m pip install -r requirements.txt` (make sure you're working with Python >=3).

Finally, run `npm start`, and the web server should start listening for http requests at the specified IP:port. 

## Automatic Deployment With Github Action (Optional) 

## Fixing Baekjoon Scrapers

## Modifying Frontend 

## Managing Network Egress For GCP VM Usage Limit
