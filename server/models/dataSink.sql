CREATE TABLE datasink.events (
  "_id" serial NOT NULL,
  "timestamp" varchar,
  "message" varchar,
  "topic" varchar
);


INSERT INTO datasink.events (timestamp, message)
SELECT timestamp, value
FROM messages;

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