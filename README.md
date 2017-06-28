<h1 align="center">API Investments</h1>

<h4 align="center">Serviço para obter valores atuais das seguintes taxas: poupança, Selic e IPCA.</h4>

<h5 align="center"><i>Service to obtain current values ​​of the following rates: Savings, Selic and IPCA.</i></h5>

<br />

## Get started

```sh
$ git clone https://github.com/jonatascp/api-investments.git
$ cd api-investments
$ npm install api-investments
$ npm start
```

## Example open Home page

http://localhost:3000

## Example return JSON Poupança (http://localhost:3000/poupanca)

```js
{  
   "date-update":"2017-06-23T00:00:00-03:00",
   "title":"INDICADOR_POUPANCA",
   "rate":{  
      "value":"0,5519"
   }
}
```

## Example return JSON Selic (http://localhost:3000/selic)

```js
{  
   "date-update":"2017-06-27T21:45:02-03:00",
   "title":"Taxa Selic",
   "rate":{  
      "value":"10,25",
      "date":"31/05/2017"
   },
   "daily":{  
      "value":"10,15",
      "date":"27/06/2017"
   }
}
```
