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
You can use a spare computer in your house with internet access or set up a virtual machine on a cloud platform service. [Google Cloud Platform's Compute Engine](https://cloud.google.com/compute) allows you to continuously run a virtual machine completely free as long as you follow the standards described in their [free-tier documentation](https://cloud.google.com/free/docs/free-cloud-features#compute). The VM also comes with a free external IP address, so hosting our web server on a cloud VM does not have any costs. Just be sure to not exceed their 1GB network egress monthly usage limit (details in [Managing Network Egress For GCP VM Usage Limit](#managing-network-egress-for-gcp-vm-usage-limit) section). 

The web server's code for both backend and frontend is in this repository. Make sure to specify the correct IP:port for Node.js to listen at in [server.js](server.js) (know the difference between using a external vs internal IP address here. Using an internal IP address requires port forwarding). 

```
app.listen(<PORT>, "<IP ADDRESS>", ()=>{console.log("Listening at IP <IP ADDRESS> port <PORT>")});
```

On the machine you have chosen as our web server, clone this repoistory using `git clone https://github.com/RoelYoon/CP-Club-Website-And-API.git`. Then, `cd` into the cloned repository and install the Node.js dependencies with `npm install` and Python dependencies with `python3 -m pip install -r requirements.txt` (make sure you're using Python version >=3).

Finally, run `npm start`, and the web server should start listening for http requests at the specified IP:port. If you're using a VM, make sure to keep the process alive even after disconnecting. You can do this on Linux using [screen](https://linuxize.com/post/how-to-use-linux-screen/).

If you're using a GCP VM and HTTP requests are getting blocked by the firewall or you want to open a custom port, refer to this helpful [stackoverflow answer](https://stackoverflow.com/questions/44643758/google-cloud-compute-engine-refuse-outer-access-through-apache2/44645115#44645115). 

HTTPS is not necessary as no sensitive information is shared. 

## Updating The Web Server
1. Push changes to this repository
2. Kill the current web server process
3. `cd` to repository on web server
4. Run `git pull origin main`
5. Install any updated dependencies
6. Run `npm start`

As long as you made the local repository using `git clone`, the `origin` of the repository is automatically assigned to this repository. 
## Automatic Deployment With Github Action (Optional) 
This section gives instructions on automating the [previous section](#updating-the-web-server).

## Maintaining Baekjoon-Scraper Package
This section gives instructions on fixing the [baekjoon-scraper python package](https://pypi.org/project/baekjoon-scraper/) in the case of changes to the baekjoon or solved.ac HTML layout. This package is a vital component of our baekjoon APIs, so being able to update this package is necessary.

## Modifying Frontend 
Place all frontend files in the [public](public) folder. In the [public](public) folder, you are no longer in the Node.js environment. Work with your HTML, CSS, and JavaScript files as if you're in the client-side browser environment. 

## Managing Network Egress For GCP VM Usage Limit
GCP's [free-tier](https://cloud.google.com/free/docs/free-cloud-features#compute) places a monthly usage limit of 1GB network egress on our free VM (ingress is unlimited). So how practical is web hosting with this limitation? Let's look at some numbers. 

I'll make *very* conservative estimates in order to make sure we won't be paying any unexpected bills. Let's say our web server deals with `100,000 HTTP requests` every month, with browser caching out of the equation. This is over `130 HTTP requests/hour`, which I believe is a safe overestimate for a highschool club website. 

With this rate, we can figure out how much network egress each HTTP response should have: 
`1GB / 100000 HTTP Responses = 10KB / 1 HTTP Response`. 