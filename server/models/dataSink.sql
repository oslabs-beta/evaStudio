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