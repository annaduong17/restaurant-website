SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.users (
  "_id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" VARCHAR(50) NOT NULL, 
  "last_name" VARCHAR(50) NOT NULL, 
  "email" VARCHAR(50) NOT NULL UNIQUE, 
  "password" VARCHAR(100) NOT NULL
);

CREATE TABLE public.reservations (
  "_id" SERIAL PRIMARY KEY NOT NULL,
  "date" DATE NOT NULL, 
  "time" TIME NOT NULL,
  "card_id" INT NOT NULL, 
  "user_id" INT NOT NULL
);

CREATE TABLE public.cards(
  "_id" SERIAL PRIMARY KEY NOT NULL, 
  "cardholder_name" VARCHAR(100) NOT NULL, 
  "card_type" VARCHAR(50) NOT NULL, 
  "card_number" VARCHAR(16) NOT NULL,
  "exp_date" DATE NOT NULL,
  "cvv_cvc" VARCHAR(4) NOT NULL,
  "billing_address" VARCHAR(100) NOT NULL
);

ALTER TABLE reservations ADD CONSTRAINT "reservations_fk1" FOREIGN KEY ("user_id") REFERENCES users("_id");

ALTER TABLE reservations ADD CONSTRAINT "reservations_fk2" FOREIGN KEY ("card_id") REFERENCES cards("_id");

ALTER TABLE cards ADD CONSTRAINT "cards_fk" FOREIGN KEY ("res_id") REFERENCES reservations("_id");


