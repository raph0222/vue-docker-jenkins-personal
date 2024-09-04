FROM jenkins/jenkins:lts

USER root

# dependencies and clean
RUN apt-get update && \
    apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# add Docker's official GPG key
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
# docker repo
RUN echo "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# docker cli
RUN apt-get update && \
    apt-get install -y docker-ce-cli && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# jenkins plugins
RUN jenkins-plugin-cli --plugins \
    "docker-workflow" \
    "pipeline-stage-view"

# user set in docker-compose