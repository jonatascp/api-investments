<h1 align="center">API Investments</h1>

<h4 align="center">Serviços para obter valores atuais das taxas: poupança, Selic e IPCA.
<br />Serviços para obter títulos disponíveis do Tesouro Direto para investimentos no Brasil.</h4>

<h5 align="center"><i>Services to obtain current rates values: savings, Selic and IPCA.
<br />Services to obtain available Treasury Direct securities for investments in Brazil.</i></h5>

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

## Example return JSON Ipca (http://localhost:3000/ipca)

```js
{  
   "date-update":"2017-06-27T21:55:01-03:00",
   "title":"Taxa de Inflação",
   "rate":{  
      "value":"4,5",
      "obs":"(+/- 1,5 p.p.)"
   },
   "daily":{  
      "value":"3,6",
      "obs":"(período de 12 meses - IPCA)"
   }
}
```

## Example return JSON Títulos Tesouro direto (http://localhost:3000/titulos-tesouro-direto)

```js
{  
   "date":"28/06/2017 15:45",
   "investmentSecurities":[  
      {  
         "title":"Tesouro IPCA+ 2024 (NTNB Princ)",
         "dueDate":"15/08/2024",
         "rateReturn":"5,57",
         "minimumValue":"R$40,79",
         "unitPrice":"R$2.039,93"
      },
      {  
         "title":"Tesouro IPCA+ 2035 (NTNB Princ)",
         "dueDate":"15/05/2035",
         "rateReturn":"5,62",
         "minimumValue":"R$33,95",
         "unitPrice":"R$1.131,95"
      },
      {  
         "title":"Tesouro IPCA+ 2045 (NTNB Princ)",
         "dueDate":"15/05/2045",
         "rateReturn":"5,62",
         "minimumValue":"R$32,80",
         "unitPrice":"R$656,18"
      },
      {  
         "title":"Tesouro Selic 2023 (LFT)",
         "dueDate":"01/03/2023",
         "rateReturn":"0,02",
         "minimumValue":"R$89,07",
         "unitPrice":"R$8.907,10"
      }
   ],
   "securitiesRedeem":[  
      {  
         "title":"Tesouro IPCA+ 2019 (NTNB Princ)",
         "dueDate":"15/05/2019",
         "rateReturn":"5,00",
         "unitPrice":"R$2.737,68"
      },
      {  
         "title":"Tesouro IPCA+ com Juros Semestrais 2045 (NTNB)",
         "dueDate":"15/05/2045",
         "rateReturn":"5,79",
         "unitPrice":"R$3.112,31"
      },
      {  
         "title":"Tesouro IPCA+ com Juros Semestrais 2050 (NTNB)",
         "dueDate":"15/08/2050",
         "rateReturn":"5,74",
         "unitPrice":"R$3.184,46"
      },
      {  
         "title":"Tesouro Prefixado com Juros Semestrais 2025 (NTNF)",
         "dueDate":"01/01/2025",
         "rateReturn":"10,65",
         "unitPrice":"R$1.018,33"
      },
      {  
         "title":"Tesouro Prefixado com Juros Semestrais 2027 (NTNF)",
         "dueDate":"01/01/2027",
         "rateReturn":"10,70",
         "unitPrice":"R$1.010,67"
      },
      {  
         "title":"Tesouro Selic 2021 (LFT)",
         "dueDate":"01/03/2021",
         "rateReturn":"0,06",
         "unitPrice":"R$8.897,67"
      },
      {  
         "title":"Tesouro IGPM+ com Juros Semestrais 2031 (NTNC)",
         "dueDate":"01/01/2031",
         "rateReturn":"5,70",
         "unitPrice":"R$5.745,24"
      }
   ]
}
```
