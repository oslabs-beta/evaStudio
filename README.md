<div align="center">
   <img src="./src/assets/logo.svg" height=300/>
<div>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/evastudio)
![Release: 0.0.1](https://img.shields.io/badge/Release-0.0.1-red)
![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-blue.svg)
[![Github stars](https://img.shields.io/github/stars/oslabs-beta/evastudio?style=social)](https://github.com/oslabs-beta/evaStudio)

<h2>Design and scale a real-time streaming data pipeline at the click of a button.</h2>

[EvaStudio.dev](http://www.evastudio.dev/)

<p align="left"> <b> evaStudio (beta) </b> is a web GUI and testing playground for quickly designing and scaling your event-driven data architecture with Kafka brokers and Zookeeper. Designed with data scientists in mind, EvaStudio makes it easy to develop, orchestrate, experiment, and monitor machine learning workflows at scale, so you can focus on analytical challenges instead of infrastructure.</p>

<br/>

<div align="left">




# Getting Started
To install our web application locally, you will need Node Package Manager, Java JDK 11 and Maven. Clone this repository, and run `npm install` at the root of the directory. Then run `mvn spring-boot:run` to start the "java_backend" microservice.

## Features
* Design your pipeline using a drag-and-drop tool for extracting, transforming, and loading data in and out of Kafka messaging brokers.
* Source streaming data from a CSV, SQL database, or HTTP/API, to Apache Spark or Jupyter Notebook for analysis.
* Manage topics and messages directly inside our web GUI. 
* <b> Monitor cluster health, and check performance metrics for load, latency, throughput, disk usage, and messages and bytes in and out per second, in order to test and scale your data architecture before loading into production. </b>

You can also connect your existing Kafka clusters on AWS, provided that you follow our [setup instructions](https://www.evastudio.dev) for Prometheus, JMX, and Grafana installation.

# Interface
### 1. Drag-and-drop data pipeline designer


### 2. Streaming CSV to Kafka



### 3. Connect to various sinks and sources for analysis

### 4. Monitor metrics



# Application Architecture and Logic



## Built With
* [Spring for Apache Kafka](https://spring.io/projects/spring-kafka) 2.8.9
* [Java Spring Boot](https://spring.io/projects/spring-boot) 2.6.9 with [Spring Web Services] (https://spring.io/projects/spring-ws) 3.1.1
* [Apache Maven](https://maven.apache.org/download.cgi) 3.8.6 requiring [Java SE Development Kit] (https://www.oracle.com/java/technologies/downloads/#java11) 11.0.16 
* ReactJS 
* NodeJS 
* Typescript
* Tailwind.css
* PostgreSQL
* Docker
* Prometheus / JMX
* Grafana
* React Flow
* Material UI
* Amazon Web Services & Github Actions for CI/CD
   
DOCUMENTATION:
* Next.js
* Vercel
   
   
# Core Team



</div>
