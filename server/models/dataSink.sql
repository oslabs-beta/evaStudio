CREATE TABLE datasink.events (
  "_id" serial NOT NULL,
  "topic" varchar(255),
  "timestamp" varchar(255),
  "message" varchar(255)
)

CREATE TABLE datasink.topics (
  "_id" serial NOT NULL,
  "name" varchar,
  "partitions" int,
  "replicas" int
)