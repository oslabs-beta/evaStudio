<div align="center">
   <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/evaStudio_small.png" height=300/>
<div>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/evastudio)
![Release: 0.0.1](https://img.shields.io/badge/Release-0.0.1-red)
![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-blue.svg)
[![Github stars](https://img.shields.io/github/stars/oslabs-beta/evastudio?style=social)](https://github.com/oslabs-beta/evaStudio)

<h2>Design and scale a real-time streaming data pipeline at the click of a button.</h2>


<p align="left"> <b> evaStudio (beta) </b> is a web GUI and testing playground for quickly designing and scaling your event-driven data architecture with Kafka brokers and Zookeeper. Designed with data scientists in mind, EvaStudio makes it easier to develop, orchestrate, experiment, and monitor machine learning workflows at scale, so you can focus on analytical challenges instead of infrastructure.</p>

<br/>

<div align="left">




# Getting Started
To install our web application locally, you will need Docker, Node Package Manager, Java JDK 11 and Maven. Clone this repository, and run `npm install` at the root of the directory. Then run `mvn spring-boot:run` to start the "java_backend" microservice. 

## Features
* Design your pipeline using a drag-and-drop tool for extracting, transforming, and loading data in and out of Kafka messaging brokers.
* Source streaming data from a CSV, SQL database, or HTTP/API, to Apache Spark or Jupyter Notebook for analysis.
* Manage topics and messages directly inside our web GUI. 
* <b> Monitor cluster health, and check performance metrics for load, latency, throughput, disk usage, and messages and bytes in and out per second, in order to test and scale your data architecture before loading into production. </b>

You can also connect your existing Kafka clusters on AWS, provided that you follow our [setup instructions](https://www.evastudio.dev) for Prometheus, JMX, and Grafana installation.

# Interface
### 1. Drag-and-drop data pipeline designer

   < video placeholder >

### 2. Streaming CSV to Kafka

   < video placeholder >

### 3. Connect to various sinks and sources for analysis
      
   < image placeholder >

### 4. Monitor metrics

   < image placeholder >


# Application Architecture and Logic

 < Placeholder:  Kafka microservices, React with Redux & React Router, Docker, Prometheus & JMX >

evaStudio is a browser-based application built using ReactJs and Node/Express, with a Java Spring Boot microservice to interface with Kafka servers and Zookeeper. In our beta version, we are exposing data endpoints on Kafka clusters using Prometheus and JMX, and displaying analytics with Grafana. In iteration, we plan to make loading and real-time updating of these panels faster using D3. We use React Flow for a drag-and-drop GUI for sketching out a data pipeline. We connect data sources and sinks to a user-selected number of Kafka servers locally, to be spun up with Docker.

Currently, we allow for data to be imported as a CSV and "mock-streamed" for real-time analytics. We also connect to the PostgreSQL database, and allow for data to be streamed from an HTTP or API endpoint. We provide the option of Jupyter Hub or Spark for analytics. Future iterations will allow for more data transformations, mapping/reducing/filtering, and connections to more microservices through the GUI tool that enable easier deployment of machine learning models and applications. We will also be making our application available on DockerHub.


## Built With
* [Spring for Apache Kafka](https://spring.io/projects/spring-kafka) 2.8.9
* [Java Spring Boot](https://spring.io/projects/spring-boot) 2.6.9 with [Spring Web Services](https://spring.io/projects/spring-ws) 3.1.1
* [Apache Maven](https://maven.apache.org/download.cgi) 3.8.6 requiring [Java SE Development Kit](https://www.oracle.com/java/technologies/downloads/#java11) 11.0.16 
* ReactJS with Redux, React Router
* React Flow
* NodeJS with Express 
* Typescript
* Tailwind.css
* PostgreSQL
* Docker
* Prometheus / JMX
* Grafana
* Material UI
* JUnit, Embedded Kafka & Mockito for unit & integration testing
* Amazon Web Services & Github Actions for CI/CD
   
DOCUMENTATION:
* Next.js
* Vercel
   
   
# Core Team

<table><tbody><tr>
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/andres.jpg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Andres Chaparro</strong>
    <br/>
    <a href="https://github.com/anch09">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/andres-chaparro-13b063135/">LinkedIn</a>
  </td>
   
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/kaitlin.png" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Kaitlin Zhang</strong>
    <br/>
    <a href="https://github.com/kaizengrowth">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/kaizengrowth/">LinkedIn</a>
  </td>
   
   
  <td align="center" width="150"> 
    <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/max.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Maxwell Shick</strong>
    <br/>
    <a href="https://github.com/mshick97/">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/maxwell-shick/">LinkedIn</a>
   </td>
   
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/perla.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Perla Royer</strong>
    <br/>
    <a href="https://github.com/sattwyk">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/sattwyk/">LinkedIn</a>
  </td>
   
  <td align="center" width="150">
    <img src="https://github.com/oslabs-beta/evaStudio/blob/readme/src/assets/sattwik.jpeg" style="height: 5rem; width: 5rem;" />
    <br/>
    <strong>Sattwik Biswal </strong>
    <br/>
    <a href="https://github.com/sattwyk">GitHub</a>
    <br/>
    <a href="https://www.linkedin.com/in/sattwyk/">LinkedIn</a>
  </td>
</tr></tbody></table>


</div>
