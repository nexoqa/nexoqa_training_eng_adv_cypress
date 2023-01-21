# NexoQA training Eng Adv Cypress
# Abouts

- Forked client and server from git@github.com:codyseibert/tab-tracker.git

## Tab Tracker

A web application for keeping track songs

## Setup

You need to have Node Js installed: <https://nodejs.org/en/>

You must at least have **NODE version 16.13.2**

To navigate the SQLite DB, you can use an application such as [THIS](https://sqlitebrowser.org/dl/) one

### Start Server and Client

``` bash
docker-compose up -d
```

### Stope Server and Client

``` bash
docker-compose down
```

### Start only Client

``` bash
docker-compose -f docker-compose-client.yaml up -d 
```

### Stop only Client

``` bash
docker-compose -f docker-compose-client.yaml down
```