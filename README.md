<h1 align="center">API Investments</h1>

<h4 align="center">Serviços para obter valores atuais das taxas: poupança, Selic e IPCA.
<br />Serviços para obter títulos disponíveis do Tesouro Direto para investimentos no Brasil.</h4>

<h5 align="center"><i>Services to obtain current rates values: savings, Selic and IPCA.
<br />Services to obtain available Treasury Direct securities for investments in Brazil.</i></h5>
<a href="https://travis-ci.org/jonatascp/api-investments">
  <img src="https://travis-ci.org/jonatascp/api-investments.svg?branch=master" alt="Travis CI" />
</a>
<br />

## Get started
```sh
$ git clone https://github.com/jonatascp/api-investments.git
$ cd api-investments
$ npm install api-investments
$ npm start
```

## Visit online version
https://api-investments.appspot.com

## Example open Home page, running local
http://localhost:8080

## Example return JSON Poupança (https://api-investments.appspot.com/poupanca)
```js
{  
   "title":"INDICADOR_POUPANCA",
   "date-update-formatted":"04/07/2017",
   "rate":{  
      "value":"0,6059"
   },
   "date-update":1499137200000
}
```

## Example return JSON Selic (https://api-investments.appspot.com/selic)

```js
{  
   "title":"Taxa Selic",
   "date-update-formatted":"05/07/2017",
   "rate":{  
      "value":"10,25",
      "date-formatted":"31/05/2017"
   },
   "daily":{  
      "value":"10,15",
      "date-formatted":"04/07/2017"
   },
   "date-update":1499269801000
}
```

## Example return JSON Ipca (https://api-investments.appspot.com/ipca)

```js
{  
   "title":"Taxa de Inflação",
   "date-update-formatted":"05/07/2017",
   "rate":{  
      "value":"4,5",
      "obs":"(+/- 1,5 p.p.)"
   },
   "daily":{  
      "value":"3,6",
      "obs":"(período de 12 meses - IPCA)"
   },
   "date-update":1499269801000
}
```

## Example return JSON Títulos Tesouro direto (https://api-investments.appspot.com/titulos-tesouro-direto)

```js
{  
   "date-formatted":"05/07/2017 12:01",
   "investmentSecurities":[  
      {  
         "title":"Tesouro IPCA+ 2024 (NTNB Princ)",
         "dueDate":"15/08/2024",
         "rateReturn":"5,56",
         "minimumValue":"R$40,85",
         "unitPrice":"R$2.042,69"
      },
      {  
         "title":"Tesouro IPCA+ 2045 (NTNB Princ)",
         "dueDate":"15/05/2045",
         "rateReturn":"5,59",
         "minimumValue":"R$33,09",
         "unitPrice":"R$661,83"
      },
      {  
         "title":"Tesouro Prefixado com Juros Semestrais 2027 (NTNF)",
         "dueDate":"01/01/2027",
         "rateReturn":"10,47",
         "minimumValue":"R$39,06",
         "unitPrice":"R$976,58"
      },
      {  
         "title":"Tesouro Selic 2023 (LFT)",
         "dueDate":"01/03/2023",
         "rateReturn":"0,02",
         "minimumValue":"R$89,24",
         "unitPrice":"R$8.924,23"
      }
   ],
   "securitiesRedeem":[  
      {  
         "title":"Tesouro IPCA+ 2019 (NTNB Princ)",
         "dueDate":"15/05/2019",
         "rateReturn":"4,69",
         "unitPrice":"R$2.754,17"
      },
      {  
         "title":"Tesouro IPCA+ com Juros Semestrais 2020 (NTNB)",
         "dueDate":"15/08/2020",
         "rateReturn":"5,22",
         "unitPrice":"R$3.131,22"
      },
      {  
         "title":"Tesouro Prefixado 2021 (LTN)",
         "dueDate":"01/01/2021",
         "rateReturn":"10,08",
         "unitPrice":"R$716,16"
      },
      {  
         "title":"Tesouro Prefixado 2023 (LTN)",
         "dueDate":"01/01/2023",
         "rateReturn":"10,59",
         "unitPrice":"R$576,70"
      },
      {  
         "title":"Tesouro IGPM+ com Juros Semestrais 2021 (NTNC)",
         "dueDate":"01/04/2021",
         "rateReturn":"5,46",
         "unitPrice":"R$3.647,52"
      }
   ]
}
```

## License
MIT
