FROM cypress/included:3.2.0
WORKDIR ./

COPY package.json package-lock.json ./
# copy Cypress tests
COPY cypress.json cypress ./
COPY cypress ./cypress

ENV CI=1
RUN npm ci

RUN $(npm bin)/cypress verify