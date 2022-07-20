CREATE TABLE data_sink.events (
  "_id" serial NOT NULL,
  "timestamp" varchar,
  "message" varchar
)

CREATE TABLE data_sink.topics (
  "_id" serial NOT NULL,
  "topic" varchar
)