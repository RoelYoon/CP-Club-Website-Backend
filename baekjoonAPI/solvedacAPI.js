const {spawn} = require("child_process");
const path = require("path");
const actions = new Set(["get_tier","get_ac_rating","get_exp","get_rank"]);
module.exports = {apiCall : async (req,res)=>{
    if(actions.has(req.params["action"])){
        const scraper = spawn("python3",[path.join(__dirname,"/baekjoonScraper/solvedacScraper.py"), req.params["action"], req.params["user_name"]]);
        let scrapedData = "";
        scraper.stdout.on('data', (data) => {
            scrapedData+=data.toString();
        })
        scraper.on("close",
        ()=>{
                try{
                    if(scrapedData!=""){
                        res.send(scrapedData).status(200);
                    }else{
                        throw new Error("No scrapped data");
                    }
                }catch(e){
                    res.send("<h1>500</h1><p>Scraping failed or resource does not exist</p>").status(500);
                }
            }
        )
    }else{
        res.send("<h1>404 boiii</h1>").status(404);
    }
}}