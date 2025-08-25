FROM registry.access.redhat.com/ubi8/openjdk-17:1.20-2

# Create deployments directory and copy the WAR produced by Maven
RUN mkdir -p /deployments
COPY target/*.war /deployments/

# Expose the application port
EXPOSE 8080

# Use a shell-based entrypoint so the jar filename can be wildcarded
ENTRYPOINT ["sh", "-c", "java -jar /deployments/*.war"]
