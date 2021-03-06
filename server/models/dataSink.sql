CREATE TABLE datasink.events (
  "_id" serial PRIMARY KEY NOT NULL,
  "timestamp" varchar,
  "message" varchar,
  "topic" varchar
);

UPDATE datasink.events SET topic = 'jsonTopic' WHERE _id > 0;

CREATE TABLE datasink.topics (
  "_id" SERIAL PRIMARY KEY NOT NULL,
  "topicname" VARCHAR NOT NULL,
  "partitions" VARCHAR NOT NULL,
  "replicas" VARCHAR NOT NULL
);

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-metrics', 12, 12)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-command', 1, 1)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-controlcenter-6-1-0-1-MetricsAgreggateStore-repartition', 1, 1)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_consumer_offsets', 10, 2)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_oprtr-metric', 12, 2)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-heartbeats', 1, 1)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-gateway-speed', 1, 1)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-speed-raw-sensor', 2, 2)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas)
VALUES ('_evastudio-speed-raw-sensor', 2, 2)
RETURNING *;


INSERT INTO datasink.topics(topicname, partitions, replicas) 
VALUES ('_evastudio-audit-log-events', 10, 2)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas) 
VALUES ('_evastudio-processing-logs', 1, 1)
RETURNING *;

INSERT INTO datasink.topics(topicname, partitions, replicas) 
VALUES ('_evastudio-processing-logs', 1, 1)
RETURNING *;

ALTER TABLE datasink.topics ADD topic VARCHAR;
ALTER TABLE datasink.topics ADD topic VARCHAR;

UPDATE datasink.topics SET topic = 'jsonTopic' WHERE _id > 0;

