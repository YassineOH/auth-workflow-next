CREATE TABLE IF NOT EXISTS "auth_workflow_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(265) NOT NULL,
	"email" varchar(265) NOT NULL
);
