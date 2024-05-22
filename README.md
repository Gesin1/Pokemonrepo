# Pokemon Freecodecamp Api Exercises
This is solution to the freecodecamp Pokemon coding working. Using Pokemon Api.
## If you have any problem, you can check the code. 

### If you copy the code and paste it directly to freecodecamp, it will not work perfectly because the Api provide is not in "HTTPS" request.
You need to add this Line of code replace("http", "https") to the fetch result[i].url
#### const getUrlResult = await fetch(results[i].url.replace("http", "https")
