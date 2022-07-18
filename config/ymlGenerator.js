const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const ymlGenerator = () => {

  const JMX = {
    image: "sscaling/jmx-prometheus-exporter",
    environment: {
      // CONFIG_YML: "/../jmx_exporter/config.yaml",
      JVM_OPTS: "-Xmx512M",
    },
    ports: [],
    // volumes: [],
    container_name: "",
    depends_on: []
  };

  const KAFKA_BROKER = {
    image: "confluentinc/cp-kafka",
    environment: {
      KAFKA_ZOOKEEPER_CONNECT: "zookeeper1:2181",
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: "PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT",
      KAFKA_INTER_BROKER_LISTENER_NAME: "PLAINTEXT",
      CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: "zookeeper1:2181",
      CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1,
      CONFLUENT_METRICS_ENABLE: "false",
      KAFKA_HEAP_OPTS: "-Xmx512M -Xms512M",
      KAFKA_BROKER_ID: 101,
      KAFKA_JMX_PORT: 9991,
      KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://kafka101:29092,PLAINTEXT_HOST://localhost:9091",
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 2,
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 2,
      CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: "kafka101:29092"
    },
    ports: [],
    volumes: [],
    container_name: "",
    depends_on: ["zookeeper","postgres"]
  };

  const ZOOKEPER = {
    image: "confluentinc/cp-zookeeper",
    environment: {
      ZOOKEEPER_CLIENT_PORT: 2181,
      ZOOKEEPER_TICK_TIME: 2000,
      ZOOKEEPER_INIT_LIMIT: 5,
      ZOOKEEPER_SYNC_LIMIT: 2
    },
    ports: ["2181:2181"],
    container_name: "zookeeper"
  };

  const PROMETHEUS = {
    image: "prom/prometheus",
    ports: ["9090:9090"],
    // volumes: [],
    // command: "",
    container_name: "prometheus"
  };

  const GRAFANA = {
    image: "grafana/grafana",
    ports: ["3050:3050"],
    environment: {
      GF_PATHS_DATA: "/var/lib/grafana",
      GF_SECURITY_ALLOW_EMBEDDING: "true",
      GF_AUTH_ANONYMOUS_ENABLED: "true",
      GF_SMTP_ENABLED: "true",
      GF_SECURITY_ADMIN_PASSWORD: "evastudio"
    },
    // volumes: [],
    container_name: "grafana",
    depends_on: ["prometheus"]
  };

  const POSTGRES = {
    image: "postgres",
    environment: {
      POSTGRES_PASSWORD: "admin",
      POSTGRES_USER: "adminEva",
      POSTGRES_DB: "evaDB"
    },
    container_name: "postgres"
  };

  const JUPYTER = {
    image: "jupyterhub/jupyterhub",
    ports: ["8000:8000"],
    container_name: "jupyterhub"
  };

  const SPARK = {
    image: "bitnami/spark",
    container_name: "spark"
  };

  const YAML = {};

  return (brokersInput, source, sink) => {
    try {
      YAML.services = {};
      if(source === 'postgresql') YAML.services.postgres = POSTGRES;
      if(sink === 'jupyter') YAML.services.jupyter = JUPYTER;
      if(sink === 'spark') YAML.services.spark = SPARK;
      YAML.services.zookeeper = ZOOKEPER;
      YAML.services.prometheus = PROMETHEUS;
      YAML.services.grafana = GRAFANA;

      for(let i = 0; i < brokersInput; i++){

        YAML.services[`jmx-kafka${1 + i}`] = {
          ...JMX,
          ports: [`${5556 + i}:5556`],
          container_name: `jmx-kafka${1 + i}`,
          depends_on: [`kafka${1 + i}`]
        }

        YAML.services[`kafka${1 + i}`] = {
          ...KAFKA_BROKER,
          ports: [
            `909${1 + i}:909${1 + i}`,
            `999${1 + i}:999${1 + i}`
          ],
          container_name: `kafka${1 + i}`,
          environment: {
            ...KAFKA_BROKER.environment,
            KAFKA_BROKER_ID: 101 + i,
            KAFKA_JMX_PORT: 9991 + i,
            KAFKA_ADVERTISED_LISTENERS: `PLAINTEXT://kafka${
              i + 1
            }:29092,PLAINTEXT_HOST://localhost:909${i + 1}`,
            KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR:
              brokersInput < 3 ? brokersInput : 3,
            KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR:
              brokersInput < 3 ? brokersInput : 3,
            CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: `kafka${i + 1}:29092`
          }
        }
      }

      fs.writeFileSync(
        path.join(__dirname, '/docker/docker-compose.yml'),
        yaml.dump(YAML, { noRefs: true})
      );
    }
    catch (error) {
      return console.log(error);
    }
  }
}

module.exports = ymlGenerator();