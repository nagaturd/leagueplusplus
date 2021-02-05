### Tracking Progress
##### 1/27/2021:
* Initial commit. Making a React app starting with a simple search function to look up a summoner name and return some information about the summoner.
* **Issues**: API call is made on first render, but functionally everything is working. See [here](https://github.com/nagaturd/leagueplusplus/blob/ac7dd294f43a378933c0308fe6135a3abba63cfb/src/components/Search.js#L10-L12) for the problem code.

* Fixed the issue, everything is working as intended. Removed some unnecessary complexities. Tomorrow, I want to implement some error handling for the API calls.

##### 1/28/2021:
* Built a persistent navigation bar for easier navigation to different pages.
* Searching is implemented to Home page where a search will open a new page and show some information about the Summoner that is searched.
* Tomorrow, I still need to build out error handling for both fetching api (e.g. handling status codes) and when searching for a summoner (e.g. "Summoner Does Not Exist" message).

##### 1/31/2021:
* Took a break from front-end to learn back-end (express) and implement an API Proxy
* Searching now requests the server to request from Riot API, hiding my API key
* Next, building error handling to handle status codes from Riot (probably on the server end?)
* Actually ended up trying to migrate to TypeScript early on but need to go back and fix some things tomorrow

##### 2/2/2021:
* Finished migration to TypeScript

##### 2/3/2021:
* Added MongoDB (Atlas) to the stack to handle caching of API calls on the Express server
* Tomorrow, I want to add request handling to grab from cache or update the cache based on time past since last call. And maybe some rate limiting functionality on top of that.

##### 2/4/2021:
* Search now retrieves from either API or DB based on existence of cached information
* Able to track through name changes by relying on a different persistent account identifier
* See [lpp-server](https://github.com/nagaturd/lpp-server)
* My next goal is add another check to only make API requests if a certain duration has past since last request (stored in "lastModified")
