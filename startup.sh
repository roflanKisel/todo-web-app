docker-compose -f ./docker-compose.yml -f ./db/docker-compose.yml build db web-api web logger
docker-compose -f ./docker-compose.yml -f ./db/docker-compose.yml up db web-api web logger
