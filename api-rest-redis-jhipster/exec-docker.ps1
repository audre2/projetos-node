npm run build 
docker build -t audre/api-rest-redis .
docker run -it --net redis -p 3000:3000 audre/api-rest-redis:latest