from openjdk:21-slim-buster
workdir /app
copy target/inventory-vista-backend-0.0.1-SNAPSHOT.jar app.jar
entrypoint ["java", "-jar", "app.jar"]
