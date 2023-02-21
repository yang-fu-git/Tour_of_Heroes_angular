FROM debian:latest

# Use Bash Shell
RUN chsh -s $(which bash) root

# Install base dependencies
RUN apt-get update \ 
    && apt-get install -y -q --no-install-recommends \
        wget \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        openssh-client \
        gnupg2 \
    && rm -rf /var/lib/apt/lists/*

# Configure Default User
RUN adduser --uid 1000 default

# Install NVM with default version ().
ENV NVM_DIR /nvm
ENV NODE_VERSION 16.13.0
RUN mkdir ${NVM_DIR} && \
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && chmod +x ${NVM_DIR}/nvm.sh \
    && . ${NVM_DIR}/nvm.sh \
    && nvm install ${NODE_VERSION} \
    && nvm alias default \
    && nvm use default
    
ENV NODE_PATH $NVM_DIR/versions/node/v${NODE_VERSION}/lib/node_modules
ENV PATH="${PATH}:$NVM_DIR/versions/node/v${NODE_VERSION}/bin"

# Install Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \ 
    && apt-get update \
    && apt --fix-broken install \ 
    && apt-get install google-chrome-stable -y

# Install Angular CLI
RUN npm install -g @angular/cli

# Install ADFS-CLI
RUN curl -sL https://github.geo.conti.de/api/v3/repos/continental-cloud/adfs-cli/releases/latest | grep browser_download_url | grep linux | cut -d '"' -f 4 | xargs -n1 curl -sL -o /usr/local/bin/adfs-cli && chmod 755 /usr/local/bin/adfs-cli

CMD [ "sh", "printenv" ]