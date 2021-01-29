### Tracking Progress
##### 1/27/2021:
* Initial commit. Making a React app starting with a simple search function to look up a summoner name and return some information about the summoner.
* **Issues**: API call is made on first render, but functionally everything is working. See [here](https://github.com/nagaturd/leagueplusplus/blob/ac7dd294f43a378933c0308fe6135a3abba63cfb/src/components/Search.js#L10-L12) for the problem code.

* Fixed the issue, everything is working as intended. Removed some unnecessary complexities. Tomorrow, I want to implement some error handling for the API calls.

##### 1/28/2021:
* Built a persistent navigation bar for easier navigation to different pages.
* Searching is implemented to Home page where a search will open a new page and show some information about the Summoner that is searched.
* Tomorrow, I still need to build out error handling for both fetching api (e.g. handling status codes) and when searching for a summoner (e.g. "Summoner Does Not Exist" message).
