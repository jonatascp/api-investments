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
   "data":"27/06/2017 15:38",
   "titulosInvestir":[  
      {  
         "titulo":"Tesouro IPCA+ 2024 (NTNB Princ)",
         "vencimento":"15/08/2024",
         "taxaRendimento":"5,58",
         "valorMinimo":"R$40,76",
         "precoUnitario":"R$2.038,24"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2050 (NTNB)",
         "vencimento":"15/08/2050",
         "taxaRendimento":"5,64",
         "valorMinimo":"R$32,29",
         "precoUnitario":"R$3.229,17"
      },
      {  
         "titulo":"Tesouro Prefixado 2020 (LTN)",
         "vencimento":"01/01/2020",
         "taxaRendimento":"9,67",
         "valorMinimo":"R$31,74",
         "precoUnitario":"R$793,63"
      }
   ],
   "titulosResgatar":[  
      {  
         "titulo":"Tesouro IPCA+ 2019 (NTNB Princ)",
         "vencimento":"15/05/2019",
         "taxaRendimento":"5,00",
         "precoUnitario":"R$2.737,31"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2020 (NTNB)",
         "vencimento":"15/08/2020",
         "taxaRendimento":"5,39",
         "precoUnitario":"R$3.114,54"
      },
      {  
         "titulo":"Tesouro IPCA+ com Juros Semestrais 2050 (NTNB)",
         "vencimento":"15/08/2050",
         "taxaRendimento":"5,76",
         "precoUnitario":"R$3.175,01"
      },
      {  
         "titulo":"Tesouro Prefixado 2021 (LTN)",
         "vencimento":"01/01/2021",
         "taxaRendimento":"10,39",
         "precoUnitario":"R$707,53"
      },
      {  
         "titulo":"Tesouro Prefixado 2023 (LTN)",
         "vencimento":"01/01/2023",
         "taxaRendimento":"10,90",
         "precoUnitario":"R$566,54"
      },
      {  
         "titulo":"Tesouro Prefixado com Juros Semestrais 2027 (NTNF)",
         "vencimento":"01/01/2027",
         "taxaRendimento":"10,87",
         "precoUnitario":"R$1.000,99"
      },
      {  
         "titulo":"Tesouro Selic 2021 (LFT)",
         "vencimento":"01/03/2021",
         "taxaRendimento":"0,06",
         "precoUnitario":"R$8.894,24"
      }
   ]
}
```
