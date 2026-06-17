enum urlConstants{
"LOCAL"="Local Env",
"STAGING"="staging",
"DEVELOPMENT"="Development",
"PRODUCTION" = "Procu"
}

function testEnv(testenvironment :urlConstants){
console.log(`We are in ${testenvironment}`);
}
testEnv(urlConstants.DEVELOPMENT)
