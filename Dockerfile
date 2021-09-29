FROM node:12.22.3-buster
LABEL author="mjeeshan"
RUN apt-get update; apt-get clean

# Setting Work Directory
WORKDIR /app

ARG CHROME_VERSION="google-chrome-stable"
RUN rm -rf /var/lib/apt/lists/* && apt update
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
  && apt-get update -qqy \
  && apt-get -qqy install \
    ${CHROME_VERSION:-google-chrome-stable} --force-yes \
  && rm /etc/apt/sources.list.d/google-chrome.list \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# Install app dependencies
COPY package.json /app/

RUN npm install --quiet

COPY . /app

ENTRYPOINT ["npm"]
